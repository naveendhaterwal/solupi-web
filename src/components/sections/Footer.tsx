import Image from 'next/image';
import { nav } from '@/lib/site';
import { SiteLink } from '@/components/ui';

export function Footer() {
  return (
    <footer className="pt-section pb-10">
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid gap-12 min-[760px]:grid-cols-[2fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-4">
            <Image src="/brand/logo-horizontal.svg" alt="SolUPI" width={124} height={40} className="h-9 w-auto" />
            <p className="max-w-[24rem] text-body text-text-2">Pay any Indian UPI QR in rupees, settled in USDC on Solana underneath.</p>
            <p className="inline-flex items-center gap-2 text-caption font-medium text-text-2">
              <Image src="/brand/solana.png" alt="" width={14} height={14} /> Built on Solana
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="mb-2 text-body-l font-medium">Product</p>
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="flex min-h-touch items-center text-body text-text-2 hover:text-text">
                {n.label}
              </a>
            ))}
          </nav>
          <nav aria-label="Elsewhere" className="text-body text-text-2">
            <p className="mb-2 text-body-l font-medium text-text">Links</p>
            <SiteLink k="github">GitHub</SiteLink>
            <br />
            <SiteLink k="x">X</SiteLink>
            <br />
            <SiteLink k="linkedin">LinkedIn</SiteLink>
            <br />
            <SiteLink k="tx">Solana Explorer</SiteLink>
          </nav>
        </div>
        <p className="mt-12 border-t border-hairline pt-8 text-center text-caption text-text-2">© 2026 SolUPI · Prototype on Solana Devnet · Not a licensed payment service.</p>
      </div>
    </footer>
  );
}
