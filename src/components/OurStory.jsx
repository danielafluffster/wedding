import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

const Dot = () => (
  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#C9A96E', border: '2px solid #FAF7F2', flexShrink: 0, marginTop: 4 }} />
);

function TimelineItem({ year, label, detail, image, index }) {
  const isLeft = index % 2 === 0;

  return (
    <>
      {/* ── MOBILE layout (single column, dot + line on left) ── */}
      <div className="flex items-start md:hidden" style={{ gap: 16 }}>
        <div style={{ flexShrink: 0, width: 24, display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
          <Dot />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="font-sans text-gold mb-1" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{year}</p>
          <h3 className="font-serif text-navy mb-1" style={{ fontSize: '1.2rem' }}>{label}</h3>
          <p className="font-sans text-gray-600" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{detail}</p>
          {image && (
            <div style={{ marginTop: 12, borderRadius: 2, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', aspectRatio: '4/3', maxWidth: 260 }}>
              <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
            </div>
          )}
        </div>
      </div>

      {/* ── DESKTOP layout (alternating left/right) ── */}
      <div className={`hidden md:flex items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-1 px-8 ${isLeft ? 'text-right' : 'text-left'}`}>
          <p className="font-sans text-[11px] uppercase tracking-widest text-gold mb-1">{year}</p>
          <h3 className="font-serif text-xl text-navy mb-1">{label}</h3>
          <p className="font-sans text-sm text-gray-600 leading-relaxed">{detail}</p>
          {image && (
            <div className={`mt-3 rounded-sm overflow-hidden shadow-md ${isLeft ? 'ml-auto' : ''}`}
                 style={{ aspectRatio: '4/3', maxWidth: 280 }}>
              <img src={image} alt={label} className="w-full h-full object-cover" loading="lazy" />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center flex-shrink-0 w-14">
          <Dot />
        </div>
        <div className="flex-1" />
      </div>
    </>
  );
}

export default function OurStory() {
  const t = useT();
  const headingRef  = useScrollAnimation();
  const storyRef    = useScrollAnimation();
  const timelineRef = useScrollAnimation(0.05);

  return (
    <section id="story" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-14">
          <h2 className="section-title">{t.story.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.story.subtitle}</p>
        </div>

        <div ref={storyRef} className="reveal mb-14 space-y-5">
          <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed text-center">
            {t.story.intro}
          </p>
          <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed text-center">
            {t.story.body}
          </p>
          {t.story.adventures && (
            <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed text-center">
              {t.story.adventures}
            </p>
          )}

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <img src="/images/buddy-holly.jpg" alt="Buddy Holly, Lubbock TX" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-square rounded-sm overflow-hidden bg-gradient-to-br from-french-blue to-navy flex items-end">
              <p className="font-sans text-xs text-ivory/60 p-3 text-center w-full">{t.story.photoLabel}</p>
            </div>
          </div>

          <blockquote className="border-l-2 border-gold pl-5 mt-8 font-serif italic text-lg text-french-blue text-left">
            {t.story.proposal}
          </blockquote>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="reveal relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-sky-blue -translate-x-1/2" aria-hidden="true" />
          <div className="md:hidden absolute top-0 bottom-0 w-px bg-sky-blue" style={{ left: 11 }} aria-hidden="true" />

          <div className="space-y-10 md:space-y-12">
            {t.timeline.map((item, i) => (
              <TimelineItem
                key={i}
                {...item}
                image={wedding.storyTimeline[i]?.image ?? null}
                index={i}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
