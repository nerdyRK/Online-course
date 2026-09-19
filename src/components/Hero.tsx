"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Building2,
  Users,
  IndianRupee,
  Award,
  ArrowRight,
  Search,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

function StatCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(
          target % 1 !== 0 ? Number(start.toFixed(1)) : Math.floor(start),
        );
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span
      ref={ref}
      className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-blue-900 dark:text-sky-300"
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const barData = [
    { month: "May", height: "45%" },
    { month: "Jun", height: "60%" },
    { month: "Jul", height: "80%" },
    { month: "Aug", height: "68%" },
    { month: "Sep", height: "95%" },
  ];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Soft Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-400/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/20 text-xs sm:text-sm font-semibold text-blue-700 dark:text-sky-300 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>
                India&apos;s Premier B2B2C Online Degree Enrollment Ecosystem
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white leading-[1.12] tracking-tight">
              Bridge Students to <br />
              <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-amber-500 bg-clip-text text-transparent">
                UGC-DEB Approved
              </span>{" "}
              <br />
              University Programs.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl leading-relaxed">
              Empower your education consultancy or business network. Onboard
              students seamlessly into online MBA, MCA, BBA &amp; degree courses
              from top Indian universities while earning direct partner
              commissions.
            </p>

            {/* CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#become-partner"
                className="px-7 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 focus-visible-ring transition-all"
              >
                Become a Partner <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#universities"
                className="px-7 py-3.5 rounded-2xl glass-panel text-slate-800 dark:text-slate-100 hover:bg-blue-500/10 font-bold text-base border border-blue-600/20 flex items-center justify-center gap-2 focus-visible-ring transition-all"
              >
                <Search className="w-5 h-5 text-sky-500" /> Explore Universities
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />{" "}
                Transparent Payouts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Verified
                Admissions
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Dedicated
                Account Manager
              </span>
            </div>
          </motion.div>

          {/* Right Floating Mock Partner Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Soft backdrop blur card glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-amber-400 rounded-3xl blur-lg opacity-25" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative glass-panel rounded-3xl p-6 shadow-2xl border border-sky-300/30 dark:border-sky-500/20"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    EP
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      Apex Edutech Partners
                    </h3>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Gold Tier Partner #8402
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Active Status
                </span>
              </div>

              {/* Commission Stats Mini Grid */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3 rounded-xl bg-blue-50/70 dark:bg-slate-900/60 border border-blue-100 dark:border-slate-800">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Total Enrollments
                  </p>
                  <p className="text-xl font-bold font-heading text-blue-900 dark:text-sky-300">
                    142 Students
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-slate-900/60 border border-amber-100 dark:border-slate-800">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Payout Earned
                  </p>
                  <p className="text-xl font-bold font-heading text-amber-600 dark:text-amber-400">
                    ₹8,45,000
                  </p>
                </div>
              </div>

              {/* Bar Graph Simulation */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Monthly Enrollment Growth
                  </span>
                  <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400">
                    +42% vs last Qtr
                  </span>
                </div>
                <div className="h-28 flex items-end justify-between gap-2 pt-2 px-2 border-b border-slate-200/50 dark:border-slate-800/50">
                  {barData.map((bar, idx) => (
                    <div
                      key={bar.month}
                      className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end"
                    >
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: bar.height }}
                        transition={{ duration: 1, delay: 0.4 + idx * 0.1 }}
                        className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-sky-400 shadow-sm"
                      />
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        {bar.month}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Student Activity Mini Item */}
              <div className="mt-4 p-2.5 rounded-xl bg-sky-500/10 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  🎓 Rahul Sharma enrolled in <strong>Amity Online MBA</strong>
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  Commission Approved
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl glass-panel shadow-xl"
        >
          <div className="flex flex-col items-center text-center p-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 dark:text-sky-400 flex items-center justify-center mb-2">
              <Building2 className="w-5 h-5" />
            </div>
            <StatCounter target={50} suffix="+" />
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Partner Universities
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 border-l border-slate-200/50 dark:border-slate-800/50">
            <div className="w-10 h-10 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-300 flex items-center justify-center mb-2">
              <Users className="w-5 h-5" />
            </div>
            <StatCounter target={15000} suffix="+" />
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Students Enrolled
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 border-l border-slate-200/50 dark:border-slate-800/50">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2">
              <IndianRupee className="w-5 h-5" />
            </div>
            <StatCounter target={2.5} prefix="₹" suffix=" Cr+" />
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Partner Commissions Paid
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3 border-l border-slate-200/50 dark:border-slate-800/50">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
              <Award className="w-5 h-5" />
            </div>
            <StatCounter target={98} suffix="%" />
            <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Admission Success Rate
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
