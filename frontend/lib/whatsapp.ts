// lib/whatsapp.ts

// TODO: replace with your real number — country code, no leading zero, no spaces/dashes
// e.g. South Africa 082 123 4567 -> 27821234567
export const WHATSAPP_NUMBER = '27753246472';

const DEFAULT_MESSAGE =
  "Hi Phamela, I saw your portfolio and I would like to chat about...";

export function getWhatsAppLink(message: string = DEFAULT_MESSAGE): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}