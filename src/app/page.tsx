"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UniversityListings from "@/components/UniversityListings";
import HowItWorks from "@/components/HowItWorks";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  Headphones,
  Award,
  ChevronDown,
  CheckCircle2,
  X,
  Send,
  Building,
  Mail,
  Phone,
  User,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agencyName: "",
    city: "",
    role: "Educational Counsellor",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Highest Industry Commissions",
      desc: "Earn 18% to 25% direct commission per confirmed student enrollment across 50+ UGC-DEB approved online universities.",
      color: "from-blue-600 to-sky-500",
    },
    {
      icon: ShieldCheck,
      title: "100% UGC-DEB Compliance",
      desc: "All degree programs are UGC-DEB entitled, NAAC A+/A++ accredited, ensuring valid qualifications for government & MNC jobs.",
      color: "from-emerald-600 to-teal-500",
    },
    {
      icon: Zap,
      title: "Real-Time Admission Dashboard",
      desc: "Track student application status, fee verification, document clearance, and commission release in real time.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Headphones,
      title: "Dedicated Account Manager",
      desc: "Get 1-on-1 assistance from assigned university counsellors, marketing collateral support, and student guidance kits.",
      color: "from-sky-500 to-blue-600",
    },
  ];

  const faqs = [
    {
      question: "Who can become an EduBridge India Partner?",
      answer:
        "Educational consultants, career counsellors, ed-tech agencies, coaching institutes, and independent professionals in India can register as partners to enroll students into online university degree programs.",
    },
    {
      question: "How and when are partner commissions paid out?",
      answer:
        "Commissions are calculated per successful student fee payment verified by the university. Payments are settled bi-weekly directly to your registered Indian bank account.",
    },
    {
      question:
        "Are online degrees from partner universities UGC-DEB recognized?",
      answer:
        "Yes. All partner institutions listed on EduBridge India are fully recognized by the UGC-Distance Education Bureau (UGC-DEB) and held to strict statutory standards. Degree recognition can also be independently verified via deb.ugc.ac.in.",
    },
    {
      question: "Is there any fee or subscription cost to join as a partner?",
      answer:
        "No! Joining EduBridge India as an authorized educational business partner is 100% free with zero registration fees or hidden subscription charges.",
    },
    {
      question: "What support does EduBridge India provide to partners?",
      answer:
        "Partners receive official university brochures, digital marketing banners, lead tracking CRM access, dedicated account managers, and live training sessions on student counselling.",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setPartnerModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        agencyName: "",
        city: "",
        role: "Educational Counsellor",
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-400 selection:text-slate-950">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* University Listings Section */}
        <UniversityListings />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Partner Benefits Section */}
        <section id="benefits" className="py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/20 text-xs sm:text-sm font-semibold text-blue-700 dark:text-sky-300">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Why Partner With EduBridge India</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
                Built to Scale Your Counselling Business
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
                We empower educational agents with technology, direct university
                access, and market-leading payout rates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass-panel rounded-3xl p-6 flex flex-col justify-between border border-slate-200/70 dark:border-slate-800 shadow-xl hover:border-blue-400/40 transition-all group"
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-2xl  ${b.color} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
                        {b.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* UGC-DEB Compliance & Legal Verification Section */}
        <section
          id="compliance"
          className="py-16 bg-blue-950/40 border-y border-blue-500/20 text-white relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" /> Regulatory &amp; UGC-DEB
                  Assurance
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading tracking-tight leading-tight">
                  Guaranteed UGC-DEB Approved Degree Validity
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Degree recognition is paramount. EduBridge India strictly
                  lists institutions that hold valid Distance Education Bureau
                  (DEB) entitlements under University Grants Commission (UGC)
                  regulations. Online degrees obtained through our partner
                  universities are equivalent to on-campus degrees for higher
                  education, central/state government employment, and global
                  workplace visa evaluations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Equal to regular campus degrees (UGC Act 1956)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WES / IQAS credential evaluation compatible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Accepted for UPSC, SSC &amp; Banking exams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct portal status checks via deb.ugc.ac.in</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-sky-400/30 text-slate-900 dark:text-slate-100 shadow-2xl">
                <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                  <BookOpen className="w-5 h-5 text-amber-500" /> Verify
                  University Status
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Partners and candidates are encouraged to double check
                  approval lists published by UGC-DEB before processing
                  admissions.
                </p>
                <a
                  href="https://deb.ugc.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-700 to-sky-600 text-white text-xs font-bold shadow-md flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                >
                  Visit Official UGC-DEB Portal{" "}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section id="faq" className="py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                Everything you need to know about joining EduBridge India as an
                educational partner.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base focus-visible-ring"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-sky-500 shrink-0 transition-transform ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-200/50 dark:border-slate-800/50 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action Band */}
        <CtaBand />
      </main>

      <Footer />

      {/* Floating AI / Static Chatbot */}
      <FloatingChatbot />

      {/* Partner Registration Modal (Triggered by buttons across the site) */}
      <AnimatePresence>
        {partnerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPartnerModalOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-400/30 z-10 my-8"
            >
              <button
                type="button"
                onClick={() => setPartnerModalOpen(false)}
                aria-label="Close registration form"
                className="absolute top-5 right-5 p-2 rounded-full glass-panel hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus-visible-ring"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                    Registration Submitted!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Thank you, <strong>{formData.name}</strong>. Our partner
                    onboarding desk will contact you at{" "}
                    <strong>{formData.phone}</strong> within 2 hours.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="mb-6 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500">
                      Free Partner Onboarding
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                      Become an EduBridge Partner
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Fill in your details below to get instant access to the
                      partner commission portal.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Rajesh Kumar"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus-visible-ring"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="rajesh@agency.com"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus-visible-ring"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Mobile Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 9876543210"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus-visible-ring"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Agency / Center Name
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            value={formData.agencyName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                agencyName: e.target.value,
                              })
                            }
                            placeholder="e.g. Apex Edu Services"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus-visible-ring"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="e.g. Jaipur"
                          className="w-full px-3 py-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus-visible-ring"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Primary Role
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus-visible-ring"
                      >
                        <option value="Educational Counsellor">
                          Educational Counsellor
                        </option>
                        <option value="Ed-Tech Agency Owner">
                          Ed-Tech Agency Owner
                        </option>
                        <option value="Coaching Institute Center">
                          Coaching Institute Center
                        </option>
                        <option value="Freelance Admission Executive">
                          Freelance Admission Executive
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-md flex items-center justify-center gap-2 transition-colors focus-visible-ring mt-2"
                    >
                      Submit Partner Application <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
