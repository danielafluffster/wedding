import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border-b border-cream last:border-0">
      <button
        id={`${id}-btn`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
      >
        <span className="font-serif text-lg text-navy group-hover:text-french-blue transition-colors leading-snug">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-french-blue/30 flex items-center
            justify-center text-french-blue transition-transform duration-300 mt-0.5
            ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="font-sans text-sm text-gray-600 leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const t = useT();
  const headingRef = useScrollAnimation();
  const listRef    = useScrollAnimation(0.05);

  return (
    <section id="faq" className="py-20 md:py-28 bg-cream">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-12">
          <h2 className="section-title">{t.faq.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.faq.subtitle}</p>
        </div>

        <div ref={listRef} className="reveal bg-white rounded-sm shadow-sm px-6 md:px-8">
          {t.faq.items.map((faq, i) => (
            <FAQItem key={i} index={i} q={faq.q} a={faq.a} />
          ))}
        </div>

        <p className="font-sans text-sm text-gray-500 text-center mt-8">
          {t.faq.contact}{' '}
          <a
            href={`mailto:${wedding.contactEmail}`}
            className="text-french-blue underline underline-offset-2 hover:text-navy transition-colors"
          >
            {t.faq.emailUs}
          </a>
        </p>

      </div>
    </section>
  );
}
