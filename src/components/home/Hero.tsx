import { motion } from 'framer-motion';
import { routes } from '../../utils/routes';
import Button from '../ui/Button';
import RevealWords from '../ui/RevealWords';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black px-6 pb-24 pt-36">
      <div className="hero-rays" aria-hidden="true" />
      <div className="shooting-star shooting-star-a" aria-hidden="true" />
      <div className="shooting-star shooting-star-b" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <p className="inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-green-300">Healthcare Management Software</p>
          <h1 className="mt-6 max-w-4xl text-6xl font-semibold leading-[0.9] text-white md:text-8xl">
            Take Healthcare Operations Further
          </h1>
          <RevealWords
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
            text="MacroHealthPlus connects doctors, clinics, diagnostics, pharmacies, and patients through secure digital workflows built for faster care delivery."
          />
          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
            <Button href={routes.requestDemo} icon>Request a Demo</Button>
          </motion.div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, x: 48, rotate: 1.5 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
          <div className="absolute -inset-8 rounded-[2.5rem] bg-green-500/10 blur-3xl" aria-hidden="true" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <img className="relative aspect-[4/3] w-full rounded-[1.55rem] object-cover" src="/assets/generated/health-tech-hero.webp" alt="MacroHealthPlus healthcare software" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
