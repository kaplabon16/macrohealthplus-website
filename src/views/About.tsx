'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
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

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageClassName: string;
  biography: string[];
};

const leadershipTeam: TeamMember[] = [
  {
    id: 'aminur-rahman',
    name: 'Dr. Aminur Rahman',
    role: 'Managing Director & CEO',
    image: '/assets/about_us/team_white/aminur-rahman.webp',
    imageClassName: 'object-center',
    biography: [
      'Dr. Md Aminur Rahman is the CEO of MacroHealthPlus Software, a cutting-edge technology company in the healthcare sector. He is a highly experienced and accomplished professional with a background in medicine and a passion for using technology to improve healthcare outcomes.',
      'With over a decade of experience in the healthcare industry, Dr. Rahman has a deep understanding of the challenges faced by healthcare providers and patients alike. He has leveraged this knowledge to develop innovative software solutions that streamline processes and improve patient outcomes.',
      "Under Dr. Rahman's leadership, MacroHealthPlus Software has become a leading provider of healthcare technology, with a strong focus on developing solutions that integrate seamlessly with existing systems and processes. The company has earned a reputation for delivering high-quality, reliable software that makes a real difference in the lives of healthcare providers and patients.",
      'Dr. Rahman is a visionary leader who is always looking for new and innovative ways to improve healthcare outcomes through technology. He is a strong advocate for the power of technology to make a positive impact in the world and is dedicated to using his expertise to help make this a reality.',
      'With his passion, drive, and commitment to excellence, Dr. Md Aminur Rahman is a leader who is poised to make a lasting impact on the healthcare industry.',
    ],
  },
  {
    id: 'mohsina-nazneen-bhuiyan',
    name: 'Dr. Mohsina Nazneen Bhuiyan',
    role: 'Director',
    image: '/assets/about_us/team_white/mohsina-nazneen-bhuiyan.webp',
    imageClassName: 'object-center',
    biography: [
      'Dr. Mohsina Bhuiyan is the Director of MacroHealthPlus Software, a healthcare technology company that develops innovative software solutions to improve patient care and streamline healthcare services. Dr. Bhuiyan is a highly skilled and experienced healthcare professional who has dedicated her career to improving healthcare access and quality for patients. She has extensive experience in healthcare management and software development and is known for her leadership and vision in the industry.',
      'Dr. Bhuiyan holds a medical degree and has completed postgraduate training in healthcare. Her interest in information technology was shaped by her family background. Her late father, Mr. Muzaffar Ali Bhuiyan, was a pioneer of IT in Bangladesh. His work included establishing early commercial IT systems at Adamjee Jute Mills and the Bank of East Pakistan, now Bangladesh Bank, and helping establish IBM in Bangladesh.',
      'She has worked in a variety of healthcare settings, including hospitals and clinics in Australia, and is the current CEO of Complete Vision Optometrist. Her expertise in healthcare management has contributed to the development of the software and its use by other medical professionals. Her knowledge has greatly benefited the company.',
      'As Director of MacroHealthPlus Software, Dr. Bhuiyan is responsible for overseeing the development and implementation of software solutions that enhance patient care, increase efficiency, and reduce healthcare costs. She works closely with healthcare providers and industry experts to identify areas where technology can improve healthcare services, collaborating with the team to create innovative solutions that meet the needs of others.',
      "Dr. Bhuiyan's commitment to improving healthcare access and quality has earned her a reputation as a visionary in the industry. She is highly respected by her colleagues and is known for her dedication, expertise, and innovative approach to healthcare technology.",
    ],
  },
];

