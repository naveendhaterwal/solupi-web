import Image from 'next/image';
import { Coins, Gem, ScanQrCode, Sparkles, type LucideIcon } from 'lucide-react';
import { Badge, Icon } from '@/components/ui';

const cards: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Coins, title: 'Crypto-native', body: 'Built around stablecoin settlement, not traditional crypto workflows.' },
  { icon: ScanQrCode, title: 'Local-first', body: 'Designed around what people already do: scan a UPI QR and pay in rupees.' },
  { icon: Sparkles, title: 'Simple by design', body: 'No wallets, chains or bridges to understand just to make a payment.' },
];

export function Features() {
  return (
    <section id="why" aria-labelledby="why-title" className="py-section">
      <div className="mx-auto grid max-w-page gap-6 px-gutter min-[960px]:grid-cols-2">
        <div className="flex flex-col gap-10">
          <header data-float className="flex max-w-copy flex-col items-start gap-4">
            <Badge icon={Gem}>Why SolUPI</Badge>
            <h2 id="why-title" className="font-serif text-title">
              Built differently.
            </h2>
            <p className="text-body-l text-text-2">A payment experience first, with the settlement infrastructure kept underneath where it belongs.</p>
          </header>

          <ul data-float-group className="grid gap-4 min-[520px]:grid-cols-2">
            {cards.map((c) => (
              <li data-float key={c.title} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-6 transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:shadow-float">
                <span className="mb-2 grid size-12 place-items-center rounded-md bg-forest text-on-dark">
                  <Icon icon={c.icon} size={22} />
                </span>
                <h3 className="text-card">{c.title}</h3>
                <p className="text-body text-text-2">{c.body}</p>
              </li>
            ))}
            <li data-float className="on-dark relative isolate flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-card bg-forest p-6 text-center text-on-dark">
              <Image src="/art/wave.jpg" alt="" fill sizes="300px" className="-z-10 object-cover opacity-70" />
              <div className="absolute inset-0 -z-10 bg-veil/60" />
              <p className="text-stat font-semibold tabular">15</p>
              <p className="mt-1 text-body-l text-on-dark-2">payment states, every change audited</p>
            </li>
          </ul>
        </div>

        <article data-float className="on-dark relative isolate flex min-h-[520px] flex-col justify-end overflow-hidden rounded-card bg-ink p-8 text-on-dark">
          <Image src="/art/camera-ambient.jpg" alt="" fill sizes="(min-width: 960px) 600px, 100vw" className="-z-10 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-30% to-veil" />
          <span className="mb-auto inline-flex items-center gap-2 self-start rounded-full border border-dark-hairline bg-glass px-3.5 py-1.5 text-caption font-medium backdrop-blur-md">
            <Image src="/brand/solana.png" alt="" width={16} height={16} /> Solana-powered
          </span>
          <h3 className="font-serif text-title">
            The blockchain should disappear. <span className="text-triangle italic">The payment shouldn&apos;t.</span>
          </h3>
          <p className="mt-3 max-w-[32rem] text-body-l text-on-dark-2">Fast, low-cost settlement on Solana, verified by the server before anything moves on. The person paying only ever sees rupees.</p>
        </article>
      </div>
    </section>
  );
}
