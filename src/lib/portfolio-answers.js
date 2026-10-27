import { projects, capabilities } from "../data/portfolio.js";

export function portfolioAnswer(question, site) {
  const catalog = site?.projects || projects;
  const services = site?.capabilities || capabilities;
  const profile = site?.profile || {};
  const name = profile.name || "Syed Moiz Ahmed";
  const text = question.toLowerCase();
  const project = catalog.find((item) => text.includes(item.title.toLowerCase()) || text.includes(item.id));
  if (project) return `${project.title}: ${project.description}\nDownload APK: ${project.downloadUrl}`;
  if (/hire|contact|fiverr|available|availability|rabta/.test(text)) {
    return `You can contact ${name} by email, WhatsApp, LinkedIn or Fiverr.\nEmail: ${profile.email}\nWhatsApp: ${profile.whatsapp}\nFiverr: ${profile.fiverr}`;
  }
  if (/mobile|android|apk|download|app|game|project|work|portfolio/.test(text)) {
    return catalog.map((item) => `${item.title} — ${item.category}\n${item.downloadUrl}`).join("\n\n") || "No game builds are currently listed.";
  }
  if (/tool|skill|stack|unity|blender|c#|model|animation/.test(text)) {
    return `${name} works with ${services.map((item) => item.title).join(", ")}. His toolkit includes ${[...new Set(services.flatMap((item) => item.stack))].join(", ")}.`;
  }
  return `I can share details about ${name}’s Unity game development, Blender workflow, Android builds and contact links. Ask me about a game or a tool.`;
}
