'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShieldCheck, MapPin, Award, ArrowRight, Filter, AlertCircle } from 'lucide-react';
import { UNIVERSITIES, University, UniversityType } from '@/data/universities';
import UniversityModal from './UniversityModal';

export default function UniversityListings() {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeUniversity, setActiveUniversity] = useState<University | null>(null);

  const filterTypes = ['All', 'Private', 'Deemed', 'Central', 'State'];

  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES.filter((uni) => {
      const matchesType = selectedType === 'All' || uni.type === selectedType;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        uni.name.toLowerCase().includes(query) ||
        uni.city.toLowerCase().includes(query) ||
        uni.state.toLowerCase().includes(query) ||
        uni.categoryTags.some((tag) => tag.toLowerCase().includes(query)) ||
        uni.programs.some((prog) => prog.title.toLowerCase().includes(query));

      return matchesType && matchesSearch;
    });
  }, [selectedType, searchQuery]);

  return (
    <section id="universities" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/20 text-xs sm:text-sm font-semibold text-blue-700 dark:text-sky-300">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% UGC-DEB Approved Institutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Explore Accredited Partner Universities
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Select top Indian Central, State, Private, and Deemed universities offering online degrees. Filter by program category, university type, or location.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="glass-panel p-4 sm:p-6 rounded-3xl mb-10 shadow-xl border border-sky-300/30 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search university, program (MBA, MCA) or city..."
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus-visible-ring"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 w-full md:w-auto">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Type:
            </span>
            {filterTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all focus-visible-ring ${
                  selectedType === type
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                    : 'glass-panel text-slate-700 dark:text-slate-300 hover:bg-sky-500/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Universities Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredUniversities.map((university) => (
              <motion.article
                layout
                key={university.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-3xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl border border-slate-200/70 dark:border-slate-800 transition-all group"
              >
                <div>
                  {/* Top Bar: Monogram & Badges */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      style={{ background: university.monogramGradient }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-heading font-black text-xl shadow-md group-hover:scale-105 transition-transform"
                    >
                      {university.initials}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-600/10 text-blue-700 dark:text-sky-300 border border-blue-500/20">
                        {university.type}
                      </span>
                      {university.ugcDebApproved && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1 border border-emerald-500/20">
                          <ShieldCheck className="w-3 h-3" /> UGC-DEB
                        </span>
                      )}
                    </div>
                  </div>

                  {/* University Name & Location */}
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {university.name}
                  </h3>

                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400 mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-500" /> {university.city}, {university.state}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold">
                      <Award className="w-3.5 h-3.5" /> Rating: {university.rating}
                    </span>
                  </div>

                  {/* Program Tag Chips */}
                  <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Popular Online Programs
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {university.categoryTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-sky-500/10 text-slate-800 dark:text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Est. {university.estYear}</span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {university.commissionRate} Comm.
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveUniversity(university)}
                    className="text-xs font-bold px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-1.5 focus-visible-ring shadow-md shadow-blue-700/20 transition-all"
                  >
                    View Programs <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result */}
        {filteredUniversities.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-3xl">
            <p className="text-base font-semibold text-slate-600 dark:text-slate-400">
              No universities found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
              }}
              className="mt-3 text-xs font-bold text-blue-600 dark:text-sky-400 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* UGC-DEB Mandated Notice Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Mandatory Verification Notice:</strong> EduBridge India facilitates university outreach for authorized educational business partners. Program recognition status (UGC-DEB distance &amp; online learning approvals) must be verified directly with the official university portal prior to student enrollment.
          </p>
        </div>
      </div>

      {/* University Programs Modal */}
      <UniversityModal
        university={activeUniversity}
        onClose={() => setActiveUniversity(null)}
      />
    </section>
  );
}
