"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-16 px-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:scale-110">
              ND
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">NEURODEV.IN</h3>
              <p className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">Advancing AI Engineering</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-xs font-black text-slate-500 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors tracking-[0.2em]">HOME</Link>
            <Link href="/about" className="text-xs font-black text-slate-500 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors tracking-[0.2em]">ABOUT US</Link>
            <a href="https://chaursia.in" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-slate-500 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors tracking-[0.2em]">PORTFOLIO</a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            © {new Date().getFullYear()} NEURODEV INFRASTRUCTURE
          </p>
          <p className="text-xs font-bold text-slate-400 dark:text-indigo-500/50 tracking-[0.3em] uppercase">
            Built for Pioneers
          </p>
        </div>
      </div>
    </footer>
  );
};
