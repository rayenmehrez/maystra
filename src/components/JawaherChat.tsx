import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
}

const REPLIES: Record<string, string> = {
  "شو يميّز منهج المايسترا؟":
    "المايسترا منهج تحولي من 12 دورة على 3 أشهر — مش كورس معلومات، بل رحلة عميقة تبدأ من جذور شخصيتك وتنتهي بقيادة حياتك بوعي وثقة 💜",
  "هل المنهج مناسب لي؟":
    "إذا تحسين بضجيج داخلي، تكرار نفس الأنماط، أو صعوبة في الاستماع لنفسك — فالمايسترا صُممت خصيصاً لك 🌸",
  "كيف أحجز استشارتي المجانية؟":
    "كل اللي عليك تسوينه هو تضغطين على زر 'إحجزي استشارتك المجانية الآن' في الصفحة — وراح نلتقي ونشوف مع بعض 🤍",
};

const DEFAULT_REPLY =
  "سؤالك وصلني 🤍 للإجابة الكاملة، احجزي استشارتك المجانية مع الكوتش عبير مباشرة من الصفحة.";

const SUGGESTIONS = [
  "شو يميّز منهج المايسترا؟",
  "هل المنهج مناسب لي؟",
  "كيف أحجز استشارتي المجانية؟",
];

const GRADIENT = "linear-gradient(135deg, #754b9a, #905eaf)";

const TypingDots = () => (
  <div className="flex gap-1 items-center px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </div>
);

const JawaherChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [welcomeSent, setWelcomeSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen && !welcomeSent) {
      setWelcomeSent(true);
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: "welcome",
            text: "أهلاً، أنا جواهر 💜 كيف أقدر أساعدك في رحلتك مع المايسترا؟",
            sender: "bot",
          },
        ]);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, welcomeSent]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    const userMsg: Message = { id: crypto.randomUUID(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setShowSuggestions(false);
    setIsTyping(true);

    // TODO: uncomment and replace URL when n8n webhook is ready
    // const sessionId = sessionStorage.getItem("jawaher_session") || (() => { const id = crypto.randomUUID(); sessionStorage.setItem("jawaher_session", id); return id; })();
    // const res = await fetch("YOUR_N8N_WEBHOOK_URL", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text, sessionId }) });

    setTimeout(() => {
      setIsTyping(false);
      const reply = REPLIES[text] || DEFAULT_REPLY;
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text: reply, sender: "bot" },
      ]);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-[30px] md:right-[30px] z-[1000] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              width: "360px",
              maxHeight: "520px",
              background: "#1a1830",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ background: GRADIENT }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                  💜
                </div>
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white"
                  style={{
                    backgroundColor: "#22c55e",
                    animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                  }}
                />
              </div>
              <div className="flex-1 text-right">
                <p className="text-white font-bold text-sm">جواهر</p>
                <p className="text-white/70 text-xs">مساعدة منهج المايسترا</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors text-xl leading-none"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 flex flex-col gap-3"
              style={{ minHeight: "280px", maxHeight: "360px" }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.sender === "bot" ? "self-end" : "self-start"
                  }`}
                  style={{
                    background: msg.sender === "bot" ? GRADIENT : "#2a273f",
                    color: "white",
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}

              {isTyping && (
                <div
                  className="self-end max-w-[85%] rounded-2xl"
                  style={{ background: GRADIENT }}
                >
                  <TypingDots />
                </div>
              )}

              {showSuggestions && messages.length > 0 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-2 mt-1"
                >
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-right text-xs px-4 py-2 rounded-full border transition-all duration-200 hover:opacity-90"
                      style={{
                        borderColor: "rgba(144,94,175,0.4)",
                        background: "rgba(117,75,154,0.12)",
                        color: "white",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = GRADIENT)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(117,75,154,0.12)")
                      }
                    >
                      {s}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 p-3"
              style={{ background: "#0d0c1a" }}
            >
              <button
                type="submit"
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-opacity hover:opacity-80"
                style={{ background: GRADIENT }}
              >
                <svg
                  className="w-4 h-4 rotate-180"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتبي رسالتك..."
                className="flex-1 text-right text-sm px-4 py-2 rounded-full outline-none"
                style={{
                  background: "#2a273f",
                  color: "white",
                  border: "1px solid rgba(144,94,175,0.3)",
                }}
                dir="rtl"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer relative"
        style={{
          background: GRADIENT,
          boxShadow: "0 6px 28px rgba(117,75,154,0.55)",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 8px 32px rgba(117,75,154,0.7)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
        </svg>
      </motion.button>
    </div>
  );
};

export default JawaherChat;
