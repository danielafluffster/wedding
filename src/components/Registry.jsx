import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

function GiftCard({ icon, name, description, buttonText, buttonUrl, isLink }) {
  const inner = (
    <>
      <span className="text-4xl mb-1" aria-hidden="true">{icon}</span>
      <h3 className="font-serif text-xl text-navy group-hover:text-french-blue transition-colors">{name}</h3>
      <p className="font-sans text-sm text-gray-500 leading-relaxed">{description}</p>
      <span className="mt-auto font-sans text-xs uppercase tracking-widest text-french-blue border-b border-french-blue/40 pb-0.5 group-hover:border-french-blue transition-colors">
        {buttonText}
      </span>
    </>
  );

  const shared = 'card group flex flex-col items-center text-center gap-3 h-full';

  return isLink ? (
    <a href={buttonUrl} target="_blank" rel="noopener noreferrer"
      className={`${shared} hover:border hover:border-french-blue/20`}
      aria-label={name}>
      {inner}
    </a>
  ) : (
    <div className={shared}>{inner}</div>
  );
}

export default function Registry() {
  const t = useT();
  const headingRef = useScrollAnimation();
  const gridRef    = useScrollAnimation(0.05);

  const { registry } = wedding;

  // Desired order: Honeyfund, Cookware (Williams Sonoma), then the other two
  const cookware = registry.registries.find(r => r.name === 'Williams Sonoma') ?? registry.registries[1];
  const others   = registry.registries.filter(r => r.name !== 'Williams Sonoma');

  const cards = [
    {
      icon:        '✈️',
      name:        registry.honeyfund.label,
      description: registry.honeyfund.description,
      buttonText:  `${t.registry.contribute} ${registry.honeyfund.platform}`,
      buttonUrl:   registry.honeyfund.url,
      isLink:      false,
    },
    {
      icon:        cookware.icon,
      name:        cookware.name,
      description: cookware.description,
      buttonText:  t.registry.viewRegistry,
      buttonUrl:   cookware.url,
      isLink:      true,
    },
    ...others.map(r => ({
      icon:        r.icon,
      name:        r.name,
      description: r.description,
      buttonText:  t.registry.viewRegistry,
      buttonUrl:   r.url,
      isLink:      true,
    })),
  ];

  return (
    <section id="registry" className="py-20 md:py-28 bg-cream">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-10">
          <h2 className="section-title">{t.registry.heading}</h2>
          <div className="gold-divider" />
          <p className="font-sans text-base text-gray-600 max-w-xl mx-auto leading-relaxed mt-5">
            {t.registry.message}
          </p>
        </div>

        <div ref={gridRef} className="reveal-stagger grid grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <GiftCard key={i} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
