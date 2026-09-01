// components/WhatsAppButton.tsx
'use client';

import { getWhatsAppLink } from '@/lib/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  return (
    
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${styles.whatsappBtn}`}
      aria-label="Chat with Phamela on WhatsApp"
    >
      <WhatsAppIcon size={20} />
      <span>Chat on WhatsApp</span>
    </a>
  );
}