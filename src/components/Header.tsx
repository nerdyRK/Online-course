'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Menu, X, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Universities', href: '#universities' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Partner Benefits', href: '#benefits' },
    { label: 'UGC-DEB Status', href: '#compliance' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group focus-visible-ring rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-sky-500 to-amber-500 flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-heading tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
              EduBridge <span className="text-amber-500">India</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" /> UGC-DEB Verified Partner Portal
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 transition-colors focus-visible-ring rounded px-2 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#partner-login"
            className="text-sm font-semibold text-blue-700 dark:text-sky-300 hover:text-blue-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors focus-visible-ring flex items-center gap-1.5"
          >
            <UserCheck className="w-4 h-4" /> Partner Login
          </a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#become-partner"
            className="text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 focus-visible-ring transition-colors"
          >
            Become a Partner <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="p-2 rounded-lg glass-panel text-slate-700 dark:text-slate-200 focus-visible-ring"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-header border-t border-slate-200/50 dark:border-slate-800/50 px-4 pt-4 pb-6 shadow-xl"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium py-2 px-3 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-sky-500/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col gap-3">
                <a
                  href="#partner-login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl border border-blue-600/30 text-blue-700 dark:text-sky-300 font-semibold text-sm"
                >
                  Partner Login
                </a>
                <a
                  href="#become-partner"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  Become a Partner <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
