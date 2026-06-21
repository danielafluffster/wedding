import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

function MapPinIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function EventCard({ label, time, venue, address, mapsUrl, notes, directionsLabel }) {
  return (
    <article className="bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-french-blue to-dusty-blue" />
      <div className="p-7 md:p-9">
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold mb-3">{label}</p>
        <h3 className="font-serif text-3xl text-navy mb-5">{venue}</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3 text-gray-600">
            <ClockIcon />
            <span className="font-sans text-sm">{time}</span>
          </div>
          <div className="flex items-start gap-3 text-gray-600">
            <MapPinIcon />
            <span className="font-sans text-sm">{address}</span>
          </div>
        </div>
        {notes && (
          <p className="font-serif italic text-sm text-french-blue mb-6">{notes}</p>
        )}
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-dark text-sm">
          {directionsLabel}
        </a>
      </div>
    </article>
  );
}

export default function EventDetails() {
  const t = useT();
  const headingRef = useScrollAnimation();
  const cardsRef   = useScrollAnimation();

  return (
    <section id="details" className="py-20 md:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-14">
          <h2 className="section-title">{t.details.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{wedding.date}</p>
        </div>

        <div ref={cardsRef} className="reveal grid md:grid-cols-2 gap-6 md:gap-8">
          <EventCard
            label={t.details.ceremony}
            time={wedding.ceremony.time}
            venue={wedding.ceremony.venue}
            address={wedding.ceremony.address}
            mapsUrl={wedding.ceremony.mapsUrl}
            notes={wedding.ceremony.notes}
            directionsLabel={t.details.directions}
          />
          <EventCard
            label={t.details.reception}
            time={wedding.reception.time}
            venue={wedding.reception.venue}
            address={wedding.reception.address}
            mapsUrl={wedding.reception.mapsUrl}
            notes={wedding.reception.notes}
            directionsLabel={t.details.directions}
          />
        </div>

      </div>
    </section>
  );
}
