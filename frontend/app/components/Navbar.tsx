'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <Link href="/" className={styles.brand}>
          <span className={styles.brandText}>
            Full Stack <span className={styles.gradientText}> AI Engineer</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setOpen(false)}>About Me</Link>
          </li>
          <li>
            <Link href="/tech-blog" onClick={() => setOpen(false)}>Tech Blog</Link>
          </li>
          <li>
            <Link href="/ai-assistance" onClick={() => setOpen(false)}>AI Assistance</Link>
          </li>
          <li>
            <Link href="/lifestyle" onClick={() => setOpen(false)}>Lifestyle</Link>
          </li>
        </ul>

        {/* Contact CTA Button */}
        <Link href="/contact-me" onClick={() => setOpen(false)} className={styles.ctaButton}>
          Contact Me
        </Link>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn}
                onClick={() => setOpen(!open)}>
          <span className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>  
    </nav>
  );
}