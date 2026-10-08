import { Check, Clock, Compass, Globe, Minus, Users, X, type LucideIcon } from 'lucide-react';
import { team } from '@/lib/site';
import { Icon, SectionHead, SiteLink, Todo, cx } from '@/components/ui';

type Cell = { v: 'yes' | 'no' | 'part'; t: string };
const cols = ['Crypto off-ramp', 'P2P trade', 'Crypto cards', 'SolUPI'];
const rows: { label: string; cells: Cell[] }[] = [
  { label: 'Starts from stablecoins', cells: [{ v: 'yes', t: 'Yes' }, { v: 'yes', t: 'Yes' }, { v: 'yes', t: 'Yes' }, { v: 'yes', t: 'Yes' }] },
  { label: 'Pays an Indian UPI QR directly', cells: [{ v: 'no', t: 'Ends at your bank' }, { v: 'no', t: 'Ends at your bank' }, { v: 'part', t: 'Card rails, not UPI' }, { v: 'yes', t: 'Yes' }] },
  { label: 'No bank or stranger in the middle', cells: [{ v: 'no', t: 'Bank withdrawal' }, { v: 'no', t: 'Trade with a stranger' }, { v: 'yes', t: 'Yes' }, { v: 'yes', t: 'Yes' }] },
  { label: 'Stablecoin leg verifiable on-chain', cells: [{ v: 'part', t: 'Deposit only' }, { v: 'part', t: 'Deposit only' }, { v: 'part', t: 'Varies' }, { v: 'yes', t: 'Every payment' }] },
  { label: 'Built India-first', cells: [{ v: 'part', t: 'Varies' }, { v: 'part', t: 'Varies' }, { v: 'part', t: 'Varies' }, { v: 'yes', t: 'Yes' }] },
];
const mark: Record<Cell['v'], { icon: LucideIcon; cls: string }> = {
  yes: { icon: Check, cls: 'bg-success-bg text-success' },
  no: { icon: X, cls: 'bg-error-bg text-error' },
  part: { icon: Minus, cls: 'bg-warning-bg text-warning' },
};

const roadmap = [
  { icon: Check, tag: 'Now', title: 'Working prototype', body: 'Scan, quote, sign and verify on Solana Devnet, end to end.', now: true },
  { icon: Clock, tag: 'Next', title: 'India beta', body: 'User validation and payment infrastructure partnerships for the rupee leg.' },
  { icon: Globe, tag: 'Future', title: 'Global network', body: 'A stablecoin payment network that speaks every local rail.' },
];

export function Landscape() {
  return (
    <section id="compare" aria-labelledby="compare-title" className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        <SectionHead
          id="compare-title"
          badge="The landscape"
          badgeIcon={Compass}
          title={
            <>
              Existing rails solve pieces. <span className="text-text-accent italic">SolUPI connects the experience.</span>
            </>
          }
        />

        <div data-float tabIndex={0} role="region" aria-labelledby="compare-title" className="mt-14 overflow-x-auto rounded-card border border-hairline bg-surface">
          <table className="w-full min-w-[720px] border-collapse text-body">
            <thead>
              <tr>
                <th scope="col" className="p-5">
                  <span className="sr-only">Capability</span>
                </th>
                {cols.map((c, i) => (
                  <th key={c} scope="col" className={cx('p-5 text-left text-caption font-semibold', i === 3 ? 'bg-forest text-on-dark' : 'text-text-2')}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-hairline">
                  <th scope="row" className="w-[26%] p-5 text-left font-medium">
                    {r.label}
                  </th>
                  {r.cells.map((c, i) => (
                    <td key={i} className={cx('p-5 align-top', i === 3 && 'bg-forest text-on-dark')}>
                      <span className={cx('inline-flex items-start gap-2 text-caption', i === 3 ? 'font-medium' : 'text-text-2')}>
                        <span className={cx('grid size-5 shrink-0 place-items-center rounded-full', mark[c.v].cls)}>
                          <Icon icon={mark[c.v].icon} size={12} />
                        </span>
                        {c.t}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-section grid gap-4 min-[960px]:grid-cols-[1fr_1fr_1fr_1.25fr]" data-float-group>
          {roadmap.map((r) => (
            <article data-float key={r.tag} className={cx('flex flex-col items-start gap-3 rounded-card border bg-surface p-6', r.now ? 'border-forest ring-1 ring-forest' : 'border-hairline')}>
              <span className={cx('inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-micro font-semibold', r.now ? 'bg-success-bg text-success' : 'bg-sage-light text-text-2')}>
                <Icon icon={r.icon} size={13} /> {r.tag}
              </span>
              <h3 className="text-card">{r.title}</h3>
              <p className="text-body text-text-2">{r.body}</p>
            </article>
          ))}

          <article data-float id="team" aria-labelledby="team-title" className="flex flex-col gap-4 rounded-card bg-forest p-6 text-on-dark on-dark">
            <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-glass px-2.5 py-1 text-micro font-semibold">
              <Icon icon={Users} size={13} /> Who we are
            </span>
            <h3 id="team-title" className="font-serif text-[1.5rem] leading-tight">
              Building the payment layer for a stablecoin economy.
            </h3>
            <div className="mt-auto flex items-center gap-3 border-t border-dark-hairline pt-4">
              <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-full bg-surface font-serif text-card text-forest">
                {team.name ? team.name[0] : 'S'}
              </span>
              <div className="min-w-0 text-body">
                <p className="font-semibold">{team.name || <Todo>[ADD NAME]</Todo>}</p>
                <p className="text-caption text-on-dark-2">{team.role}</p>
              </div>
            </div>
            <p className="text-caption text-on-dark-2">{team.background || <Todo>[ADD SHORT BACKGROUND]</Todo>}</p>
            <div className="flex flex-wrap gap-x-4 text-caption font-semibold">
              <SiteLink k="founderX" tone="dark">X</SiteLink>
              <SiteLink k="founderGithub" tone="dark">GitHub</SiteLink>
              <SiteLink k="founderLinkedin" tone="dark">LinkedIn</SiteLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
