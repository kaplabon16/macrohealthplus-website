import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div className="rounded-3xl border border-white/12 bg-white/[0.04]" key={faq.question}>
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white"
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {faq.question}
            <ChevronDown className={`h-4 w-4 transition ${open === index ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
          {open === index ? <p className="px-5 pb-5 text-sm leading-6 text-slate-300">{faq.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
