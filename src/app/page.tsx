"use client";

import { motion } from "framer-motion";
import { Car, Stethoscope, ChevronRight, CheckCircle2, MessageSquare, Code2, Rocket, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold tracking-tight">Digi-DZ<span className="text-blue-500">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Solutions</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 mb-8">
            <Rocket className="w-4 h-4" />
            <span>Next-Generation Software Solutions</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            We Build Software That <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Scales Your Business
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
          >
            Custom Management Systems tailored exactly to your workflow. No rigid fixed pricing—we build what you need, how you need it.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
              Explore Solutions <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Book Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Flagship Solutions</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">We specialize in comprehensive management systems designed to modernize traditional Algerian businesses.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Showroom MS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-12 hover:border-blue-500/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
                <Car className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Car Showrooms MS</h3>
              <p className="text-zinc-400 mb-8 line-clamp-3">A complete digital ecosystem to manage your automotive inventory, track sales, and handle client relationships seamlessly.</p>
              
              <ul className="space-y-4 mb-12">
                {['Real-time Inventory Tracking', 'Advanced Client CRM & Leads', 'Sales & Invoicing Generation', 'Multi-branch Management'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Discuss Custom Features <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Clinics MS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-12 hover:border-emerald-500/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-colors" />
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8">
                <Stethoscope className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Clinics MS</h3>
              <p className="text-zinc-400 mb-8 line-clamp-3">Modernize your medical practice with secure patient records, smart scheduling, and automated billing workflows.</p>
              
              <ul className="space-y-4 mb-12">
                {['Electronic Patient Records (EPR)', 'Smart Appointment Scheduling', 'Digital Prescriptions', 'Billing & Financial Reports'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                Discuss Custom Features <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Desktop Apps */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-12 hover:border-purple-500/30 transition-colors group relative overflow-hidden md:col-span-2 lg:col-span-1"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] group-hover:bg-purple-500/10 transition-colors" />
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8">
                <Code2 className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Custom Desktop Apps</h3>
              <p className="text-zinc-400 mb-8 line-clamp-3">High-performance, secure offline or cloud-synced desktop software for Windows and Mac tailored to your enterprise.</p>
              
              <ul className="space-y-4 mb-12">
                {['High Performance Offline Mode', 'Local Hardware Integration', 'Cross-Platform Windows/Mac', 'Secure Data Processing'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                Discuss Desktop Projects <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great</h2>
          <p className="text-xl text-zinc-400 mb-12">We don't do fixed pricing. Every business is unique, and so is our software. Schedule a personal meeting with us to discuss your exact needs.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:contact@digi-dz.store" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" /> contact@digi-dz.store
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 rounded-full font-bold text-lg hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© {2026} Digi-DZ Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
