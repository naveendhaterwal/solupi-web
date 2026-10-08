import Image from 'next/image';
import { ArrowRight, Layers } from 'lucide-react';
import { Badge, ButtonLink, Icon } from '@/components/ui';

const story =
  'Spending stablecoins in India today means an exchange, a P2P trade, a bank withdrawal and a UPI app before a shopkeeper sees a rupee. SolUPI collapses that into one scan: you pay in rupees, and USDC settles on Solana underneath.';

export function About() {
  return (
    <section id="product" aria-labelledby="about-title" className="py-section">
      <div className="mx-auto grid max-w-page gap-12 px-gutter min-[960px]:grid-cols-[1fr_1.55fr] min-[960px]:gap-16">
        <div className="flex flex-col items-start gap-6 min-[960px]:justify-between">
          <div className="flex flex-col items-start gap-6">
            <Badge icon={Layers}>The problem</Badge>
            <h2 id="about-title" className="font-serif text-title text-balance">
              Crypto shouldn&apos;t feel like crypto.
            </h2>
            <p data-words className="text-[1.4rem] leading-snug tracking-tight text-pretty">
              {story.split(' ').map((w, i) => (
                <span key={i}>{w} </span>
              ))}
            </p>
          </div>
          <ButtonLink to="#how">
            See how it works <Icon icon={ArrowRight} size={16} />
          </ButtonLink>
        </div>

        <div data-float-group className="grid gap-4 min-[600px]:grid-cols-[1.2fr_1fr] min-[600px]:grid-rows-2">
          <article data-float className="on-dark relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-card p-7 text-on-dark min-[600px]:row-span-2">
            <Image src="/art/camera-feed.jpg" alt="" fill sizes="(min-width: 960px) 420px, 100vw" className="-z-10 object-cover" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-40% to-veil" />
            <h3 className="text-card">Pay any UPI QR</h3>
            <p className="mt-2 text-body text-on-dark-2">India&apos;s QR at every counter, now payable from a stablecoin balance.</p>
          </article>

          <article data-float className="on-dark relative isolate flex min-h-[200px] flex-col justify-end overflow-hidden rounded-card bg-forest p-7 text-on-dark">
            <Image src="/art/wave.jpg" alt="" fill sizes="(min-width: 960px) 340px, 100vw" className="-z-10 object-cover opacity-80" />
            <h3 className="text-card">Settled in USDC on Solana</h3>
            <p className="mt-2 text-body text-on-dark-2">Every payment is a verifiable Solana transaction.</p>
          </article>

          <article data-float className="flex min-h-[200px] flex-col items-center justify-center rounded-card bg-sage-light p-7 text-center">
            <p className="text-stat font-semibold tracking-tight tabular">
              6 <span className="text-text-muted">→</span> 1
            </p>
            <p className="mt-2 text-body text-text-2">steps from stablecoin to shopkeeper today. One scan with SolUPI.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
