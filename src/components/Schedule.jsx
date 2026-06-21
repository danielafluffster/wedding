import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useT } from '../hooks/useT';

export default function Schedule() {
  const t = useT();
  const headingRef = useScrollAnimation();
  const listRef    = useScrollAnimation(0.05);

  return (
    <section id="schedule" className="py-20 md:py-28 bg-cream">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-14">
          <h2 className="section-title text-navy">{t.schedule.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle text-french-blue">{t.schedule.subtitle}</p>
        </div>

        <ol ref={listRef} className="reveal-stagger relative space-y-0" aria-label={t.schedule.heading}>
          <div className="absolute left-[72px] sm:left-[88px] top-2 bottom-2 w-px bg-french-blue/20" aria-hidden="true" />

          {t.schedule.events.map((item, i) => (
            <li key={i} className="flex gap-5 sm:gap-8 pb-9 last:pb-0">
              <div className="w-16 sm:w-20 flex-shrink-0 text-right">
                <span className="font-sans text-xs text-gold leading-tight">{item.time}</span>
              </div>
              <div className="relative flex-shrink-0 mt-0.5">
                <div className={`w-3 h-3 rounded-full border-2
                  ${i === 0 ? 'bg-gold border-gold' : 'bg-cream border-french-blue/40'}`}
                />
              </div>
              <div className="flex-1 pb-2">
                <p className="font-serif text-lg text-navy leading-tight">{item.event}</p>
                {item.detail && (
                  <p className="font-sans text-sm text-gray-500 mt-1 leading-relaxed">{item.detail}</p>
                )}
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}
