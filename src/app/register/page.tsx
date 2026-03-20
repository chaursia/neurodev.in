"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  User, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Github, 
  Link as LinkIcon, 
  Briefcase, 
  Linkedin, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Footer } from "@/components/ui/footer";
import confetti from "canvas-confetti";

const countries = [
  "United States", "India", "United Kingdom", "Canada", "Germany", "France", "Japan", "Brazil", "Australia"
];

const InputField = ({ label, icon, ...props }: any) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">{label}</label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-12 pr-4 py-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 focus:border-indigo-500 dark:focus:border-indigo-500 outline-none transition-all shadow-sm font-medium"
      />
    </div>
  </div>
);

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    address: "",
    projects: "",
    github: "",
    experience: "",
    linkedin: "",
    portfolio: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#4f46e5", "#06b6d4", "#818cf8"]
        });
        setStep(3);
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-slate-50 dark:bg-slate-950 overflow-x-hidden pt-28">
      <FloatingNav navItems={[
        { name: "Home", link: "/", icon: <Globe className="h-4 w-4" /> },
        { name: "Back", link: "/", icon: <ArrowLeft className="h-4 w-4" /> },
      ]} />

      <div className="max-w-3xl mx-auto px-4 py-10 relative z-10">
        {/* Progress Header */}
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter"
          >
            Become a <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">NeuroDev.</span>
          </motion.h1>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  step >= s ? "w-12 bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.5)]" : "w-4 bg-slate-200 dark:bg-slate-800"
                )}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12 rounded-[3.5rem] bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 shadow-2xl backdrop-blur-xl"
            >
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10">
                  <User className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                Basic Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField 
                  label="Full Name" 
                  name="fullName"
                  placeholder="John Doe" 
                  icon={<User size={18} />} 
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="Email Address" 
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  icon={<Mail size={18} />} 
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="WhatsApp Number" 
                  name="whatsapp"
                  placeholder="+91 9876543210" 
                  icon={<Phone size={18} />} 
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Country</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 z-10">
                      <Globe size={18} />
                    </div>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-10 py-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 focus:border-indigo-500 outline-none transition-all shadow-sm font-medium appearance-none"
                    >
                      <option value="">Select Country</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <InputField 
                    label="Full Address" 
                    name="address"
                    placeholder="123 Street, City, State, ZIP" 
                    icon={<MapPin size={18} />} 
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mt-12 flex justify-end">
                <button 
                  onClick={nextStep}
                  className="px-10 py-5 bg-gradient-to-r from-indigo-700 to-indigo-600 text-white rounded-[2rem] font-black text-lg flex items-center gap-3 hover:shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all hover:-translate-y-0.5"
                >
                  Continue
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 md:p-12 rounded-[3.5rem] bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 shadow-2xl backdrop-blur-xl"
            >
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-500/10">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                Required Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <InputField 
                    label="Projects Done (Links)" 
                    name="projects"
                    placeholder="link1.com, link2.com" 
                    icon={<LinkIcon size={18} />} 
                    value={formData.projects}
                    onChange={handleInputChange}
                  />
                </div>
                <InputField 
                  label="GitHub Profile" 
                  name="github"
                  placeholder="github.com/username" 
                  icon={<Github size={18} />} 
                  value={formData.github}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="Years of Experience" 
                  name="experience"
                  placeholder="e.g. 2+ years" 
                  icon={<Briefcase size={18} />} 
                  value={formData.experience}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="LinkedIn Profile" 
                  name="linkedin"
                  placeholder="linkedin.com/in/username" 
                  icon={<Linkedin size={18} />} 
                  value={formData.linkedin}
                  onChange={handleInputChange}
                />
                <InputField 
                  label="Portfolio Link" 
                  name="portfolio"
                  placeholder="yourportfolio.com" 
                  icon={<LinkIcon size={18} />} 
                  value={formData.portfolio}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-12 flex justify-between gap-4">
                <button 
                  onClick={prevStep}
                  className="px-8 py-5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-[2rem] font-bold text-lg flex items-center gap-3 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                >
                  <ArrowLeft size={20} />
                  Back
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={cn(
                    "px-10 py-5 bg-gradient-to-r from-indigo-700 to-indigo-600 text-white rounded-[2rem] font-black text-lg flex items-center gap-3 hover:shadow-[0_10px_30px_rgba(79,70,229,0.3)] transition-all hover:-translate-y-0.5",
                    isSubmitting && "opacity-70 pointer-events-none"
                  )}
                >
                  {isSubmitting ? "Submitting..." : "Complete Registration"}
                  <CheckCircle2 size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 md:p-20 rounded-[4rem] bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 shadow-2xl backdrop-blur-xl text-center"
            >
              <div className="mb-8 inline-flex p-6 rounded-[2.5rem] bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={64} />
              </div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Registration Complete!</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 font-medium max-w-md mx-auto">
                Thank you for joining the NeuroDev.in pioneer community. Check your email for next steps.
              </p>
              <a 
                href="/"
                className="px-12 py-5 bg-indigo-600 text-white rounded-full font-black text-xl hover:bg-indigo-700 transition-all shadow-xl inline-block"
              >
                Return to Home
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}
