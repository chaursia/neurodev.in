"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/ui/footer";
import { Cpu, Users, Globe, Rocket, Shield, Heart } from "lucide-react";

export default function About() {
  const navItems = [
    { name: "Home", link: "/", icon: <Globe className="h-4 w-4" /> },
    { name: "Register", link: "/register", icon: <Users className="h-4 w-4" /> },
  ];

  return (
    <main className="relative min-h-screen w-full bg-slate-50 dark:bg-slate-950 overflow-x-hidden pt-28">
      <FloatingNav navItems={navItems} />

      <div className="max-w-5xl mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter"
          >
            About <span className="text-indigo-600">NeroDev.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            We are a collective of AI engineers, researchers, and creators dedicated to building the next generation of intelligent software.
          </motion.p>
        </section>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-indigo-600 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <h2 className="text-3xl font-black mb-6 tracking-tight">Our Mission</h2>
            <p className="text-indigo-100 text-lg font-medium leading-relaxed">
              To democratize advanced AI engineering by providing a collaborative ecosystem where pioneers can learn, build, and ship production-grade AI applications together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex gap-4 items-start p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm">
              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 transition-transform hover:scale-110">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Transparency</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Open-source at heart, community-driven by design.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-sm">
              <div className="p-3 rounded-2xl bg-pink-50 dark:bg-pink-500/10 text-pink-600 transition-transform hover:scale-110">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Impact</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Building tools that solve real-world problems using AI.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What We Do */}
        <section className="mb-32">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-16 text-center tracking-tighter">What We <span className="text-indigo-600">Build Together.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "AI Frameworks", icon: <Cpu className="h-8 w-8" />, desc: "High-performance libraries for agentic workflows." },
              { title: "Collaborative Research", icon: <Users className="h-8 w-8" />, desc: "Pushing the boundaries of LLM orchestration." },
              { title: "Global Network", icon: <Globe className="h-8 w-8" />, desc: "A connected community of experts across 50+ countries." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 shadow-sm text-center flex flex-col items-center gap-6 group hover:border-indigo-500 transition-colors"
              >
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 text-indigo-600 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-16 rounded-[4rem] bg-gradient-to-br from-indigo-900 to-slate-950 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">Ready to join the revolution?</h2>
          <Link
            href="/register"
            className="px-12 py-5 bg-white text-indigo-950 rounded-full font-black text-xl hover:bg-neutral-100 transition-all shadow-xl inline-flex items-center gap-3 animate-pulse"
          >
            Get Started
            <Rocket className="h-6 w-6" />
          </Link>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}
