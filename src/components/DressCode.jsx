import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useT } from '../hooks/useT';

const COLOR_HEXES = ['#8BA7C4', '#A8B9A0', '#C4AA96', '#E8C4B8', '#C4A0B0', '#C97B5A', '#3B5BA5'];

export default function DressCode() {
  const t = useT();
  const headingRef = useScrollAnimation();
  const bodyRef    = useScrollAnimation();

  const { dressCode } = t;

  return (
    <section id="dress-code" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-12">
          <h2 className="section-title">{dressCode.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{dressCode.title}</p>
        </div>

        <div ref={bodyRef} className="reveal space-y-10">

          <p className="font-sans text-base text-gray-700 leading-relaxed text-center">
            {dressCode.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-sm shadow-sm p-6">
              <h3 className="font-serif text-lg text-navy mb-4 flex items-center gap-2">
                <span className="text-green-500 text-xl" aria-hidden="true">✓</span>
                {dressCode.doWearHeading.replace('✓ ', '')}
              </h3>
              <ul className="space-y-2">
                {dressCode.doWear.map((item, i) => (
                  <li key={i} className="font-sans text-sm text-gray-700 flex gap-2">
                    <span className="text-gold mt-0.5" aria-hidden="true">·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-sm shadow-sm p-6">
              <h3 className="font-serif text-lg text-navy mb-4 flex items-center gap-2">
                <span className="text-red-400 text-xl" aria-hidden="true">✕</span>
                {dressCode.avoidHeading.replace('✕ ', '')}
              </h3>
              <ul className="space-y-2">
                {dressCode.avoid.map((item, i) => (
                  <li key={i} className="font-sans text-sm text-gray-700 flex gap-2">
                    <span className="text-gray-300 mt-0.5" aria-hidden="true">·</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-navy text-center mb-5">{dressCode.colorsHeading}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {COLOR_HEXES.map((hex, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className="w-10 h-10 rounded-full shadow-sm ring-1 ring-black/5"
                    style={{ backgroundColor: hex }}
                    aria-label={dressCode.colorNames[i]}
                  />
                  <span className="font-sans text-[10px] text-gray-500 tracking-wide">
                    {dressCode.colorNames[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-sans text-sm text-gray-600 leading-relaxed bg-cream rounded-sm p-5">
            {dressCode.colorNote}
          </p>

          {dressCode.notes && (
            <p className="font-serif italic text-french-blue text-sm text-center">
              💡 {dressCode.notes}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}
