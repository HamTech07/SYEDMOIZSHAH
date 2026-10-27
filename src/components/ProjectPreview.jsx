import { Gamepad2 } from "lucide-react";
import "./project-previews.css";

export default function ProjectPreview({ project }) {
  return (
    <div className={`game-cover-fallback accent-${project.accent}`} aria-hidden="true">
      <span>UNITY · ANDROID GAME</span>
      <Gamepad2 size={52} strokeWidth={1.3} />
      <strong>{project.title}</strong>
      <small>{project.category} · GAME BUILD</small>
    </div>
  );
}