const advisoryMembers: TeamMember[] = [
  {
    id: 'nick-ebbeck',
    name: 'Nick Ebbeck',
    role: 'Advisor',
    image: '/assets/about_us/team_white/nick-ebbeck.webp',
    imageClassName: 'object-center',
    biography: [
      'Nick is an experienced CEO with over 30 years of corporate experience. He has global experience, particularly in the Australian and New Zealand markets, driving growth in the technology industry.',
      'He previously held senior roles at Harvey Norman, JB Hi-Fi, and Vodafone, where he was responsible for global enterprise sales across Australia and New Zealand. Nick also served as Mayor of his local community, where his collegiate approach provided substantial benefits to the community.',
      'Nick firmly believes in placing the customer first and at the centre of every decision he makes. He brings this methodology to his advisory work to help ensure that customers receive what they expect.',
    ],
  },
  {
    id: 'muhammad-sajedur-rahman',
    name: 'Dr Muhammad Sajedur Rahman',
    role: 'Advisor',
    image: '/assets/about_us/team_white/muhammad-sajedur-rahman.webp',
    imageClassName: 'object-center',
    biography: [
      'Sajed possesses over four decades of experience and versatile knowledge across diverse areas, ranging from academia and applied research in scientific and engineering fields to international business development and marketing management consultancy.',
      'Born in Bangladesh, Sajed had an outstanding academic career, with meritorious results in his secondary and higher-secondary final examinations, a master’s degree in Nuclear Physics from Government College, now University, Lahore, Pakistan, and a PhD in Solid State Physics from Imperial College of Science, Technology, Management and Medicine, University of London, UK, in 1976. He studied under a British Commonwealth Fellowship and Scholarship Programme.',
      'Sajed held teaching and research positions at universities and colleges in Bangladesh, the United Kingdom, Malaysia, and Australia. He was a Senior Research Scientist in the Textile Technology and Applied Physics Divisions of CSIRO Australia. He also held senior positions in the Planning Division of Sydney Water before joining an international business development and marketing management consultancy as Executive Director.',
      'Sajed has over two decades of hands-on experience providing strategic business development advisory services to numerous Australian and overseas business organizations. As an Associate of the Asia Pacific Research Institute at Macquarie University, he provided education and training services in strategic business planning and business re-engineering to several large state-owned enterprises from the People’s Republic of China and Vietnam.',
      'He has presented numerous scholarly papers at business seminars and chaired strategic business seminars at the Australian Institute of Management. Sajed firmly believes in placing customers first and providing fit-for-purpose, high-quality services that support their strategic, sustainable development and growth needs.',
    ],
  },
];

