import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

function avatarHue(name) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return 200 + (h % 40);
}

function PersonCard({ person, bio }) {
  const initials = person.name.split(' ').map(p => p[0]).slice(0, 2).join('');
  const hue = avatarHue(person.name);

  return (
    <article className="flex flex-col items-center text-center group">
      <div
        className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 shadow-md
                   ring-2 ring-french-blue/10 group-hover:ring-gold/40 transition-all duration-300"
        aria-hidden={!!person.photo}
      >
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-serif text-3xl text-white font-light"
            style={{ backgroundColor: `hsl(${hue}, 35%, 55%)` }}
            aria-label={person.name}
          >
            {initials}
          </div>
        )}
      </div>
      <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-1">{person.role}</p>
      <h3 className="font-serif text-xl text-navy mb-2">{person.name}</h3>
      <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-[200px]">{bio}</p>
    </article>
  );
}

export default function WeddingParty() {
  const t = useT();
  const headingRef     = useScrollAnimation();
  const bridesmaidsRef = useScrollAnimation(0.05);
  const groomsmenRef   = useScrollAnimation(0.05);

  return (
    <section id="wedding-party" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-16">
          <h2 className="section-title text-navy">{t.weddingParty.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle text-french-blue">{t.weddingParty.subtitle}</p>
        </div>

        <div className="mb-16">
          <h3 className="font-serif text-2xl text-navy/60 text-center mb-10 italic font-light">
            {t.weddingParty.bridesmaids}
          </h3>
          <div ref={bridesmaidsRef} className="reveal-stagger grid grid-cols-2 md:grid-cols-3 gap-10">
            {wedding.bridesmaids.map((p, i) => (
              <PersonCard key={i} person={p} bio={t.weddingParty.bios.bridesmaids[i] ?? p.bio} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-navy/60 text-center mb-10 italic font-light">
            {t.weddingParty.groomsmen}
          </h3>
          <div ref={groomsmenRef} className="reveal-stagger grid grid-cols-2 md:grid-cols-3 gap-10">
            {wedding.groomsmen.map((p, i) => (
              <PersonCard key={i} person={p} bio={t.weddingParty.bios.groomsmen[i] ?? p.bio} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
