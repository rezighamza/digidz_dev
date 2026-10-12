"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Car, 
  Stethoscope, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare, 
  MonitorSmartphone, 
  Mail, 
  Phone, 
  Globe, 
  Send, 
  Sparkles,
  PhoneCall
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LandingPage() {
  const t = useTranslations('Landing');
  const router = useRouter();
  const pathname = usePathname();

  // Contact / Demo form state
  const [selectedSystem, setSelectedSystem] = useState("car");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientNotes, setClientNotes] = useState("");

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value });
  };

  const getSystemLabel = (sysKey: string) => {
    if (sysKey === "car") return t('form_system_car');
    if (sysKey === "clinic") return t('form_system_clinic');
    return t('form_system_custom');
  };

  const buildWhatsAppMessage = () => {
    const sysLabel = getSystemLabel(selectedSystem);
    let msg = `Salam Digi-DZ!\n\n`;
    msg += `I would like to request a demo / consultation for: *${sysLabel}*\n`;
    if (clientName.trim()) msg += `• *Name:* ${clientName.trim()}\n`;
    if (clientPhone.trim()) msg += `• *Phone:* ${clientPhone.trim()}\n`;
    if (clientNotes.trim()) msg += `• *Details:* ${clientNotes.trim()}\n`;
    return encodeURIComponent(msg);
  };

  const buildEmailHref = () => {
    const sysLabel = getSystemLabel(selectedSystem);
    const subject = encodeURIComponent(`Demo Request - ${sysLabel}`);
    let body = `Hello Digi-DZ Solutions,\n\n`;
    body += `I would like to request a demo for: ${sysLabel}\n`;
    if (clientName.trim()) body += `Name: ${clientName.trim()}\n`;
    if (clientPhone.trim()) body += `Phone: ${clientPhone.trim()}\n`;
    if (clientNotes.trim()) body += `Details: ${clientNotes.trim()}\n`;
    return `mailto:contact@digi-dz.store?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const directCarWhatsApp = `https://wa.me/213554624911?text=${encodeURIComponent("Salam Digi-DZ! I would like to request a live demo for the Car Showroom Management System.")}`;
  const directClinicWhatsApp = `https://wa.me/213554624911?text=${encodeURIComponent("Salam Digi-DZ! I would like to request a live demo for the Clinic Management System.")}`;
  const floatingWhatsAppUrl = `https://wa.me/213554624911?text=${encodeURIComponent("Salam Digi-DZ! I want to inquire about your software solutions.")}`;

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 relative">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Digi-DZ Solutions<span className="text-blue-500">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#solutions" className="hover:text-white transition-colors">{t('nav_solutions')}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t('nav_contact')}</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
              <Globe className="w-4 h-4 text-zinc-400" />
              <select 
                onChange={changeLanguage}
                className="bg-transparent text-sm text-zinc-300 outline-none cursor-pointer appearance-none pr-4"
                defaultValue={pathname.startsWith('/ar') ? 'ar' : pathname.startsWith('/fr') ? 'fr' : 'en'}
              >
                <option value="en" className="text-black">English</option>
                <option value="fr" className="text-black">Français</option>
                <option value="ar" className="text-black">العربية</option>
              </select>
            </div>

            <a 
              href="#contact" 
              className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/20"
            >
              {t('nav_contact_btn')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6 tracking-wide uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" /> Web • Mobile • Desktop Systems
          </motion.div>

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
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              {t('btn_meet')}
            </a>
            <a 
              href="#solutions" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              {t('btn_view')}
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
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Car className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('car_title')}</h3>
                <p className="text-zinc-400 mb-6">{t('car_desc')}</p>
                
                <ul className="space-y-3 mb-8">
                  {['car_f1', 'car_f2', 'car_f3', 'car_f4'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                <a 
                  href={directCarWhatsApp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold py-3 px-4 rounded-xl text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> {t('link_contact_car')}
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setSelectedSystem("car")}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium py-3 px-4 rounded-xl text-sm transition-colors"
                >
                  Schedule Demo <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </a>
              </div>
            </motion.div>

            {/* Clinics MS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                  <Stethoscope className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{t('clinic_title')}</h3>
                <p className="text-zinc-400 mb-6">{t('clinic_desc')}</p>
                
                <ul className="space-y-3 mb-8">
                  {['clinic_f1', 'clinic_f2', 'clinic_f3', 'clinic_f4'].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                <a 
                  href={directClinicWhatsApp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold py-3 px-4 rounded-xl text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> {t('link_contact_clinic')}
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setSelectedSystem("clinic")}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-medium py-3 px-4 rounded-xl text-sm transition-colors"
                >
                  Schedule Demo <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </a>
              </div>
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

      {/* Interactive Contact & Request a Demo Section */}
      <section id="contact" className="py-24 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact_title')}</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">{t('contact_desc')}</p>
          </div>

          {/* Quick Direct Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <a 
              href="https://wa.me/213554624911" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] p-5 rounded-2xl flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-black shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-left rtl:text-right">
                <div className="text-xs text-zinc-400 uppercase font-semibold">WhatsApp</div>
                <div className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">+213 554 624 911</div>
              </div>
            </a>

            <a 
              href="tel:+213554624911" 
              className="bg-blue-500/10 border border-blue-500/30 hover:border-blue-500 p-5 rounded-2xl flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div className="text-left rtl:text-right">
                <div className="text-xs text-zinc-400 uppercase font-semibold">Direct Call</div>
                <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">+213 554 624 911</div>
              </div>
            </a>

            <a 
              href="mailto:contact@digi-dz.store" 
              className="bg-white/5 border border-white/10 hover:border-white/30 p-5 rounded-2xl flex items-center gap-4 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left rtl:text-right">
                <div className="text-xs text-zinc-400 uppercase font-semibold">Official Email</div>
                <div className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">contact@digi-dz.store</div>
              </div>
            </a>
          </div>

          {/* Interactive Demo Request Form */}
          <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="mb-8">
              <label className="block text-sm font-semibold text-zinc-300 mb-3">
                {t('form_system_label')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedSystem("car")}
                  className={`p-4 rounded-xl border text-sm font-medium text-left rtl:text-right transition-all flex items-center gap-3 ${
                    selectedSystem === "car" 
                      ? "border-blue-500 bg-blue-500/10 text-white ring-1 ring-blue-500" 
                      : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <Car className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>{t('form_system_car')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedSystem("clinic")}
                  className={`p-4 rounded-xl border text-sm font-medium text-left rtl:text-right transition-all flex items-center gap-3 ${
                    selectedSystem === "clinic" 
                      ? "border-emerald-500 bg-emerald-500/10 text-white ring-1 ring-emerald-500" 
                      : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <Stethoscope className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{t('form_system_clinic')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedSystem("custom")}
                  className={`p-4 rounded-xl border text-sm font-medium text-left rtl:text-right transition-all flex items-center gap-3 ${
                    selectedSystem === "custom" 
                      ? "border-purple-500 bg-purple-500/10 text-white ring-1 ring-purple-500" 
                      : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20"
                  }`}
                >
                  <MonitorSmartphone className="w-5 h-5 text-purple-400 shrink-0" />
                  <span>{t('form_system_custom')}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder={t('form_name_placeholder')}
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 text-sm outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder={t('form_phone_placeholder')}
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 text-sm outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <textarea
                rows={3}
                placeholder={t('form_notes_placeholder')}
                value={clientNotes}
                onChange={(e) => setClientNotes(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 text-sm outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/213554624911?text=${buildWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageSquare className="w-5 h-5" /> {t('btn_send_whatsapp')}
              </a>
              <a
                href={buildEmailHref()}
                className="bg-white/10 hover:bg-white/15 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-colors"
              >
                <Send className="w-5 h-5" /> {t('btn_send_email')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Sticky WhatsApp Button */}
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-black p-4 rounded-full shadow-2xl flex items-center gap-3 transition-transform hover:scale-105 group"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="hidden group-hover:inline-block font-semibold text-sm pr-1">
          {t('floating_wa')}
        </span>
      </a>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© 2026 Digi-DZ Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
