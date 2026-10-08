import type { LucideIcon } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import Image from 'next/image';
import { links, type LinkKey } from '@/lib/site';

export function cx(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(' ');
}

/** Lucide at the app's stroke (DESIGN.md §6: outline, 1.8). */
export function Icon({ icon: I, size = 20, className }: { icon: LucideIcon; size?: number; className?: string }) {
  return <I size={size} strokeWidth={1.8} aria-hidden className={className} />;
}

/** Template badge: white pill, hairline, icon + label. */
export function Badge({ icon, children, tone = 'light' }: { icon?: LucideIcon; children: ReactNode; tone?: 'light' | 'glass' }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-caption font-medium',
        tone === 'light' ? 'border-hairline bg-surface text-text-2 shadow-soft' : 'border-dark-hairline bg-glass text-on-dark backdrop-blur-md',
      )}
    >
      {icon && <Icon icon={icon} size={16} />}
      {children}
    </span>
  );
}

export function SectionHead({ badge, badgeIcon, title, sub, align = 'center', id }: { badge: string; badgeIcon?: LucideIcon; title: ReactNode; sub?: ReactNode; align?: 'center' | 'left'; id?: string }) {
  return (
    <header data-float className={cx('flex flex-col gap-4', align === 'center' ? 'mx-auto max-w-copy items-center text-center' : 'max-w-copy items-start')}>
      <Badge icon={badgeIcon}>{badge}</Badge>
      <h2 id={id} className="font-serif text-title text-balance">
        {title}
      </h2>
      {sub && <p className="text-body-l text-pretty text-text-2">{sub}</p>}
    </header>
  );
}

type Kind = 'primary' | 'secondary' | 'light' | 'ghost-light';
const kinds: Record<Kind, string> = {
  primary: 'bg-forest text-on-dark hover:bg-ink hover:shadow-elevated',
  secondary: 'bg-sage-light text-text hover:bg-sage',
  light: 'bg-surface text-forest hover:bg-sage-light',
  'ghost-light': 'border border-dark-hairline text-on-dark hover:border-on-dark-muted',
};

/**
 * Pill button (the app's Button). `to` is an in-page anchor or a key from site links;
 * an unset site link renders as an honest, disabled placeholder.
 */
export function ButtonLink({ to, kind = 'primary', size = 'md', className, children, ...rest }: { to: `#${string}` | LinkKey; kind?: Kind; size?: 'md' | 'sm' } & Omit<ComponentProps<'a'>, 'href'>) {
  const href = to.startsWith('#') ? to : links[to as LinkKey];
  const external = href.startsWith('http');
  return (
    <a
      {...rest}
      href={href || undefined}
      aria-disabled={href ? undefined : true}
      title={href ? undefined : `[ADD ${to.toUpperCase()} URL] in src/lib/site.ts`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener' : undefined}
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[transform,background-color,box-shadow,border-color] duration-150 active:scale-[0.97]',
        size === 'md' ? 'h-btn px-6 text-base' : 'h-btn-sm px-5 text-body',
        kinds[kind],
        !href && 'cursor-not-allowed outline-[1.5px] outline-offset-3 outline-warning outline-dashed',
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Text link to a site link key; unset keys show an [ADD URL] tag. */
export function SiteLink({ k, children, className, tone = 'light' }: { k: LinkKey; children: ReactNode; className?: string; tone?: 'light' | 'dark' }) {
  const href = links[k];
  if (!href)
    return (
      <span className={cx('inline-flex min-h-touch items-center gap-2', tone === 'light' ? 'text-text-muted' : 'text-on-dark-2', className)} title={`[ADD ${k.toUpperCase()} URL] in src/lib/site.ts`}>
        {children}
        <span className="rounded-sm bg-warning-bg px-1 text-micro font-medium text-warning">[ADD URL]</span>
      </span>
    );
  return (
    <a href={href} target="_blank" rel="noopener" className={cx('inline-flex min-h-touch items-center gap-1 underline-offset-4 hover:underline', className)}>
      {children}
    </a>
  );
}

export function Todo({ children }: { children: ReactNode }) {
  return <span className="rounded-sm bg-warning-bg px-1 font-medium text-warning">{children}</span>;
}

/** A real app screenshot in a device frame. */
export function Phone({ src, alt, className, priority, sizes = '320px' }: { src: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  return (
    <figure className={cx('relative aspect-[390/844] w-phone max-w-full rounded-device bg-ink p-2.5 shadow-device', className)}>
      <Image src={src} alt={alt} width={780} height={1688} sizes={sizes} priority={priority} className="h-full w-full rounded-[36px] object-cover object-top" />
    </figure>
  );
}

/** The template's wide rounded landscape panel, using the app's wave art. */
export function ArtPanel({ children, className, art = '/art/wave.jpg', veil = 'bottom' }: { children: ReactNode; className?: string; art?: string; veil?: 'bottom' | 'top' }) {
  return (
    <div className={cx('on-dark relative isolate overflow-hidden rounded-panel bg-forest', className)}>
      <div data-parallax className="absolute -inset-y-[12%] inset-x-0 -z-10">
        <Image src={art} alt="" fill sizes="100vw" className="object-cover opacity-80" />
      </div>
      <div className={cx('absolute inset-0 -z-10', veil === 'bottom' ? 'bg-gradient-to-b from-transparent via-transparent to-veil' : 'bg-gradient-to-b from-veil via-veil/70 to-transparent')} />
      {children}
    </div>
  );
}
