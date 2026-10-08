'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { nav } from '@/lib/site';
import { ButtonLink, Icon, cx } from '@/components/ui';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    sheetRef.current?.querySelector('a')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const wide = window.matchMedia('(min-width: 960px)');
    const onWide = () => wide.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    wide.addEventListener('change', onWide);
    return () => {
      document.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', onWide);
    };
  }, [open]);

  return (
    <header className={cx('sticky top-0 z-50 border-b transition-[background-color,border-color] duration-250', scrolled || open ? 'border-hairline bg-nav-glass backdrop-blur-xl backdrop-saturate-150' : 'border-transparent bg-bg')}>
      <div className="mx-auto flex h-nav max-w-page items-center gap-6 px-gutter">
        <a href="#top" aria-label="SolUPI home" className="flex min-h-touch items-center">
          <Image src="/brand/logo-horizontal.svg" alt="SolUPI" width={124} height={40} priority className="h-9 w-auto" />
        </a>
        <nav aria-label="Primary" className="mx-auto hidden gap-1 min-[960px]:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="inline-flex min-h-touch items-center rounded-full px-3.5 text-body text-text-2 transition-colors hover:bg-sage-light hover:text-text">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden min-[960px]:block">
          <ButtonLink to="app" size="sm">
            Launch App
          </ButtonLink>
        </div>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
          className="ml-auto grid size-touch place-items-center rounded-full bg-sage-light text-text min-[960px]:hidden"
        >
          <Icon icon={open ? X : Menu} size={22} />
        </button>
      </div>
      <div id="mobile-menu" ref={sheetRef} hidden={!open} className="border-t border-hairline px-gutter pt-2 pb-6 min-[960px]:hidden">
        <nav aria-label="Mobile" className="mb-4 grid">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex min-h-13 items-center border-b border-hairline text-body-l">
              {n.label}
            </a>
          ))}
        </nav>
        <ButtonLink to="app" className="w-full">
          Launch App
        </ButtonLink>
      </div>
    </header>
  );
}
