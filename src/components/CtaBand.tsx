'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, PhoneCall, CheckCircle } from 'lucide-react';

export default function CtaBand() {
  return (
    <section id="become-partner" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white shadow-2xl border border-blue-500/30"
        >
          {/* Background Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* CTA Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4" /> Ready to Scale Your Education Business?
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-tight">
                Join 500+ Education Partners &amp; Counsellors Across India
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
                Unlock exclusive admission rights, direct university support, real-time tracking dashboards, and highest industry commission rates.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Zero Platform Subscription Fee
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Dedicated Key Account Manager
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Bi-weekly Commission Settlement
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 items-stretch justify-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#register"
                className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-base shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all focus-visible-ring"
              >
                Register as Partner <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:18001234567"
                className="px-8 py-4 rounded-2xl glass-panel text-white hover:bg-white/10 font-bold text-base border border-slate-700 flex items-center justify-center gap-2 transition-all focus-visible-ring"
              >
                <PhoneCall className="w-5 h-5 text-sky-400" /> Call Partner Desk
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
