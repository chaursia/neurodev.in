"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TechnicalArsenal } from "@/components/ui/technical-arsenal";
import { BackgroundBoxes } from "@/components/ui/background-boxes";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { 
  Home as HomeIcon, 
  User, 
  Cpu, 
  Code, 
  Globe, 
  Zap,
  Bot,
  Terminal
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home", icon: <HomeIcon className="h-4 w-4" /> },
    { name: "Features", link: "#features", icon: <Cpu className="h-4 w-4" /> },
    { name: "Community", link: "#community", icon: <Globe className="h-4 w-4" /> },
    { name: "Waitlist", link: "#waitlist", icon: <User className="h-4 w-4" /> },
  ];

  const placeholders = [
    "Enter your email to join the waitlist",
    "Be part of the AI coding revolution",
    "Collaborate with top AI developers",
    "neurodev.in is coming soon",
    "Join our community today",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#4f46e5", "#818cf8", "#c7d2fe"],
    });
    console.log("submitted");
  };

  return (
    <main className="relative min-h-screen w-full bg-slate-50 dark:bg-slate-950 overflow-x-hidden">
      <FloatingNav navItems={navItems} />

      {/* Hero Section with Highlight Effect and Fade-out transition */}
      <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <HeroHighlight 
          containerClassName="h-screen w-full [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
              Building the Future <br /> 
              <span className="text-indigo-600 dark:text-indigo-400">
                Together.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl font-medium">
              A community of developers, creators, and AI enthusiasts working together to push the boundaries of what&apos;s possible in coding and technology.
            </p>

            <div className="w-full max-w-md mx-auto" id="waitlist">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-500 font-medium">
              Join 500+ developers already on the waitlist.
            </p>
          </motion.div>
        </HeroHighlight>
      </section>

      {/* Technical Arsenal Section (Replacing Why Join) */}
      <section id="features" className="relative py-24 px-4 overflow-hidden bg-white dark:bg-black border-y border-black/5 dark:border-white/5">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <BackgroundBoxes className="bg-transparent" />
        </div>
        <div className="relative z-20">
          <TechnicalArsenal />
        </div>
      </section>

      {/* Interactive Experience Section - Replaced with High-Fidelity Glassmorphism */}
      <section id="community" className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 text-center tracking-tighter">
            Our <span className="text-indigo-600">Dynamic Ecosystem.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-center mb-16 max-w-2xl mx-auto font-medium">
            A fluid, ever-evolving space where AI and human creativity merge.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Intelligence", color: "from-emerald-500/20 to-emerald-900/40", icon: <Bot className="h-10 w-10" /> },
              { title: "Speed", color: "from-pink-500/20 to-purple-900/40", icon: <Zap className="h-10 w-10" /> },
              { title: "Collaboration", color: "from-sky-500/20 to-blue-900/40", icon: <Globe className="h-10 w-10" /> },
            ].map((card, idx) => (
              <div 
                key={idx}
                className={cn(
                  "group relative p-8 rounded-3xl border border-white/10 overflow-hidden h-[300px] flex flex-col items-center justify-center transition-all duration-500 hover:scale-[1.02]",
                  "bg-white/5 dark:bg-slate-900/10 backdrop-blur-3xl shadow-2xl"
                )}
              >
                {/* Animated Background Blob */}
                <div className={cn(
                  "absolute -inset-4 bg-gradient-to-br opacity-50 blur-3xl transition-all duration-500 group-hover:opacity-100",
                  card.color
                )} />
                
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white transition-transform duration-500 group-hover:scale-110">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 text-center w-full mt-auto border-t border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-slate-950/30 backdrop-blur-sm">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} neurodev.in. All rights reserved.
        </p>
      </footer>

      <BackgroundBeams className="opacity-40" />
    </main>
  );
}


