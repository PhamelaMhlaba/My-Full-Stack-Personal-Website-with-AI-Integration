'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <Link href="/" className={styles.brand}>
          <span className={styles.brandText}>
            Full Stack <span className={styles.gradientText}>AI Engineer</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              About Me
            </Link>
          </li>
          <li>
            <Link href="/tech-blog" className={styles.navLink}>
              Tech Blog
            </Link>
          </li>
          <li>
            <Link href="/ai-assistance" className={styles.navLink}>
              AI Assistance
            </Link>
          </li>
          <li>
            <Link href="/lifestyle" className={styles.navLink}>
              Lifestyle
            </Link>
          </li>
        </ul>

        {/* Contact CTA Button */}
        <Link href="/contact" className={styles.ctaButton}>
          Contact Me
        </Link>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn}>
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