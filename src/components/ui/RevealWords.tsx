import { motion, useReducedMotion } from 'framer-motion';

type RevealWordsProps = {
  text: string;
  className?: string;
};

export default function RevealWords({ text, className = '' }: RevealWordsProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <p className={className}>{text}</p>;
  }

  return (
    <motion.p className={className} initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.035, delayChildren: 0.35 } } }}>
      {words.map((word, index) => (
        <motion.span
          className="inline-block"
          key={`${word}-${index}`}
          variants={{
            hidden: { opacity: 0.001, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {word}
          {index < words.length - 1 ? '\u00a0' : ''}
        </motion.span>
      ))}
    </motion.p>
  );
}
