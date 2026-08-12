"use client";

import styles from "./BlogSubscribe.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function BlogSubscribe() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    // Reuses same EmailJS setup as your Hero newsletter form.
    // Swap this block for your actual emailjs.send(...) call if different.
    try {
      //Email to user confirmation 
      await emailjs
      .sendForm(
        "service_iuy2l0j",
        "template_2hbew44",
        formRef.current,
        "Si7luRLFo1x_8Wym5"
      );
    
      alert("Subscribed Successfully");
      formRef.current?.reset();

    } catch (error: any) {
      // Log the full error so you can debug
      console.error("EmailJS Error status:", error?.status);
      console.error("EmailJS Error text:", error?.text);
      console.error("Full error:", error);
      alert(`Subscription failed: ${error?.text || "Please try again"}`);
    }
  }
      

  return (
    <div className={styles.subscribeBlock}>
      <h3 className={styles.title}>📊 Weekly AI & Tech Insights</h3>
      <p className={styles.description}>
        Join 100+ developers getting cutting-edge tips
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
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