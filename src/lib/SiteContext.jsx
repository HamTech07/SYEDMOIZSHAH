import { createContext, useContext, useEffect, useState } from "react";
import { defaultSite } from "../data/site";

const SiteContext = createContext({ site: defaultSite, setSite: () => {} });
export function SiteProvider({ children }) {
  const [site] = useState(defaultSite);
  useEffect(() => {
    document.title = site.profile.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", site.profile.description);
    document.documentElement.style.setProperty("--site-accent", site.appearance.accent);
    document.documentElement.classList.toggle("motion-disabled", !site.appearance.motion);
  }, [site]);
  return <SiteContext.Provider value={{ site }}>{children}</SiteContext.Provider>;
}

// oxlint-disable-next-line react/only-export-components
export const useSite = () => useContext(SiteContext);
