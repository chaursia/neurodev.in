"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Cpu,
  Globe,
  User,
  Code
} from "lucide-react";

const LeftColumnItems = [
  {
    title: "AI-First Community",
    description: "Collaborate with developers specialized in LLMs, Computer Vision, and Generative AI.",
    icon: <Cpu className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
  },
  {
    title: "Open Source Research",
    description: "Join projects focused on pushing the boundaries of AI agentic coding.",
    icon: <Globe className="h-6 w-6 text-blue-500" />
  },
];

const RightColumnItems = [
  {
    title: "Mentorship & Growth",
    description: "Get guidance from experienced AI engineers and senior software architects.",
    icon: <User className="h-6 w-6" />
  },
  {
    title: "Continuous Innovation",
    description: "Everything we build is driven by community and transparency.",
    icon: <Code className="h-6 w-6" />
  },
];

export const TechnicalArsenal = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
          Why join <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">neurodev.in?</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto">
          We are building the most advanced AI engineering community in the world.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10"
        >
          <div className="flex flex-col gap-6">
            {LeftColumnItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-800/50 shadow-sm border border-slate-100 dark:border-white/5 flex flex-col gap-4 transition-colors hover:border-indigo-500/30"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-700 to-blue-800 text-white shadow-2xl relative overflow-hidden group"
        >
          {/* Decorative background circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />

          <div className="relative z-10 flex flex-col gap-6">
            {RightColumnItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                className="p-6 rounded-[1.5rem] bg-white/10 backdrop-blur-md border border-white/10 flex flex-col gap-4 transition-colors hover:bg-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                </div>
                <p className="text-white/80 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
