'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, MapPin, Calendar, Award, CheckCircle, Percent, ArrowUpRight } from 'lucide-react';
import { University } from '@/data/universities';

interface UniversityModalProps {
  university: University | null;
  onClose: () => void;
}

export default function UniversityModal({ university, onClose }: UniversityModalProps) {
  if (!university) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-400/30 z-10 my-8 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full glass-panel hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible-ring text-slate-600 dark:text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-200/60 dark:border-slate-800/60 pr-8">
            <div
              style={{ background: university.monogramGradient }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-heading font-black text-2xl shadow-lg shrink-0"
            >
              {university.initials}
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-600/10 text-blue-700 dark:text-sky-300 border border-blue-500/20">
                  {university.type} University
                </span>
                {university.ugcDebApproved && (
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> UGC-DEB Approved
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                {university.name}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-500" /> {university.city}, {university.state}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-sky-500" /> Est. {university.estYear}
                </span>
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Award className="w-3.5 h-3.5" /> NAAC / NIRF Rating: {university.rating} / 5.0
                </span>
              </div>
            </div>
          </div>

          {/* Highlights & Partner Commission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="md:col-span-2 p-4 rounded-2xl bg-blue-50/60 dark:bg-slate-900/60 border border-blue-100 dark:border-slate-800">
              <h4 className="text-xs uppercase tracking-wider font-bold text-blue-800 dark:text-sky-300 mb-2">
                University Accreditations & Key Highlights
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {university.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-slate-900/60 border border-amber-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1">
                  <Percent className="w-3.5 h-3.5" /> Partner Commission
                </span>
                <p className="text-2xl font-black font-heading text-amber-600 dark:text-amber-400 mt-1">
                  {university.commissionRate}
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Direct per-enrollment payout for registered counsellors.
                </p>
              </div>
            </div>
          </div>

          {/* Program List */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-heading text-slate-900 dark:text-white flex items-center justify-between">
              <span>Available UGC-DEB Recognized Online Programs</span>
              <span className="text-xs font-normal text-slate-500">({university.programs.length} Active Courses)</span>
            </h4>

            <div className="space-y-3">
              {university.programs.map((prog) => (
                <div
                  key={prog.id}
                  className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm hover:border-blue-400/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-sky-300">
                        {prog.level}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {prog.category}
                      </span>
                    </div>
                    <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                      {prog.title}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Duration: <strong>{prog.duration}</strong> • Mode: <strong>{prog.mode}</strong>
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/50">
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] text-slate-500">Fee per semester</span>
                      <p className="text-sm font-bold text-blue-800 dark:text-sky-300">{prog.feePerSem}</p>
                    </div>
                    <a
                      href="#become-partner"
                      onClick={onClose}
                      className="mt-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 flex items-center gap-0.5"
                    >
                      Enrol Student <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Compliance Disclaimer */}
          <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 text-center">
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
              ⚠️ <strong>Notice:</strong> Program recognition status (UGC-DEB) must be verified directly with the official university portal prior to student enrollment. EduBridge India acts as an authorized outreach partner.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
