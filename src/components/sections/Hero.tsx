import Image from 'next/image';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { ArtPanel, Badge, ButtonLink, Icon, Phone } from '@/components/ui';
import { HeroCarousel } from './HeroCarousel';

const rails = [
  { src: '/brand/usdc.png', alt: 'USDC' },
  { src: '/brand/solana.png', alt: 'Solana' },
  { src: '/brand/upi-arrow.png', alt: 'UPI' },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-16">
      <div className="mx-auto flex max-w-page flex-col items-center px-gutter text-center">
        <div className="hero-in">
          <Badge icon={Sparkles}>UPI · USDC · Solana</Badge>
        </div>
        <h1 id="hero-title" className="hero-in mt-6 font-serif text-hero [--i:1]">
          Pay locally.{' '}
          <span className="relative -top-1 mx-1 inline-grid size-[0.9em] place-items-center rounded-[0.24em] bg-forest align-middle shadow-elevated">
            <Image src="/brand/mark-mono-light.svg" alt="" width={508} height={474} className="h-[0.48em] w-auto" />
          </span>
          <br className="min-[520px]:hidden" /> <span className="text-text-accent italic">Settle globally.</span>
        </h1>
        <p className="hero-in mt-5 max-w-[30rem] text-body-l text-text-2 [--i:2]">SolUPI makes stablecoin payments feel as simple as everyday payments — powered by Solana.</p>
        <p className="hero-in mt-3 text-caption font-medium text-text-2 [--i:3]">Built on Solana · Stablecoin-powered · India-first</p>
      </div>

      {/* Landscape panel: cards float over the app's wave art, the phone rises out of the top edge. */}
      <div className="relative mx-auto mt-12 max-w-page px-gutter min-[960px]:pt-16">
        <ArtPanel className="flex flex-col gap-4 p-4 min-[600px]:p-8 min-[960px]:grid min-[960px]:min-h-[456px] min-[960px]:grid-cols-[300px_1fr_300px] min-[960px]:items-center min-[960px]:p-12">
          <div data-float className="flex flex-col items-start gap-5 rounded-card bg-surface p-6 text-left text-text shadow-float">
            <h2 className="text-[1.75rem] leading-tight font-medium tracking-tight">Any UPI QR. Paid in USDC.</h2>
            <ul className="flex -space-x-2" aria-label="Rails">
              {rails.map((r) => (
                <li key={r.alt} className="grid size-11 place-items-center rounded-full border-2 border-surface bg-sage-light">
                  <Image src={r.src} alt={r.alt} width={28} height={28} />
                </li>
              ))}
            </ul>
            <p className="text-body text-text-2">Scan the QR the shop already has. You approve in rupees; SolUPI settles in USDC on Solana underneath.</p>
            <div className="flex flex-wrap gap-2">
              <ButtonLink to="app" size="sm">
                Try SolUPI <Icon icon={ArrowRight} size={16} />
              </ButtonLink>
              <ButtonLink to="#proof" kind="secondary" size="sm">
                <Icon icon={Play} size={16} /> Watch demo
              </ButtonLink>
            </div>
          </div>

          <div aria-hidden className="hidden min-[960px]:block" />

          <div data-float className="text-left">
            <HeroCarousel />
          </div>

          {/* Mobile: the phone sits last in the column; desktop: centred, cut by the panel's bottom edge. */}
          <div className="mx-auto -mb-16 pt-4 min-[960px]:hidden">
            <Phone src="/screens/scan.webp" alt="SolUPI scanning a UPI QR: merchant ABC STORE detected, continue to pay ₹10." className="w-[260px]" priority />
          </div>
        </ArtPanel>

        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 hidden justify-center overflow-hidden rounded-b-panel min-[960px]:flex">
          <div data-rise className="pointer-events-auto">
            <Phone src="/screens/scan.webp" alt="SolUPI scanning a UPI QR: merchant ABC STORE detected, continue to pay ₹10." className="w-phone-lg" priority sizes="320px" />
          </div>
        </div>
      </div>
    </section>
  );
}
