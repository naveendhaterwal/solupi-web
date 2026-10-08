import { Motion } from '@/components/Motion';
import { Nav } from '@/components/sections/Nav';
import { Hero } from '@/components/sections/Hero';
import { BuiltOn } from '@/components/sections/BuiltOn';
import { About } from '@/components/sections/About';
import { Steps } from '@/components/sections/Steps';
import { Features } from '@/components/sections/Features';
import { Verify } from '@/components/sections/Verify';
import { Proof } from '@/components/sections/Proof';
import { StatusFaq } from '@/components/sections/StatusFaq';
import { Landscape } from '@/components/sections/Landscape';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <a href="#main" className="fixed -top-24 left-4 z-[60] rounded-full bg-forest px-4 py-3 text-on-dark focus:top-4">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <BuiltOn />
        <About />
        <Steps />
        <Features />
        <Verify />
        <Proof />
        <StatusFaq />
        <Landscape />
        <Cta />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
