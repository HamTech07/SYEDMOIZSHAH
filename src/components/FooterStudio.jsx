import { ArrowUp, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useSite } from "../lib/SiteContext";

const socials = [
  ["github", "GitHub", "https://cdn.simpleicons.org/github/ffffff"],
  ["linkedin", "LinkedIn", "/logos/linkedin.svg"],
  ["fiverr", "Fiverr", "https://cdn.simpleicons.org/fiverr/ffffff"],
  ["whatsapp", "WhatsApp", "https://cdn.simpleicons.org/whatsapp/ffffff"],
];

export default function FooterStudio() {
  const { site } = useSite();
  const reducedMotion = useReducedMotion();
  const backToTop = () => window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  return (
    <footer className="studio-footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div><strong>{site.profile.name}</strong><p>{site.profile.role}</p></div>
        <div className="flex flex-wrap items-center gap-2">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href={`mailto:${site.profile.email}`} className="footer-icon" aria-label={`Email ${site.profile.name}`}><Mail size={17} /></motion.a>
          {socials.map(([key, label, icon]) => (
            <motion.a key={key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href={site.profile[key]} target="_blank" rel="noreferrer" className="footer-icon" aria-label={`Open ${label} profile`}><img className={key === "linkedin" ? "linkedin-logo" : ""} src={icon} alt="" width="17" height="17" loading="lazy" /></motion.a>
          ))}
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={backToTop} className="back-to-top">Back to top <ArrowUp size={16} /></motion.button>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {site.profile.name}. Designed and developed with intent.</div>
    </footer>
  );
}
