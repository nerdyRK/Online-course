'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, Mail, Phone, MapPin, AlertCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-slate-900 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-sky-500 to-amber-500 flex items-center justify-center text-white font-bold shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold font-heading text-white">
                EduBridge <span className="text-amber-500">India</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              EduBridge India is a B2B2C education ecosystem empowering business owners, counsellors, and ed-tech agencies to connect students with top UGC-DEB recognized online university degree programs.
            </p>

            <div className="pt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Official University Channel Partner Desk
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Platform Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#universities" className="hover:text-amber-400 transition-colors">Partner Universities</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-amber-400 transition-colors">Partner Benefits</a></li>
              <li><a href="#compliance" className="hover:text-amber-400 transition-colors">UGC-DEB Regulations</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Partner FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Top Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Popular Programs</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#universities" className="hover:text-amber-400 transition-colors">Online MBA Degrees</a></li>
              <li><a href="#universities" className="hover:text-amber-400 transition-colors">Online MCA &amp; Software</a></li>
              <li><a href="#universities" className="hover:text-amber-400 transition-colors">Online BBA &amp; Management</a></li>
              <li><a href="#universities" className="hover:text-amber-400 transition-colors">Data Science &amp; AI Degrees</a></li>
              <li><a href="#universities" className="hover:text-amber-400 transition-colors">Executive Diplomas</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Partner Support</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>partners@edubridgeindia.in</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Cyber City, Phase II, Gurugram, Haryana 122002</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory UGC-DEB Disclaimer Banner */}
        <div className="my-8 p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-amber-400">Compliance &amp; Recognition Disclaimer</p>
            <p className="leading-relaxed">
              Program recognition (UGC-DEB distance &amp; online learning status) must be independently verified by partners and candidates directly with the respective official university portal (https://deb.ugc.ac.in). EduBridge India provides digital outreach, application technology, and counselling support for authorized partner networks.
            </p>
          </div>
        </div>

        {/* Footer Bottom Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-4">
          <p>© {new Date().getFullYear()} EduBridge India (Demo Phase). All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Partner Agreement</a>
            <a href="https://deb.ugc.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              UGC-DEB Portal <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
