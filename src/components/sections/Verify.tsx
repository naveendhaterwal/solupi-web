'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Fingerprint, Gauge, Repeat2, ServerCog, ShieldCheck, Wallet, type LucideIcon } from 'lucide-react';
import { ArtPanel, Badge, Icon, Phone, cx } from '@/components/ui';

// Facts from backend/src/services/solana/verify.ts and docs/PROJECT_STATUS.md.
const items: { icon: LucideIcon; title: string; body: string; screen: string; alt: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Exact on-chain verification',
    body: 'A payment counts only if the Solana transaction succeeded and moved the exact USDC base units, from your wallet to the treasury, tagged with the payment ID.',
    screen: '/screens/amount.webp',
    alt: 'Amount screen: ₹10 costs 0.11 USDC at 1 USDC = ₹89.45.',
  },
  {
    icon: Repeat2,
    title: 'Replay protection',
    body: 'Every signature can pay exactly once, and the RPC network is checked against the configured cluster.',
    screen: '/screens/scan.webp',
    alt: 'Scan screen with the detected merchant ABC STORE.',
  },
  {
    icon: Wallet,
    title: 'Your keys, your wallet',
    body: 'An embedded Solana wallet created at Google sign-in. SolUPI never holds or sees private keys.',
    screen: '/screens/receive.webp',
    alt: 'Receive screen showing the wallet QR code and supported assets USDC and SOL.',
  },
  {
    icon: ServerCog,
    title: 'Server-authoritative status',
    body: 'Fifteen payment states with legal transitions only. The app never advances a payment itself; it polls and renders.',
    screen: '/screens/home.webp',
    alt: 'Home screen with balance in rupees and USDC on Solana Devnet.',
  },
  {
    icon: Gauge,
    title: 'Why Solana',
    body: 'Settlement in seconds for a fraction of a rupee, with USDC that people already hold. Fast enough for a shop counter.',
    screen: '/screens/wallet.webp',
    alt: 'Wallet screen for the Demo Wallet on Solana.',
  },
];

export function Verify() {
  const [open, setOpen] = useState(0);

  return (
    <section id="solana" aria-labelledby="solana-title" className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        <ArtPanel className="grid gap-8 p-3 min-[600px]:p-6 min-[960px]:grid-cols-[1.15fr_1fr] min-[960px]:p-12">
          <div data-float className="rounded-[36px] bg-surface p-5 text-text min-[600px]:p-7">
            <div className="mb-6 flex flex-col items-start gap-3 px-1">
              <Badge icon={Fingerprint}>Why Solana</Badge>
              <h2 id="solana-title" className="font-serif text-title">
                How a payment is proven.
              </h2>
            </div>
            <ul className="grid gap-3">
              {items.map((it, i) => {
                const isOpen = i === open;
                return (
                  <li key={it.title} className={cx('rounded-hero border transition-colors', isOpen ? 'border-sage bg-sage-light' : 'border-hairline bg-surface')}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`verify-${i}`}
                        onClick={() => setOpen(i)}
                        className="flex min-h-16 w-full items-center gap-3 px-5 text-left text-body-l font-medium"
                      >
                        <Icon icon={it.icon} size={22} className="text-forest" />
                        {it.title}
                      </button>
                    </h3>
                    <div id={`verify-${i}`} hidden={!isOpen} className="px-5 pb-5 pl-[3.375rem] text-body text-text-2">
                      {it.body}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative -mb-12 hidden items-end justify-center self-end min-[960px]:flex">
            <div className="relative">
              <Phone src={items[0].screen} alt="" className="invisible w-phone" />
              {items.map((it, i) => (
                <div key={it.title} className={cx('absolute inset-0 transition-[opacity,transform] duration-350', i === open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0')} aria-hidden={i !== open}>
                  <Phone src={it.screen} alt={i === open ? it.alt : ''} className="w-phone" />
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto -mb-16 min-[960px]:hidden">
            <Image src={items[open].screen} alt={items[open].alt} width={780} height={1688} sizes="240px" className="w-[240px] rounded-t-[36px] border-x-[10px] border-t-[10px] border-ink" />
          </div>
        </ArtPanel>
      </div>
    </section>
  );
}
