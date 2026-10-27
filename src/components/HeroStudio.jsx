import { ArrowDownRight, ArrowUpRight, Store, GitFork, Layers3, Sparkles, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSite } from "../lib/SiteContext";
import "./hero-scroll.css";

const reveal = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

function HeroCopy() {
  const { site } = useSite();
  const reducedMotion = useReducedMotion();
  const [typedTitle, setTypedTitle] = useState("");
  const { projects, hero, profile } = site;

  useEffect(() => {
    if (reducedMotion) { setTypedTitle(hero.title); return undefined; }
    setTypedTitle("");
    let position = 0;
    const timer = window.setInterval(() => {
      position += 1;
      setTypedTitle(hero.title.slice(0, position));
      if (position >= hero.title.length) window.clearInterval(timer);
    }, 55);
    return () => window.clearInterval(timer);
  }, [hero.title, reducedMotion]);

  return (
    <div className="hero-copy-layer max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={reveal} className="eyebrow mb-6">
        <span className="status-dot" /> {hero.badge}
      </motion.div>
      <motion.h1 aria-label={`${hero.title} ${hero.highlight}`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={reveal} className="display-title">
        <span aria-hidden="true">{typedTitle}{!reducedMotion && typedTitle.length < hero.title.length && <span className="type-caret" />}</span>
        <span className="gradient-text block">{hero.highlight}</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...reveal, delay: 0.16 }} className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
        {hero.description}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...reveal, delay: 0.24 }} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#projects" className="primary-button focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-950">
          {hero.button} <ArrowDownRight size={18} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={profile.github} target="_blank" rel="noreferrer" className="secondary-button focus:outline-none focus:ring-2 focus:ring-violet-400">
          <GitFork size={18} /> GitHub <ArrowUpRight size={16} />
        </motion.a>
        <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={profile.fiverr} target="_blank" rel="noreferrer" className="secondary-button focus:outline-none focus:ring-2 focus:ring-violet-400">
          <Store size={17} /> Fiverr profile <ArrowUpRight size={15} />
        </motion.a>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ ...reveal, delay: 0.32 }} className="hero-metrics mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
        {[
          { icon: Layers3, value: String(projects.length).padStart(2, "0"), label: "Android game builds" },
          { icon: Sparkles, value: "Unity", label: "Game engine" },
          { icon: Workflow, value: "3D", label: "Blender workflow" },
        ].map(({ icon: Icon, value, label }) => (
          <div key={label} className="metric-card last:col-span-2 sm:last:col-span-1">
            <Icon size={17} className="text-violet-500 dark:text-violet-300" />
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function HeroPortrait() {
  const { site } = useSite();
  const { profile } = site;
  return (
    <motion.figure className="moiz-portrait" initial={{ opacity: 0, y: 28, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ ...reveal, delay: 0.18 }}>
      <div className="moiz-portrait-glow" aria-hidden="true" />
      <img src={profile.portrait} alt={`${profile.name}, Unity game developer`} fetchPriority="high" decoding="async" />
      <figcaption><span>SYED MOIZ AHMED</span><strong>Game developer · 3D artist</strong></figcaption>
    </motion.figure>
  );
}

export default function HeroStudio() {
  return (
    <section id="home" className="hero-section relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-layout relative z-10 mx-auto max-w-7xl">
        <HeroCopy />
        <HeroPortrait />
      </div>
    </section>
  );
}

