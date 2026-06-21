import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

function HotelCard({ hotel, t }) {
  return (
    <article className="card">
      <div className="flex justify-between items-start gap-2 mb-3">
        <h3 className="font-serif text-xl text-navy">{hotel.name}</h3>
        {hotel.code && (
          <span className="flex-shrink-0 font-sans text-[10px] uppercase tracking-widest bg-sky-blue/30 text-navy px-2 py-1 rounded-sm">
            {t.travel.blockCode}
          </span>
        )}
      </div>
      <p className="font-sans text-xs text-french-blue mb-3 uppercase tracking-widest">{hotel.distance}</p>
      <div className="space-y-1.5 mb-5 font-sans text-sm text-gray-700">
        <p>{hotel.rate}</p>
        <p>📞 {hotel.phone}</p>
        {hotel.code && (
          <p className="font-medium">{t.travel.useCode} <span className="font-mono bg-cream px-1.5 py-0.5 rounded text-navy">{hotel.code}</span></p>
        )}
      </div>
      <a href={hotel.bookingLink} target="_blank" rel="noopener noreferrer" className="btn-outline-dark text-xs">
        {t.travel.bookNow}
      </a>
    </article>
  );
}

function InfoBlock({ icon, title, children }) {
  return (
    <div className="bg-white rounded-sm shadow-sm p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xl" aria-hidden="true">{icon}</span>
        <h3 className="font-serif text-lg text-navy">{title}</h3>
      </div>
      <div className="font-sans text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Travel() {
  const t = useT();
  const headingRef = useScrollAnimation();
  const hotelsRef  = useScrollAnimation(0.05);
  const infoRef    = useScrollAnimation(0.05);

  return (
    <section id="travel" className="py-20 md:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-14">
          <h2 className="section-title">{t.travel.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.travel.subtitle}</p>
        </div>

        <h3 className="font-serif text-2xl text-navy mb-6">{t.travel.whereToStay}</h3>
        <div ref={hotelsRef} className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {wedding.hotels.map((h, i) => <HotelCard key={i} hotel={h} t={t} />)}
        </div>

        <div ref={infoRef} className="reveal-stagger grid sm:grid-cols-2 gap-5">

          <InfoBlock icon="✈️" title={t.travel.airports}>
            <ul className="space-y-2">
              {wedding.airports.map((a, i) => (
                <li key={i}>
                  <span className="font-medium">{a.name}</span>
                  <span className="text-gray-500"> — {a.distance}</span>
                </li>
              ))}
            </ul>
          </InfoBlock>

          <InfoBlock icon="🚗" title={t.travel.parking}>
            <p>{wedding.parking}</p>
          </InfoBlock>

          <InfoBlock icon="🚕" title={t.travel.transport}>
            <p>{wedding.transportation}</p>
          </InfoBlock>

          <InfoBlock icon="💡" title={t.travel.proTip}>
            <p>{t.travel.proTipText}</p>
          </InfoBlock>

        </div>
      </div>
    </section>
  );
}
