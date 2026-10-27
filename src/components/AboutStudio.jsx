import { ArrowUpRight, CheckCircle2, Gamepad2, GraduationCap, MapPin, Sparkles, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { useSite } from "../lib/SiteContext";

const reveal = { duration: 0.45, ease: "easeOut" };

export default function AboutStudio() {
  const { site } = useSite();
  const { about, profile } = site;
  const details = [
    [GraduationCap, about.education, about.university],
    [MapPin, "Based in", profile.location],
    [Gamepad2, "Game engine", "Unity & C#"],
    [Sparkles, "3D workflow", "Blender modeling and animation"],
  ];
  return (
    <section id="about" className="section-shell overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20 lg:px-8 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={reveal} className="about-game-mark">
          <span><Gamepad2 size={48} strokeWidth={1.2} /></span>
          <strong>MAKE IT<br />PLAYABLE.</strong>
          <small>UNITY · C# · BLENDER</small>
          <Workflow className="about-game-orbit" size={116} strokeWidth={0.6} aria-hidden="true" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={reveal}>
          <div className="section-heading"><span>About Moiz</span><h2>{about.title}</h2></div>
          <p className="mt-7 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{about.intro}</p>
          <p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">{about.description}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {details.map(([Icon, title, text]) => (
              <motion.div key={title} whileHover={{ y: -3 }} className="detail-card"><Icon size={19} /><div><strong>{title}</strong><span>{text}</span></div></motion.div>
            ))}
          </div>
          <p className="about-build-note"><CheckCircle2 size={16} /> Open to freelance game development projects <ArrowUpRight size={15} /></p>
        </motion.div>
      </div>
    </section>
  );
}
