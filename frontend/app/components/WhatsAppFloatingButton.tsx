// components/WhatsAppFloatingButton.tsx
'use client';

import { getWhatsAppLink } from '@/lib/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';
import styles from './WhatsAppFloatingButton.module.css';

export default function WhatsAppFloatingButton() {
  return (
    <a
    
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingBtn}
      aria-label="Chat with Phamela on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}