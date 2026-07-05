import { motion } from 'framer-motion';
import { routes } from '../../utils/routes';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-black px-6 pb-20 pt-36">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">Practice Management Software</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            for Better Quality of Care
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            MacroHealthPlus helps to deliver superior healthcare for your doctors, clinics, diagnostics and pharmacy.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={routes.requestDemo} icon>Request a Demo</Button>
          </div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <img className="dark-image-soft relative aspect-[4/3] w-full rounded-[1.8rem] object-cover shadow-2xl" src="/assets/macrohealthplus/homepage/homepage-Home__banner.56f850639a172e65bf8b.jpg" alt="MacroHealthPlus healthcare software" />
        </motion.div>
      </div>
    </section>
  );
}
