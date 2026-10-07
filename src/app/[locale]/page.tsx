"use client";

import { motion } from "framer-motion";
import { Car, Stethoscope, ChevronRight, CheckCircle2, MessageSquare, MonitorSmartphone, Mail, Phone, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LandingPage() {
  const t = useTranslations('Landing');
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, {locale: e.target.value});
  };

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
            <span className="text-xl font-bold tracking-tight">{t('title')}<span className="text-blue-500">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#solutions" className="hover:text-white transition-colors">{t('nav_solutions')}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t('nav_contact')}</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <Globe className="w-4 h-4 text-zinc-400" />
              <select 
                onChange={changeLanguage}
                className="bg-transparent text-sm text-zinc-300 outline-none cursor-pointer appearance-none pr-4"
              >
                <option value="en" className="text-black">English</option>
                <option value="fr" className="text-black">Français</option>
                <option value="ar" className="text-black">العربية</option>
              </select>
            </div>
            <a href="#contact" className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
              {t('nav_contact_btn')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
          >
            {t('hero_title1')} <br className="hidden md:block"/>
            {t('hero_title2')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10"
          >
            {t('hero_subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#solutions" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-semibold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
              {t('btn_view')}
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-colors flex items-center justify-center">
              {t('btn_meet')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('core_title')}</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{t('core_subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Car Showroom MS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Car className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('car_title')}</h3>
              <p className="text-zinc-400 mb-6">{t('car_desc')}</p>
              
              <ul className="space-y-3 mb-8">
                {['car_f1', 'car_f2', 'car_f3', 'car_f4'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 rtl:flex-row-reverse">
                {t('link_contact')} <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </motion.div>

            {/* Clinics MS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('clinic_title')}</h3>
              <p className="text-zinc-400 mb-6">{t('clinic_desc')}</p>
              
              <ul className="space-y-3 mb-8">
                {['clinic_f1', 'clinic_f2', 'clinic_f3', 'clinic_f4'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#contact" className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 rtl:flex-row-reverse">
                {t('link_contact')} <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Banner */}
      <section className="py-16 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-3">{t('integ_title')}</h3>
                <p className="text-zinc-400">{t('integ_desc')}</p>
              </div>
              <div className="flex gap-4">
                 <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center border border-[#25D366]/20">
                    <MessageSquare className="w-8 h-8 text-[#25D366]" />
                 </div>
                 <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                    <MonitorSmartphone className="w-8 h-8 text-blue-500" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('contact_title')}</h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">{t('contact_desc')}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:contact@digi-dz.store" className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" /> {t('contact_mail')}
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-black rounded-full font-semibold hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" /> {t('contact_wa')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© 2026 Digi-DZ Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
