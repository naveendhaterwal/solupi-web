import Image from 'next/image';
import { Workflow } from 'lucide-react';
import { SectionHead } from '@/components/ui';
import { Timeline } from './Timeline';

/** Top crop of a real screenshot, framed like a phone rising out of the dotted well. */
function PhoneCrop({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="dots relative flex aspect-[340/300] items-start justify-center overflow-hidden rounded-hero px-10 pt-8">
      <div className="w-full max-w-[200px] overflow-hidden rounded-t-[30px] border-x-[7px] border-t-[7px] border-ink bg-ink shadow-device">
        <Image src={src} alt={alt} width={780} height={1688} sizes="200px" className="h-auto w-full rounded-t-[23px]" />
      </div>
    </div>
  );
}

export function Steps() {
  return (
    <section id="how" aria-labelledby="how-title" className="py-section">
      <div className="mx-auto max-w-page px-gutter">
        <SectionHead id="how-title" badge="How it works" badgeIcon={Workflow} title="One simple payment flow." sub="Three steps, and the blockchain never asks you to think about it." />

        <ol data-float-group className="mt-14 grid gap-4 min-[860px]:grid-cols-3">
          <li data-float className="flex flex-col gap-5 rounded-card border border-hairline bg-surface p-6">
            <PhoneCrop src="/screens/home.webp" alt="SolUPI home: total balance in rupees and USDC on Solana Devnet." />
            <div className="px-1">
              <p className="text-caption font-semibold text-text-accent tabular">01 · Fund</p>
              <h3 className="mt-1 text-card">Hold USDC in your wallet</h3>
              <p className="mt-2 text-body text-text-2">Sign in with Google and a Solana wallet is created for you. Your balance shows in rupees first, USDC second.</p>
            </div>
          </li>
          <li data-float className="flex flex-col gap-5 rounded-card border border-hairline bg-surface p-6">
            <PhoneCrop src="/screens/scan.webp" alt="SolUPI scan screen detecting the UPI merchant ABC STORE." />
            <div className="px-1">
              <p className="text-caption font-semibold text-text-accent tabular">02 · Scan</p>
              <h3 className="mt-1 text-card">Scan any UPI QR</h3>
              <p className="mt-2 text-body text-text-2">Point at the QR the shop already has. Enter rupees and see the exact USDC before you approve.</p>
            </div>
          </li>
          <li data-float className="flex flex-col gap-5 rounded-card border border-hairline bg-surface p-6">
            <div className="dots flex aspect-[340/300] items-center justify-center rounded-hero p-5">
              <div className="w-full rounded-hero bg-surface p-4 shadow-float">
                <Timeline compact />
              </div>
            </div>
            <div className="px-1">
              <p className="text-caption font-semibold text-text-accent tabular">03 · Approve & settle</p>
              <h3 className="mt-1 text-card">Verified on Solana, paid over UPI</h3>
              <p className="mt-2 text-body text-text-2">Your wallet signs a USDC transfer. The server checks it on-chain, then the rupee leg goes to the merchant.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
