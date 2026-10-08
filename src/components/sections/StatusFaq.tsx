import { ArrowRight, Check, CircleHelp, FlaskConical, Minus, Plus } from 'lucide-react';
import { ButtonLink, Icon, SectionHead } from '@/components/ui';

const works = ['Google sign-in with an embedded Solana wallet', 'Scan any UPI QR and quote ₹ → USDC', 'Sign a real USDC transfer on Devnet', 'Server-side on-chain verification', 'UPI payment link to the merchant', 'Receipts with Solana proof'];
const notYet = ['Licensed partner for the rupee payout', 'Live market exchange rate', 'KYC and compliance', 'Security audit'];

const faqs = [
  { q: 'What is SolUPI?', a: 'A payments app that lets you pay any Indian UPI QR in rupees while your money is held as USDC on Solana. You scan, enter a rupee amount and approve. SolUPI handles conversion and settlement underneath.' },
  { q: 'What assets can I use?', a: 'USDC on Solana. A small amount of SOL covers network fees. Other stablecoins are not supported yet.' },
  { q: 'Why does SolUPI use Solana?', a: 'Payments at a shop counter need settlement in seconds for a fraction of a rupee. Solana confirms quickly at very low fees and USDC on Solana is widely held, so the blockchain can stay invisible to the person paying.' },
  { q: 'How does payment settlement work?', a: 'Your wallet signs a USDC transfer to the SolUPI treasury, tagged with the payment ID. The server verifies it on-chain (exact amount, token, sender and recipient) and only then creates the UPI payment to the merchant. Every status change is recorded, and a signature can never be reused.' },
  { q: 'Is SolUPI live?', a: 'Not publicly. It is a working prototype on Solana Devnet with test USDC. The Solana side is real: transactions are signed and verified on Devnet. The rupee payout uses a UPI payment link, and in demo mode its confirmation is simulated and labelled "DEMO".' },
  { q: 'Is SolUPI production-ready?', a: 'No. Before handling real money it needs a licensed payout partner for the rupee leg, a live exchange rate (the prototype uses a fixed ₹89.45 per USDC), compliance and KYC, and a security audit. That is what the next phase is for.' },
];

export function StatusFaq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        <SectionHead id="faq-title" badge="Status & FAQ" badgeIcon={CircleHelp} title="Straight answers." sub="Exactly what works today, and what doesn't yet." />

        <div className="mt-14 grid items-start gap-6 min-[960px]:grid-cols-2">
          <article data-float className="grid gap-8 rounded-card border border-hairline bg-surface p-7 min-[600px]:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-md bg-forest text-on-dark">
                  <Icon icon={FlaskConical} size={22} />
                </span>
                <h3 className="text-card">Prototype</h3>
              </div>
              <p className="text-body text-text-2">Working end to end on Solana Devnet with test USDC.</p>
              <p className="font-serif text-title">
                Devnet <span className="text-body text-text-2">· not live</span>
              </p>
              <ButtonLink to="app" className="mt-auto w-full">
                Try the prototype <Icon icon={ArrowRight} size={16} />
              </ButtonLink>
            </div>
            <div className="grid gap-5">
              <ul className="grid gap-3" aria-label="Works today">
                {works.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-body">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-success-bg text-success">
                      <Icon icon={Check} size={14} />
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
              <div>
                <p className="mb-3 text-micro font-semibold tracking-wider text-text-2 uppercase">Not yet</p>
                <ul className="grid gap-3" aria-label="Not yet">
                  {notYet.map((w) => (
                    <li key={w} className="flex items-start gap-3 text-body text-text-2">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-warning-bg text-warning">
                        <Icon icon={Minus} size={14} />
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div data-float-group className="grid gap-3">
            {faqs.map((f) => (
              <details data-float key={f.q} className="group rounded-hero border border-hairline bg-surface">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-body-l font-medium">
                  {f.q}
                  <Icon icon={Plus} size={20} className="shrink-0 transition-transform duration-250 group-open:rotate-45" />
                </summary>
                <p className="px-6 pb-6 text-body text-text-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
