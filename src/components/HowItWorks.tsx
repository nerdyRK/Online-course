'use client';

import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, SearchCheck, Wallet, ArrowRight, Shield } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Partner Onboarding & KYC',
      desc: 'Register as an EduBridge partner counsellor in under 2 minutes. Complete fast digital KYC verification to unlock partner dashboard access.',
      icon: UserPlus,
      color: 'from-blue-600 to-sky-500',
    },
    {
      num: '02',
      title: 'Student Guidance & Application',
      desc: 'Counsel students using our verified university program database. Submit student applications directly through your dedicated partner portal.',
      icon: SearchCheck,
      color: 'from-sky-500 to-teal-400',
    },
    {
      num: '03',
      title: 'Admission & Instant Commission',
      desc: 'Track admission status live. Upon successful university fee verification, your partner commission is automatically released to your linked bank account.',
      icon: Wallet,
      color: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 relative bg-sky-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/20 text-xs sm:text-sm font-semibold text-blue-700 dark:text-sky-300">
            <Shield className="w-4 h-4 text-amber-500" />
            <span>Simplified 3-Step Partner Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            How EduBridge India Works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A seamless digital workflow connecting educational counsellors, agencies, and institutions directly with India’s leading online universities.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel rounded-3xl p-8 relative flex flex-col justify-between shadow-xl border border-slate-200/70 dark:border-slate-800 hover:border-blue-400/40 transition-all group"
              >
                <div>
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="font-heading font-black text-4xl text-slate-300 dark:text-slate-700">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center text-xs font-semibold text-blue-700 dark:text-sky-400 gap-2">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
