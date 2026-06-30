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
            <Link href="/" className={styles.navLink} onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink} onClick={() => setOpen(false)}>About Me</Link>
          </li>
          <li>
            <Link href="/tech-blog" className={styles.navLink} onClick={() => setOpen(false)}>Tech Blog</Link>
          </li>
          <li>
            <Link href="/ai-assistance" className={styles.navLink} onClick={() => setOpen(false)}>AI Assistance</Link>
          </li>
          <li>
            <Link href="/lifestyle" className={styles.navLink} onClick={() => setOpen(false)}>Lifestyle</Link>
          </li>
        </ul>

        {/* Contact CTA Button */}
        <Link href="/contact-me" className="btn-primary" onClick={() => setOpen(false)}>
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

       {/* Mobile Dropdown Menu */}
{open && (
  <div className={styles.mobileMenu}>
    <Link href="/" className={styles.mobileLink} onClick={() => setOpen(false)}>
      Home
    </Link>

    <Link href="/about" className={styles.mobileLink} onClick={() => setOpen(false)}>
      About Me
    </Link>

    <Link href="/tech-blog" className={styles.mobileLink} onClick={() => setOpen(false)}>
      Tech Blog
    </Link>

    <Link href="/ai-assistance" className={styles.mobileLink} onClick={() => setOpen(false)}>
      AI Assistance
    </Link>

    <Link href="/lifestyle" className={styles.mobileLink} onClick={() => setOpen(false)}>
      Lifestyle
    </Link>

    <Link href="/contact-me" className="btn-primary" onClick={() => setOpen(false)}>
      Contact Me
    </Link>
  </div>
)} 
    </nav>
  );
}