import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../layout/Section';

const implementationImages = [
  {
    src: '/assets/implementation_images/253af0d6-20df-406c-a79a-fe6e17018945.jpeg',
    alt: 'MacroHealthPlus implementation team completing a software handover with a healthcare organization',
  },
  {
    src: '/assets/implementation_images/4465e6a6-a5fb-41e2-9277-4b50add69688.jpeg',
    alt: 'Healthcare and MacroHealthPlus representatives at an implementation handover',
  },
  {
    src: '/assets/implementation_images/2bf2131a-31f3-44d2-aebf-ebe2302efaf8.jpeg',
    alt: 'MacroHealthPlus representatives presenting implementation documentation at a diagnostic centre',
  },
  {
    src: '/assets/implementation_images/4dac747b-dc9e-48e7-80e4-c32638928e7e.jpeg',
    alt: 'MacroHealthPlus representative with a healthcare professional during implementation',
  },
];

export default function ImplementationInPractice() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = false;

  useEffect(() => {
    if (reduceMotion || isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % implementationImages.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + implementationImages.length) % implementationImages.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % implementationImages.length);
  };

  return (
    <Section className="overflow-hidden" eyebrow="Implementation in Practice" title="From agreement to working operations" intro="Implementation is where software meets the routines, responsibilities, and service demands of a healthcare organization. These moments reflect the practical work of bringing MacroHealthPlus into real operating environments.">
      <div className="grid items-center gap-6 sm:gap-8 md:grid-cols-[0.72fr_1.28fr] md:gap-8 lg:gap-20">
        <div className="border-y border-white/15 py-5 sm:py-6 lg:py-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-300">On-site collaboration</p>
          <p className="mt-3 text-base leading-6 text-white sm:mt-4 sm:text-lg sm:leading-7 lg:mt-5 lg:leading-8">
            Each implementation begins with people aligning around how the organization works and what the software needs to support.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 lg:mt-5 lg:leading-7">
            Configuration, operational handover, and direct coordination help turn a selected product into a system teams can begin using with clarity.
          </p>

          <div className="mt-5 flex items-center gap-3 lg:mt-8">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-green-300/60 hover:text-green-300" type="button" onClick={showPrevious} aria-label="Show previous implementation image" title="Previous image">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-green-300/60 hover:text-green-300" type="button" onClick={showNext} aria-label="Show next implementation image" title="Next image">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="ml-2 min-w-16 text-xs font-semibold tracking-[0.18em] text-slate-300" aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} / {String(implementationImages.length).padStart(2, '0')}
            </p>
          </div>
        </div>

        <div
          className="relative h-[250px] sm:h-[340px] md:h-[400px] lg:h-[560px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {implementationImages.map((image, index) => {
            const position = (index - activeIndex + implementationImages.length) % implementationImages.length;
            const offset = position * 18;

            return (
              <motion.figure
                className="absolute inset-x-0 top-0 h-[82%] overflow-hidden rounded-lg border border-white/15 bg-black shadow-2xl sm:inset-x-8 lg:inset-x-12"
                key={image.src}
                animate={{
                  x: position * 10,
                  y: offset,
                  scale: 1 - position * 0.035,
                  rotate: position === 0 ? 0 : position % 2 === 0 ? -1.2 : 1.2,
                  opacity: 1 - position * 0.18,
                }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: implementationImages.length - position }}
              >
                <img className="h-full w-full object-cover" src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </motion.figure>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
