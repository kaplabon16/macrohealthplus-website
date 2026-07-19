import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t border-white/15">
      {faqs.map((faq, index) => (
        <div className="border-b border-white/15" key={faq.question}>
          <button
            className="group flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-white transition duration-200 hover:text-green-300"
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {faq.question}
            <ChevronDown className={`h-4 w-4 transition duration-200 ${open === index ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          <AnimatePresence initial={false}>
            {open === index ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="max-w-3xl pb-5 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
