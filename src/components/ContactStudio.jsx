import { ArrowUpRight, Mail, MessageCircle, Store } from "lucide-react";
import { motion } from "framer-motion";
import { useSite } from "../lib/SiteContext";

const reveal = { duration: 0.4, ease: "easeOut" };
export default function ContactStudio() {
  const { site } = useSite();
  const { contact, profile } = site;
  return (
    <section id="contact" className="contact-section overflow-hidden">
      <div className="contact-grid" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={reveal} className="contact-card">
          <div className="max-w-3xl">
            <span className="contact-eyebrow"><span className="status-dot" /> {contact.badge}</span>
            <h2>{contact.title}</h2><p>{contact.description}</p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={`mailto:${profile.email}`} className="primary-button focus:outline-none focus:ring-2 focus:ring-violet-400"><Mail size={18} /> Email Moiz</motion.a>
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={profile.whatsapp} target="_blank" rel="noreferrer" className="contact-secondary focus:outline-none focus:ring-2 focus:ring-violet-400"><MessageCircle size={18} /> WhatsApp <ArrowUpRight size={16} /></motion.a>
          </div>
          <div className="freelance-grid">
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={profile.fiverr} target="_blank" rel="noreferrer" className="freelance-link">
              <span className="freelance-icon"><Store size={20} /></span><span><strong>Work with me on Fiverr</strong><small>View my game development profile</small></span><ArrowUpRight size={17} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={profile.linkedin} target="_blank" rel="noreferrer" className="freelance-link">
              <span className="freelance-icon"><img className="linkedin-logo" src="/logos/linkedin.svg" alt="" width="20" height="20" /></span><span><strong>Connect on LinkedIn</strong><small>View my professional profile</small></span><ArrowUpRight size={17} />
            </motion.a>
          </div>
          <div className="contact-meta"><div><Mail size={17} /><span>{contact.response}</span></div><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
        </motion.div>
      </div>
    </section>
  );
}
