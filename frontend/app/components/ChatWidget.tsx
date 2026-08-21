"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./ChatWidget.module.css";

type Message = { role: "user" | "assistant"; content: string };

const QUICK_QUESTIONS = [
  "What are Phamela's skills?",
  "Tell me about her experience",
  "What projects has she built?",
  "How can I contact her?",
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showQuickReplies, setShowQuickReplies] = useState(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong — please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.widgetRoot}>
      {isOpen && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.avatar}>🤖</div>
              <div>
                <p className={styles.title}>Ask Phamela AI</p>
                <p className={styles.status}>
                  <span className={styles.statusDot} /> Online
                </p>
              </div>
            </div>
            <div className={styles.headerActions}>
                <button
                    className={styles.backBtn}
                    onClick={() => setShowQuickReplies(true)}
                    aria-label="Show quick questions"
                    title="Show quick questions"
             >
                    ↺
                </button>
                <button
                    className={styles.closeBtn}
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat"
                >
                    ✕
                </button>
            </div>
            </div>

          <div className={styles.body} ref={scrollRef}>
            <div className={styles.botBubble}>
              Hi! I'm Ask Phamela AI 👋 I know everything about her skills, projects,
              experience, and how to get in touch. Ask me anything!
            </div>

            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? styles.userBubble : styles.botBubble}
              >
                {m.content}
              </div>
            ))}

            {loading && <div className={styles.botBubble}>Typing…</div>}

            {(messages.length === 0 || showQuickReplies) && (
                <div className={styles.quickReplies}>
                    {QUICK_QUESTIONS.map((q) => (
                        <button
                            key={q}
                            className={styles.quickReplyBtn}
                            onClick={() => {
                                setShowQuickReplies(false);
                                sendMessage(q);
                 }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className={styles.inputRow}
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              className={styles.input}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Phamela..."
            />
            <button type="submit" className={styles.sendBtn} aria-label="Send">
              ➤
            </button>
          </form>
        </div>

      )}

      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Open AI chat"
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </div>
  );
};

export default ChatWidget;