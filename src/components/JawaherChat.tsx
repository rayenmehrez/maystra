import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Replace src with your image path
import jawaherAvatar from "@/assets/jawaher-avatar.png";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
}

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

const QUICK_REPLIES = [
  "شو هو المايسترا؟ 🌟",
  "كيف يساعدني البرنامج؟ 💜",
  "أبي أحجز استشارة 📅",
  "من هي Coach Abeer؟ ✨",
];

const JawaherChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(false);
  const [welcomeSent, setWelcomeSent] = useState(() =>
    sessionStorage.getItem("jawaher_welcome_sent") === "true"
  );
  const welcomeTriggered = useRef(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load persisted messages on mount
  useEffect(() => {
    if (welcomeSent) {
      setMessages([
        {
          id: "welcome",
          text: "أهلاً، أنا جواهر 💜 كيف أقدر أساعدك في رحلتك مع المايسترا؟",
          sender: "bot",
        },
      ]);
      // Show quick replies only if no prior interaction this session
      if (sessionStorage.getItem("jawaher_interacted") !== "true") {
        setShowQuickReplies(true);
      }
    }
  }, []);

  // Auto message 3s after first open
  useEffect(() => {
    if (isOpen && !welcomeSent && !welcomeTriggered.current) {
      welcomeTriggered.current = true;
      const typingTimer = setTimeout(() => {
        setIsTyping(true);
      }, 3000);

      const messageTimer = setTimeout(() => {
        setIsTyping(false);
        setWelcomeSent(true);
        sessionStorage.setItem("jawaher_welcome_sent", "true");
        setMessages([
          {
            id: "welcome",
            text: "أهلاً، أنا جواهر 💜 كيف أقدر أساعدك في رحلتك مع المايسترا؟",
            sender: "bot",
          },
        ]);
        setShowQuickReplies(true);
      }, 4200);

      return () => {
        clearTimeout(typingTimer);
        clearTimeout(messageTimer);
      };
    }
  }, [isOpen, welcomeSent]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getSessionId = () => {
    let id = localStorage.getItem("sessionId");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("sessionId", id);
    }
    return id;
  };

  const hideQuickReplies = () => {
    setShowQuickReplies(false);
    sessionStorage.setItem("jawaher_interacted", "true");
  };

  const sendMessage = async (text: string) => {
    hideQuickReplies();
    const userMsg: Message = { id: crypto.randomUUID(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const sessionId = getSessionId();

    try {
      const response = await fetch(
        "https://n8n.srv1237336.hstgr.cloud/webhook/da8e977f-7598-41ff-a03c-9268b5f2643d",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, sessionId }),
        }
      );
      const data = await response.json();
      const reply = data.output || data.text || data.message || "...";
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text: reply, sender: "bot" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text: "حدث خطأ، حاولي مرة أخرى 💜", sender: "bot" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed z-[1000] w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer bottom-[12px] right-[12px] sm:bottom-[28px] sm:right-[28px]"
        style={{
          background: GRADIENT,
          boxShadow: "0 6px 28px rgba(117,75,154,0.55)",
        }}
        animate={{ rotate: isOpen ? 15 : 0 }}
        transition={{ duration: 0.2 }}
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

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed z-[1001] rounded-2xl overflow-hidden shadow-2xl flex flex-col bottom-[90px] right-[12px] w-[calc(100vw-24px)] sm:bottom-[104px] sm:right-[28px] sm:w-[360px]"
            style={{
              maxHeight: "520px",
              background: "#1a1830",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3 shrink-0"
              style={{ background: GRADIENT }}
            >
              <div className="relative">
                {/* Replace src with your image path */}
                <img
                  src={jawaherAvatar}
                  alt="جواهر"
                  className="w-[44px] h-[44px] rounded-full object-cover"
                  style={{ border: "2px solid rgba(255,255,255,0.3)" }}
                />
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
              style={{ maxHeight: "360px" }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end gap-2 ${
                    msg.sender === "bot" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <img
                      src={jawaherAvatar}
                      alt="جواهر"
                      className="w-7 h-7 rounded-full object-cover shrink-0"
                      style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
                    />
                  )}
                  <div
                    className="max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                    style={{
                      background: msg.sender === "bot" ? GRADIENT : "#2a273f",
                      color: "white",
                    }}
                  >
                    {(() => {
                      if (msg.sender === "bot") {
                        const urlMatch = msg.text.match(/https?:\/\/[^\s]+/);
                        if (urlMatch) {
                          const textWithoutUrl = msg.text.replace(urlMatch[0], "").trim();
                          return (
                            <>
                              {textWithoutUrl && <span>{textWithoutUrl}</span>}
                              <a
                                href={urlMatch[0]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center no-underline"
                                style={{
                                  marginTop: "10px",
                                  background: "#7c3aed",
                                  color: "white",
                                  borderRadius: "25px",
                                  padding: "12px 24px",
                                  fontSize: "14px",
                                  width: "100%",
                                }}
                              >
                                احجزي جلستك المجانية 💜
                              </a>
                            </>
                          );
                        }
                      }
                      return msg.text;
                    })()}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex items-end gap-2 flex-row-reverse">
                  <img
                    src={jawaherAvatar}
                    alt="جواهر"
                    className="w-7 h-7 rounded-full object-cover shrink-0"
                    style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
                  />
                  <div
                    className="max-w-[85%] rounded-2xl"
                    style={{ background: GRADIENT }}
                  >
                    <TypingDots />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 p-3 shrink-0"
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
    </>
  );
};

export default JawaherChat;
