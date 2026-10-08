import { ArrowRight, Sparkle } from 'lucide-react';
import { ArtPanel, Badge, ButtonLink, Icon, Phone } from '@/components/ui';

export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="pb-section">
      <div className="mx-auto max-w-page px-gutter">
        <ArtPanel veil="top" className="flex flex-col items-center px-6 pt-20 text-center text-on-dark min-[960px]:pt-24">
          <div data-float className="flex flex-col items-center gap-5">
            <Badge icon={Sparkle} tone="glass">
              Experience the SolUPI prototype
            </Badge>
            <h2 id="cta-title" className="max-w-[40rem] font-serif text-hero text-balance">
              Your stablecoins. <span className="text-triangle italic">One simple payment experience.</span>
            </h2>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <ButtonLink to="app" kind="light">
                Try SolUPI <Icon icon={ArrowRight} size={16} />
              </ButtonLink>
              <ButtonLink to="github" kind="ghost-light">
                View GitHub
              </ButtonLink>
            </div>
          </div>
          <div data-float className="mt-14 -mb-40 min-[960px]:-mb-48">
            <Phone src="/screens/home.webp" alt="SolUPI home screen: balance in rupees and USDC, with Scan & Pay." className="w-[280px] min-[960px]:w-phone-lg" />
          </div>
        </ArtPanel>
      </div>
    </section>
  );
}
