import { Bot, Send, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./portfolio-assistant.css";
import { portfolioAnswer } from "../lib/portfolio-answers";
import { useSite } from "../lib/SiteContext";

const reveal = { duration: 0.35, ease: "easeOut" };
const suggestions = ["Show me the games", "What tools do you use?", "How can I contact Moiz?"];

export default function PortfolioAssistant() {
  const { site } = useSite();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ id: "welcome", role: "assistant", content: "Hi — I’m Moiz’s portfolio guide. Ask me about his games, tools or contact links." }]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const messageEnd = useRef(null);

  useEffect(() => { if (open) messageEnd.current?.scrollIntoView({ block: "nearest" }); }, [messages, open, sending]);

  const sendMessage = (text) => {
    const content = text.trim();
    if (!content || sending) return;
    setMessages((current) => [...current, { id: `user-${Date.now()}`, role: "user", content }]);
    setInput("");
    setSending(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, { id: `guide-${Date.now()}`, role: "assistant", content: portfolioAnswer(content, site) }]);
      setSending(false);
    }, 280);
  };

  return (
    <div className="portfolio-assistant">
      <AnimatePresence>
        {open && (
          <motion.section className="assistant-panel" initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.98 }} transition={reveal} role="dialog" aria-modal="false" aria-labelledby="assistant-title">
            <header className="assistant-header"><span className="assistant-avatar"><Bot size={20} /></span><div><strong id="assistant-title">Ask {site.profile.brand}</strong><small><i /> Portfolio guide</small></div><motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="button" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></motion.button></header>
            <div className="assistant-messages" role="log" aria-live="polite">
              <AnimatePresence initial={false}>
                {messages.map((message) => <motion.div key={message.id} className={`assistant-message is-${message.role}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={reveal}>{message.content.split(/(https:\/\/[^\s]+)/g).map((part, index) => part.startsWith("https://") ? <a key={index} href={part} target="_blank" rel="noreferrer">{part}</a> : part)}</motion.div>)}
              </AnimatePresence>
              {messages.length === 1 && <div className="assistant-suggestions">{suggestions.map((suggestion) => <motion.button key={suggestion} type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => sendMessage(suggestion)}>{suggestion}</motion.button>)}</div>}
              {sending && <div className="assistant-typing"><i /><i /><i /><span>Thinking</span></div>}
              <div ref={messageEnd} />
            </div>
            <form className="assistant-form" onSubmit={(event) => { event.preventDefault(); sendMessage(input); }}>
              <label htmlFor="assistant-input">Ask about the portfolio</label>
              <div><input id="assistant-input" value={input} onChange={(event) => setInput(event.target.value.slice(0, 1000))} placeholder="Ask about games or skills…" autoComplete="off" disabled={sending} /><motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={sending || !input.trim()} aria-label="Send message"><Send size={18} /></motion.button></div>
              <small><Sparkles size={12} /> Instant answers from the portfolio</small>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
      <motion.button type="button" className="assistant-launcher" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? "Close portfolio guide" : "Open portfolio guide"}>{open ? <X size={21} /> : <span className="assistant-launcher-symbol" aria-hidden="true"><Bot size={22} /><Sparkles size={11} /></span>}<span>{open ? "Close" : "Portfolio Guide"}</span></motion.button>
    </div>
  );
}
