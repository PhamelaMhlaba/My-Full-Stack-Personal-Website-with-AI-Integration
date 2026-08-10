"use client";

import { useState } from "react";
import styles from "./BlogSubscribe.module.css";

export default function BlogSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Reuses same EmailJS setup as your Hero newsletter form.
    // Swap this block for your actual emailjs.send(...) call if different.
    try {
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.subscribeBlock}>
      <h3 className={styles.title}>📊 Weekly AI & Tech Insights</h3>
      <p className={styles.description}>
        Join 100+ developers getting cutting-edge tips
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={styles.input}
        />
        <button type="submit" className="btn-primary">
          Subscribe
        </button>
      </form>

      {status === "success" && (
        <p className={styles.successMsg}>You&apos;re subscribed! 🎉</p>
      )}
    </div>
  );
}