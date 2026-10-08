import Image from 'next/image';
import { ArrowUpRight, BadgeCheck, FolderGit2, Play, Terminal } from 'lucide-react';
import { demoVideo, proofStats, txSignature } from '@/lib/site';
import { Icon, SectionHead, SiteLink, Todo } from '@/components/ui';

function DemoVideo() {
  if (demoVideo) {
    const embed = /youtube|youtu\.be|vimeo|loom/.test(demoVideo);
    return embed ? (
      <iframe src={demoVideo} title="SolUPI product demo" allow="fullscreen; picture-in-picture" loading="lazy" className="absolute inset-0 h-full w-full border-0" />
    ) : (
      <video src={demoVideo} controls preload="none" playsInline poster="/art/wave.jpg" className="absolute inset-0 h-full w-full bg-ink object-cover" />
    );
  }
  return (
    <>
      <Image src="/art/wave.jpg" alt="" fill sizes="(min-width: 960px) 400px, 100vw" className="-z-10 object-cover opacity-70" />
      <Image src="/brand/mark-mono-light.svg" alt="" width={508} height={474} className="mx-auto mt-auto mb-auto w-16 opacity-90" />
      <div className="flex items-center gap-4">
        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-surface text-forest">
          <Play size={22} fill="currentColor" aria-hidden />
        </span>
        <span>
          <strong className="block text-body-l font-semibold">Product demo</strong>
          <span className="text-caption">
            <Todo>[ADD DEMO VIDEO]</Todo>
          </span>
        </span>
      </div>
    </>
  );
}

export function Proof() {
  const [s1, s2, s3] = proofStats;
  const shortSig = txSignature ? `${txSignature.slice(0, 8)}…${txSignature.slice(-8)}` : '';

  return (
    <section id="proof" aria-labelledby="proof-title" className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        <SectionHead id="proof-title" badge="Proof" badgeIcon={BadgeCheck} title="See it. Verify it." sub="A working prototype on Solana Devnet. Every number here comes from the test suite in the repository." />

        <div data-float-group className="mt-14 grid gap-4 min-[960px]:grid-cols-3">
          <figure data-float className="on-dark relative isolate flex min-h-[420px] flex-col overflow-hidden rounded-card bg-forest p-6 text-on-dark">
            <DemoVideo />
          </figure>

          <div data-float className="grid gap-4">
            <article className="flex flex-col items-start gap-4 rounded-card border border-hairline bg-surface p-6 min-[420px]:flex-row">
              <span className="grid size-16 shrink-0 place-items-center rounded-hero bg-ink">
                <Image src="/brand/solana.png" alt="" width={36} height={36} />
              </span>
              <div className="min-w-0">
                <h3 className="text-card">Real Devnet transaction</h3>
                <p className={`mt-1 text-body text-text-2 ${shortSig ? 'break-all tabular' : ''}`} title={txSignature || undefined}>
                  {shortSig || <Todo>[ADD TX SIGNATURE]</Todo>}
                </p>
                <SiteLink k="tx" className="font-semibold text-forest">
                  View transaction <Icon icon={ArrowUpRight} size={16} />
                </SiteLink>
              </div>
            </article>
            <div className="grid grid-cols-2 gap-4">
              {[s1, s2].map((s) => (
                <div key={s.label} className="rounded-card border border-hairline bg-surface p-6">
                  <p className="text-stat font-semibold tracking-tight tabular">{s.value}</p>
                  <p className="mt-2 text-caption text-text-2">{s.label}</p>
                </div>
              ))}
            </div>
            <article className="flex items-center gap-4 rounded-card border border-hairline bg-surface p-6">
              <span className="grid size-14 shrink-0 place-items-center rounded-hero bg-sage-light text-forest">
                <Icon icon={FolderGit2} size={24} />
              </span>
              <div>
                <h3 className="text-card">Open source</h3>
                <SiteLink k="github" className="font-semibold text-forest">
                  View source <Icon icon={ArrowUpRight} size={16} />
                </SiteLink>
              </div>
            </article>
          </div>

          <article data-float className="flex flex-col gap-5 rounded-card border border-hairline bg-surface p-6">
            <span className="grid size-12 place-items-center rounded-md bg-forest text-on-dark">
              <Icon icon={Terminal} size={22} />
            </span>
            <div>
              <h3 className="text-card">Run it yourself</h3>
              <p className="mt-2 text-body text-text-2">The Devnet end-to-end script pays, verifies and then tries to cheat the verifier: wrong amount, recipient, token, sender, missing memo and replays.</p>
            </div>
            <pre className="overflow-x-auto rounded-hero bg-ink p-4 text-caption leading-relaxed text-on-dark-2">
              <code>
                <span className="text-mint">$</span> cd backend{'\n'}
                <span className="text-mint">$</span> npm run test:devnet
              </code>
            </pre>
            <div className="mt-auto border-t border-hairline pt-5">
              <p className="text-stat font-semibold tracking-tight tabular">{s3.value}</p>
              <p className="mt-1 text-caption text-text-2">{s3.label}</p>
            </div>
          </article>
        </div>
        <p className="mt-6 text-center text-caption text-text-2">User and payment-volume metrics will appear here after the India beta. We don&apos;t publish numbers we haven&apos;t measured.</p>
      </div>
    </section>
  );
}
