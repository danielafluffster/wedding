import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useT } from '../hooks/useT';

export default function ThingsToDo() {
  const t = useT();
  const headingRef = useScrollAnimation();
  const listRef    = useScrollAnimation(0.05);

  return (
    <section id="things-to-do" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-14">
          <h2 className="section-title">{t.thingsToDo.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.thingsToDo.subtitle}</p>
        </div>

        <div ref={listRef} className="reveal-stagger space-y-12">
          {t.thingsToDo.categories.map((cat, ci) => (
            <div key={ci}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
                <h3 className="font-serif text-2xl text-navy">{cat.category}</h3>
                <span className="flex-1 h-px bg-cream" aria-hidden="true" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.items.map((item, ii) => (
                  <article key={ii} className="card group">
                    <h4 className="font-serif text-lg text-navy group-hover:text-french-blue transition-colors mb-2">
                      {item.name}
                    </h4>
                    <p className="font-sans text-xs uppercase tracking-widest text-gold/80 mb-3">
                      {item.address}
                    </p>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
