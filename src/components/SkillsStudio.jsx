import { ArrowUpRight, Box, Gamepad2, Layers3, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useSite } from "../lib/SiteContext";
import WorkingStack from "./WorkingStack";
import "./working-stack.css";
import "./capability-dialog.css";

const icons = { unity: Gamepad2, blender: Box, gameplay: Sparkles, production: Layers3 };
const reveal = { duration: 0.4, ease: "easeOut" };

function ProjectTile({ project }) {
  return (
    <motion.a href={project.downloadUrl} target="_blank" rel="noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`capability-project-tile accent-${project.accent}`}>
      <span className="capability-project-icon"><Gamepad2 size={20} /></span>
      <div><span>{project.category} · Android</span><strong>{project.title}</strong><small>{project.description}</small></div>
      <ArrowUpRight size={18} />
    </motion.a>
  );
}

export default function SkillsStudio() {
  const { site } = useSite();
  const { capabilities, projects } = site;
  const [selectedKey, setSelectedKey] = useState(null);
  const selectedCapability = useMemo(() => capabilities.find(({ key }) => key === selectedKey) ?? null, [selectedKey, capabilities]);
  const selectedProjects = selectedKey ? projects.filter((project) => project.capabilities.includes(selectedKey)) : [];

  useEffect(() => {
    if (!selectedCapability) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => { if (event.key === "Escape") setSelectedKey(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); };
  }, [selectedCapability]);

  return (
    <section id="skills" className="section-shell overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={reveal} className="section-heading">
          <span>What I do</span><h2>{site.headings.skills}</h2><p>{site.headings.skillsDescription}</p>
        </motion.div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {capabilities.map((capability, index) => {
            const Icon = icons[capability.key] ?? Layers3;
            return (
              <motion.button type="button" key={capability.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ ...reveal, delay: index * 0.06 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setSelectedKey(capability.key)} className={`capability-card capability-photo-card accent-${capability.accent}${capability.key === "unity" ? " capability-featured" : ""}`} aria-haspopup="dialog">
                <img src={capability.image} alt="" width="960" height="640" loading="lazy" decoding="async" className="capability-background" />
                <div className="capability-shade" aria-hidden="true" />
                <div className="capability-copy">
                  <div className="flex items-start justify-between gap-4"><div><span className="card-eyebrow">{capability.eyebrow}</span><h3>{capability.title}</h3></div><div className="capability-icon"><Icon size={24} /></div></div>
                  <p>{capability.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{capability.stack.map((item) => <span key={item} className="stack-pill">{item}</span>)}</div>
                  <span className="capability-open">Explore work <ArrowUpRight size={16} /></span>
                </div>
              </motion.button>
            );
          })}
        </div>
        <WorkingStack />
      </div>
      <AnimatePresence>
        {selectedCapability && (
          <motion.div className="capability-dialog-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={reveal} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedKey(null); }}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="capability-dialog-title" className={`capability-dialog accent-${selectedCapability.accent}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={reveal}>
              <div className="capability-dialog-header"><div><span className="card-eyebrow">{selectedCapability.eyebrow}</span><h3 id="capability-dialog-title">{selectedCapability.title}</h3><p>{selectedCapability.description}</p></div><motion.button type="button" autoFocus whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setSelectedKey(null)} className="dialog-close" aria-label="Close capability details"><X size={20} /></motion.button></div>
              <div className="capability-dialog-body"><div className="capability-project-grid">{selectedProjects.map((project) => <ProjectTile key={project.id} project={project} />)}</div></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
