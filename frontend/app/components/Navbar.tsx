'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/tech-blog">Tech Blog</Link></li>
        <li><Link href="/ai-assistance">AI Assistance</Link></li>
        <li><Link href="/lifestyle">Lifestyle</Link></li>
        <li><Link href="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}
