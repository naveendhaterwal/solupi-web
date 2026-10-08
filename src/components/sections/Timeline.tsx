import { Check } from 'lucide-react';
import { Icon, cx } from '@/components/ui';

// The backend's real happy-path states (backend/src/services/payment/stateMachine.ts), in user words.
const steps = [
  { title: 'Signed', detail: 'USDC transfer submitted to Solana', state: 'done' },
  { title: 'Verified on Solana', detail: 'Amount, token, sender, treasury and memo checked', state: 'done' },
  { title: 'UPI link created', detail: 'upi://pay to the scanned merchant', state: 'done' },
  { title: 'Waiting for UPI', detail: 'Rupee leg paid out to the merchant', state: 'active' },
  { title: 'Completed', detail: 'Receipt with Solana proof', state: 'pending' },
] as const;

export function Timeline({ compact }: { compact?: boolean }) {
  const list = compact ? steps.slice(0, 4) : steps;
  return (
    <ol aria-label="Payment status" className="grid text-left">
      {list.map((s, i) => (
        <li key={s.title} className={cx('relative grid gap-0.5 pl-8', i < list.length - 1 && (compact ? 'pb-3' : 'pb-5'))}>
          <span
            aria-hidden
            className={cx(
              'absolute top-0.5 left-0 grid size-5 place-items-center rounded-full border-2',
              s.state === 'done' && 'border-success-accent bg-success-accent text-on-dark',
              s.state === 'active' && 'border-warning bg-surface ring-4 ring-warning-bg',
              s.state === 'pending' && 'border-sage bg-surface',
            )}
          >
            {s.state === 'done' && <Icon icon={Check} size={12} />}
          </span>
          {i < list.length - 1 && <span aria-hidden className={cx('absolute top-6 bottom-0.5 left-[9px] w-0.5', s.state === 'done' ? 'bg-success-accent' : 'bg-sage')} />}
          <strong className={cx('text-body font-semibold', s.state === 'pending' && 'font-medium text-text-2')}>
            {s.title}
            <span className="sr-only"> — {s.state === 'done' ? 'done' : s.state === 'active' ? 'in progress' : 'pending'}</span>
          </strong>
          {!compact && <span className="text-caption text-text-2">{s.detail}</span>}
        </li>
      ))}
    </ol>
  );
}
