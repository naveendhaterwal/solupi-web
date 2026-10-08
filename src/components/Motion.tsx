'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

/*
 * Antigravity motion, bounded by frontend/DESIGN.md §9:
 *  - [data-float]          floats up into view with a slight X tilt (staggered inside [data-float-group])
 *  - [data-parallax]       background art drifts slower than the page
 *  - [data-words] > span   words brighten as the paragraph scrolls through (scrubbed)
 * Easing is the app's smoothOut; only transform and opacity animate; everything is
 * skipped under prefers-reduced-motion, so content is always visible without JS.
 */
/** motion.ts ease.smoothOut — cubic-bezier(.22, 1, .36, 1) as an SVG path for CustomEase. */
const SMOOTH_OUT = 'M0,0 C0.22,1 0.36,1 1,1';

export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CustomEase);
    const ease = CustomEase.create('smoothOut', SMOOTH_OUT);
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('[data-float-group]').forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>(':scope > [data-float], :scope > * > [data-float]');
        gsap.from(items, {
          y: 40,
          rotateX: 6,
          opacity: 0,
          transformPerspective: 900,
          transformOrigin: '50% 100%',
          duration: 0.9,
          ease,
          stagger: 0.1,
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-float]').forEach((el) => {
        if (el.closest('[data-float-group]')) return;
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease,
          clearProps: 'transform,opacity',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        gsap.fromTo(el, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
      });

      gsap.utils.toArray<HTMLElement>('[data-words]').forEach((el) => {
        gsap.fromTo(el.querySelectorAll('span'), { opacity: 0.18 }, { opacity: 1, stagger: 0.05, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } });
      });

      // The hero phone rises out of the panel on load.
      gsap.from('[data-rise]', { y: 120, opacity: 0, duration: 1.1, ease, delay: 0.25, clearProps: 'transform,opacity' });
    });

    return () => mm.revert();
  }, []);

  return null;
}
