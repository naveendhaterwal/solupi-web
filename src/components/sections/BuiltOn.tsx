import Image from 'next/image';
import { Code2, Database, Smartphone, Wallet } from 'lucide-react';
import { Icon } from '@/components/ui';

// The real stack (frontend/ + backend/ package.json). A "built on" strip — not a partnership claim.
const items = [
  { name: 'Solana', logo: '/brand/solana.png' },
  { name: 'USDC', logo: '/brand/usdc.png' },
  { name: 'UPI', logo: '/brand/upi-arrow.png' },
  { name: 'Privy wallets', icon: Wallet },
  { name: 'Expo · React Native', icon: Smartphone },
  { name: 'Postgres · Drizzle', icon: Database },
  { name: '@solana/web3.js', icon: Code2 },
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-14 pr-14">
      {items.map((it) => (
        <li key={it.name} className="flex items-center gap-2.5 text-[1.375rem] font-semibold tracking-tight whitespace-nowrap text-text-muted grayscale transition-[filter,color] hover:text-text hover:grayscale-0">
          {it.logo ? <Image src={it.logo} alt="" width={28} height={28} className="opacity-70" /> : it.icon && <Icon icon={it.icon} size={24} />}
          {it.name}
        </li>
      ))}
    </ul>
  );
}

export function BuiltOn() {
  return (
    <section aria-label="Built on" className="py-section">
      <div className="fade-x flex overflow-hidden">
        <div className="flex animate-marquee motion-reduce:animate-none">
          <Row />
          <Row hidden />
        </div>
      </div>
      <p className="mt-8 px-gutter text-center text-body text-text-2">Built on open rails. No partnerships implied.</p>
    </section>
  );
}
