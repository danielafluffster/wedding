import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

function TimelineItem({ year, label, detail, image, index }) {
  const isLeft = index % 2 === 0;

  const Dot = ({ mobile }) => image ? (
    <div className={`rounded-full overflow-hidden ring-2 ring-gold/50 shadow-md flex-shrink-0
      ${mobile ? 'w-8 h-8 mt-0.5' : 'w-11 h-11'}`}>
      <img src={image} alt={label} className="w-full h-full object-cover" />
    </div>
  ) : (
    <div className={`rounded-full bg-gold border-2 border-ivory shadow-sm flex-shrink-0
      ${mobile ? 'w-2.5 h-2.5 mt-1.5' : 'w-3 h-3 mt-1'}`} />
  );

  return (
    <div className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className={`flex-1 md:px-8 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <p className="font-sans text-[11px] uppercase tracking-widest text-gold mb-1">{year}</p>
        <h3 className="font-serif text-xl text-navy mb-1">{label}</h3>
        <p className="font-sans text-sm text-gray-600 leading-relaxed">{detail}</p>
      </div>

      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-14">
        <Dot mobile={false} />
      </div>

      <div className="md:hidden flex-shrink-0 flex flex-col items-center">
        <Dot mobile={true} />
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
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
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
              <img src="/images/buddy-holly.jpg" alt="Buddy Holly, Lubbock TX" className="w-full h-full object-cover" />
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-gradient-to-br from-french-blue to-navy flex items-end">
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
          <div className="md:hidden absolute left-1 top-0 bottom-0 w-px bg-sky-blue" aria-hidden="true" />

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