function TeamRoster({ members, onSelect }: { members: TeamMember[]; onSelect: (member: TeamMember) => void }) {
  return (
    <motion.div
      className="grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-9 lg:gap-x-8 lg:gap-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
    >
      {members.map((member) => (
        <motion.button
          className="group text-left"
          key={member.name}
          type="button"
          aria-haspopup="dialog"
          aria-label={`Read profile for ${member.name}`}
          onClick={() => onSelect(member)}
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
        >
          <motion.div className="aspect-[4/3] overflow-hidden rounded-lg bg-white" layoutId={`team-portrait-${member.id}`}>
            <img
              className={`h-full w-full object-cover transition duration-300 group-hover:scale-[1.025] ${member.imageClassName}`}
              src={member.image}
              alt={member.name}
              loading="lazy"
            />
          </motion.div>
          <div className="mt-3 border-t border-white/15 pt-3 sm:mt-4 lg:mt-5 lg:pt-4">
            <h2 className="text-sm font-semibold leading-5 text-white sm:text-lg lg:text-xl">{member.name}</h2>
            <p className="mt-1 text-sm text-slate-300">{member.role}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#01D439] opacity-80 transition group-hover:opacity-100">
              Read profile <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}

function TeamProfileDialog({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  return (
    <motion.div
      className="team-profile-dialog fixed inset-0 z-[100] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`team-profile-${member.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button className="team-profile-close fixed right-4 top-4 z-[102] grid h-11 w-11 place-items-center rounded-full sm:right-7 sm:top-7" type="button" onClick={onClose} aria-label="Close profile" autoFocus>
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="mx-auto grid min-h-svh max-w-[110rem] lg:grid-cols-[minmax(22rem,0.85fr)_minmax(0,1.15fr)]">
        <motion.div className="team-profile-portrait min-h-[22rem] overflow-hidden bg-white sm:min-h-[32rem] lg:sticky lg:top-0 lg:h-svh" layoutId={`team-portrait-${member.id}`}>
          <img className={`h-full w-full object-cover ${member.imageClassName}`} src={member.image} alt={member.name} />
        </motion.div>

        <motion.article
          className="flex min-h-svh flex-col justify-center px-5 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#01D439]">MacroHealthPlus Leadership</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[0.98] text-white sm:text-5xl lg:text-6xl" id={`team-profile-${member.id}`}>{member.name}</h2>
          <p className="mt-4 text-base font-semibold text-[#01D439] sm:text-lg">{member.role}</p>

          <div className="mt-9 max-w-3xl border-t border-white/15 sm:mt-12">
            {member.biography.map((paragraph, index) => (
              <p className={`${index === 0 ? 'text-base font-medium text-white sm:text-lg' : 'text-sm text-slate-300 sm:text-base'} border-b border-white/10 py-5 leading-7 sm:py-6 sm:leading-8`} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    setPageMeta('Who We Are', 'MacroHealthPlus mission, vision, team, business plan, and target market.');
  }, []);

  useEffect(() => {
    if (!selectedMember) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedMember(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedMember]);

  return (
    <>
      <Section className="pt-24 sm:pt-28 lg:pt-32" eyebrow="About MacroHealthPlus" title="Healthcare technology grounded in the realities of care delivery" intro="MacroHealthPlus develops practical digital systems for the people responsible for consultations, diagnostics, medicine services, administration, and patient continuity. Our work is shaped by the belief that better software should make complex healthcare operations easier to understand and run.">
        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
          <motion.article
            className="grid items-center gap-3 border-y border-[#01D439]/30 bg-gradient-to-r from-[#01D439]/15 via-[#01D439]/5 to-transparent px-4 py-5 md:grid-cols-[minmax(150px,0.7fr)_minmax(70px,0.25fr)_minmax(0,1.25fr)] md:gap-5 md:px-6 md:py-6 lg:px-8 lg:py-8"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#01D439]">Our purpose</p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">Mission</h2>
            </div>
            <div className="flex items-center text-[#01D439]" aria-hidden="true">
              <span className="h-px flex-1 bg-[#01D439]/50" />
              <ArrowRight className="h-7 w-7 shrink-0" />
            </div>
            <p className="text-sm leading-7 text-slate-300 md:text-base">
              To make dependable, clinically informed software accessible to healthcare organizations that need stronger service coordination without placing unnecessary complexity between professionals and their patients.
            </p>
          </motion.article>

          <motion.article
            className="grid items-center gap-3 border-y border-teal-400/30 bg-gradient-to-l from-teal-500/15 via-teal-500/5 to-transparent px-4 py-5 md:grid-cols-[minmax(0,1.25fr)_minmax(70px,0.25fr)_minmax(150px,0.7fr)] md:gap-5 md:px-6 md:py-6 lg:px-8 lg:py-8"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
        <div className="grid items-center gap-5 border-y border-white/15 py-5 sm:grid-cols-[0.8fr_1.2fr] sm:gap-7 sm:py-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-10">
          <div className="max-w-lg">
            <p className="text-sm leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              MacroHealthPlus has received its <span className="whitespace-nowrap">D-U-N-S</span> Registered Certificate as part of the company’s continuing corporate development.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 lg:mt-5 lg:leading-7">
              The registration records a consistent business identity for MacroHealthPlus as the company builds professional relationships across healthcare and technology.
            </p>
            <div className="mt-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#01D439] sm:mt-6 lg:mt-8 lg:gap-4 lg:text-xs lg:tracking-[0.22em]">
              <span className="h-px w-12 bg-[#01D439]/60" />
              Registered business identity
            </div>
          </div>
          <figure className="overflow-hidden rounded-lg">
            <img
              className="aspect-[4/3] w-full object-cover"
              src="/assets/DUNS_Certification/60173d4a-358b-4872-8cf9-206951573a7f.webp"
              alt="MacroHealthPlus receiving its D-U-N-S Registered Certificate"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </Section>
      <Section title="Leadership Team">
        <TeamRoster members={leadershipTeam} onSelect={setSelectedMember} />
      </Section>
      <Section title="Advisory Members">
        <TeamRoster members={advisoryMembers} onSelect={setSelectedMember} />
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
      {typeof document !== 'undefined' ? createPortal(
        <AnimatePresence>
          {selectedMember ? <TeamProfileDialog member={selectedMember} onClose={() => setSelectedMember(null)} /> : null}
        </AnimatePresence>,
        document.body,
      ) : null}
    </>
  );
}
