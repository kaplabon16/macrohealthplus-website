import { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section';
import { setPageMeta } from '../utils/seo';

const businessPlan = [
  'Develop clinically informed software for professionals and organizations responsible for consultation, diagnostics, pharmacy, administration, and patient service.',
  'Create a dependable digital link between clinical practice, organizational operations, and the information patients need throughout their care journey.',
  'Make communication between healthcare professionals and patients more structured, timely, and useful through practical electronic channels.',
  'Support medical education and patient understanding with accessible resources that complement, rather than complicate, the delivery of care.',
];

const targetMarket = [
  'Healthcare professionals and administrators working across practices, clinics, diagnostic centres, pharmacies, and hospitals in Bangladesh.',
  'Patients and healthcare users who benefit from more organized access to appointments, records, results, medicines, and care information.',
  'International healthcare teams seeking a practical, secure, and economically sustainable approach to digital practice management.',
];

const leadershipTeam = [
  {
    name: 'Dr. Aminur Rahman',
    role: 'Managing Director & CEO',
    image: '/assets/about_us/who_we_are/AminurRahman.jpg',
    imageClassName: 'object-center',
  },
  {
    name: 'Dr. Mohsina Nazneen Bhuiyan',
    role: 'Director',
    image: '/assets/about_us/who_we_are/mohsina.jpeg',
    imageClassName: 'object-center',
  },
];

const advisoryMembers = [
  {
    name: 'Nick Ebbeck',
    role: 'Advisor',
    image: '/assets/about_us/who_we_are/NAEhead.jpg',
    imageClassName: 'object-center',
  },
  {
    name: 'Dr Muhammad Sajedur Rahman',
    role: 'Advisor',
    image: '/assets/about_us/who_we_are/sajed.jpg',
    imageClassName: 'object-top',
  },
];

type TeamMember = (typeof leadershipTeam)[number];

function TeamRoster({ members }: { members: TeamMember[] }) {
  return (
    <motion.div
      className="grid gap-x-8 gap-y-12 sm:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.01 }}
      variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
    >
      {members.map((member) => (
        <motion.article
          className="group"
          key={member.name}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] } } }}
        >
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-white/5">
            <img
              className={`h-full w-full object-cover transition duration-300 group-hover:scale-[1.025] ${member.imageClassName}`}
              src={member.image}
              alt={member.name}
              loading="lazy"
            />
          </div>
          <div className="mt-5 border-t border-white/15 pt-4">
            <h2 className="text-xl font-semibold text-white">{member.name}</h2>
            <p className="mt-1 text-sm text-slate-300">{member.role}</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

export default function About() {
  useEffect(() => {
    setPageMeta('Who We Are', 'MacroHealthPlus mission, vision, team, business plan, and target market.');
  }, []);

  return (
    <>
      <Section className="pt-28 md:pt-36" eyebrow="About MacroHealthPlus" title="Healthcare technology grounded in the realities of care delivery" intro="MacroHealthPlus develops practical digital systems for the people responsible for consultations, diagnostics, medicine services, administration, and patient continuity. Our work is shaped by the belief that better software should make complex healthcare operations easier to understand and run.">
        <div className="space-y-8">
          <motion.article
            className="grid items-center gap-6 border-y border-green-400/30 bg-gradient-to-r from-green-500/15 via-green-500/5 to-transparent px-5 py-8 md:grid-cols-[minmax(180px,0.7fr)_minmax(100px,0.35fr)_minmax(0,1.25fr)] md:px-8"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-300">Our purpose</p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Mission</h2>
            </div>
            <div className="flex items-center text-green-300" aria-hidden="true">
              <span className="h-px flex-1 bg-green-400/50" />
              <ArrowRight className="h-7 w-7 shrink-0" />
            </div>
            <p className="text-sm leading-7 text-slate-300 md:text-base">
              To make dependable, clinically informed software accessible to healthcare organizations that need stronger service coordination without placing unnecessary complexity between professionals and their patients.
            </p>
          </motion.article>

          <motion.article
            className="grid items-center gap-6 border-y border-teal-400/30 bg-gradient-to-l from-teal-500/15 via-teal-500/5 to-transparent px-5 py-8 md:grid-cols-[minmax(0,1.25fr)_minmax(100px,0.35fr)_minmax(180px,0.7fr)] md:px-8"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="md:order-3 md:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">Our direction</p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Vision</h2>
            </div>
            <div className="flex items-center text-teal-300 md:order-2" aria-hidden="true">
              <ArrowLeft className="hidden h-7 w-7 shrink-0 md:block" />
              <span className="h-px flex-1 bg-teal-400/50" />
              <ArrowRight className="h-7 w-7 shrink-0 md:hidden" />
            </div>
            <p className="text-sm leading-7 text-slate-300 md:order-1 md:text-base">
              To help healthcare organizations build a more informed, responsive, and sustainable standard of care through digital systems that can evolve with clinical practice and responsible advances in technology.
            </p>
          </motion.article>
        </div>
      </Section>
      <Section eyebrow="Corporate Milestone" title="D-U-N-S Registered">
        <div className="grid items-center gap-10 border-y border-white/15 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-lg">
            <p className="text-lg leading-8 text-white">
              MacroHealthPlus has received its <span className="whitespace-nowrap">D-U-N-S</span> Registered Certificate as part of the company’s continuing corporate development.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              The registration records a consistent business identity for MacroHealthPlus as the company builds professional relationships across healthcare and technology.
            </p>
            <div className="mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-green-300">
              <span className="h-px w-12 bg-green-400/60" />
              Registered business identity
            </div>
          </div>
          <figure className="overflow-hidden rounded-lg">
            <img
              className="aspect-[4/3] w-full object-cover"
              src="/assets/DUNS_Certification/60173d4a-358b-4872-8cf9-206951573a7f.jpeg"
              alt="MacroHealthPlus receiving its D-U-N-S Registered Certificate"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </Section>
      <Section title="Leadership Team">
        <TeamRoster members={leadershipTeam} />
      </Section>
      <Section title="Advisory Members">
        <TeamRoster members={advisoryMembers} />
      </Section>
      <Section title="How we are building toward that vision" intro="Our direction brings clinical practice, organizational operations, and patient access into a shared technology strategy.">
        <ul className="grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
          {businessPlan.map((item) => <li className="border-t border-slate-200 pt-3" key={item}>{item}</li>)}
        </ul>
      </Section>
      <Section title="Who we design for" intro="MacroHealthPlus supports the professionals, organizations, and patients who depend on reliable information moving through healthcare services.">
        <ul className="grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-3">
          {targetMarket.map((item) => <li className="border-t border-slate-200 pt-3" key={item}>{item}</li>)}
        </ul>
      </Section>
    </>
  );
}
