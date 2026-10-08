'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Icon } from '@/components/ui';

// App art from frontend/assets/images, paired with what each step really does.
const slides = [
  { src: '/art/camera-feed.jpg', w: 690, h: 674, title: 'Scan any UPI QR', body: 'The same QR at every shop counter. SolUPI reads the merchant and UPI ID.' },
  { src: '/art/onboarding-wallet.png', w: 438, h: 375, title: 'A wallet at sign-in', body: 'Sign in with Google and a Solana wallet is created for you. No seed phrase.' },
  { src: '/art/success-check.png', w: 400, h: 265, title: 'Verified, then paid', body: 'The USDC transfer is checked on-chain before the rupee leg goes out.' },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((n) => (n + d + slides.length) % slides.length);
  const s = slides[i];

  return (
    <div className="flex flex-col gap-4 rounded-card bg-surface p-6 text-text shadow-float" role="group" aria-roledescription="carousel" aria-label="What SolUPI does">
      <div className="dots relative aspect-[252/160] overflow-hidden rounded-hero">
        {slides.map((sl, n) => (
          <Image
            key={sl.src}
            src={sl.src}
            alt=""
            width={sl.w}
            height={sl.h}
            sizes="260px"
            className={`absolute inset-0 h-full w-full transition-opacity duration-350 ${sl.src.endsWith('.jpg') ? 'object-cover' : 'object-contain p-3'} ${n === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
      <div aria-live="polite" className="min-h-[5.5rem]">
        <h3 className="text-card">{s.title}</h3>
        <p className="mt-1.5 text-body text-text-2">{s.body}</p>
      </div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => go(-1)} aria-label="Previous" className="grid size-touch place-items-center rounded-md border border-hairline transition-colors hover:bg-sage-light">
          <Icon icon={ArrowLeft} size={18} />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next" className="grid size-touch place-items-center rounded-md border border-hairline transition-colors hover:bg-sage-light">
          <Icon icon={ArrowRight} size={18} />
        </button>
        <span className="ml-auto text-caption text-text-2 tabular">
          {i + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
