/*
 * Every external link and proof value on the site lives here.
 * Leave a value empty ('') until it is real: the matching link renders as a
 * dashed "[ADD …]" placeholder instead of pointing anywhere invented.
 */
export type LinkKey = 'app' | 'github' | 'tx' | 'x' | 'linkedin' | 'founderX' | 'founderGithub' | 'founderLinkedin';

export const links: Record<LinkKey, string> = {
  app: '', // deployed web demo or APK download
  github: '', // https://github.com/<you>/solupi
  tx: '', // https://explorer.solana.com/tx/<signature>?cluster=devnet
  x: '',
  linkedin: '',
  founderX: '',
  founderGithub: '',
  founderLinkedin: '',
};

/** A real Devnet signature from `npm run test:devnet` (backend) or an in-app payment. */
export const txSignature: string = '';
/** Hosted MP4/WebM or a YouTube/Loom embed URL. */
export const demoVideo: string = '';

export const team = {
  name: '', // [ADD NAME]
  role: 'Founder · Product & engineering',
  background: '', // [ADD SHORT BACKGROUND]
} as { name: string; role: string; background: string };

/** Numbers from the repo's own test suite — the only metrics we publish. */
export const proofStats = [
  { value: '14/14', label: 'Devnet end-to-end checks passing' },
  { value: '22', label: 'Backend unit tests passing' },
  { value: '15', label: 'Payment states, every change audited' },
];

export const nav = [
  { href: '#product', label: 'Product' },
  { href: '#how', label: 'How it Works' },
  { href: '#solana', label: 'Why Solana' },
  { href: '#proof', label: 'Proof' },
  { href: '#faq', label: 'FAQ' },
];

/** Mirrors colors.bg in frontend/src/theme/colors.ts (browser chrome colour). */
export const themeColor = '#F7F7F3';
