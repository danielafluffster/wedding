import { useCountdown } from '../hooks/useCountdown';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

function CountUnit({ value, label }) {
  return (
    <div className="text-center">
      <span className="block font-serif text-4xl md:text-5xl text-navy font-light tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="block font-sans text-[10px] uppercase tracking-[0.25em] text-french-blue/60 mt-1.5">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const t = useT();
  const { days, hours, minutes, seconds, done } = useCountdown(wedding.dateISO);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-ivory to-sky-blue/25" />
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-sky-blue/20 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[400px] rounded-full bg-gold/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-dusty-blue/8 blur-[140px]" />
      </div>

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto animate-fade-in">

        <p className="font-sans text-[11px] uppercase tracking-[0.45em] text-french-blue mb-8">
          {t.hero.preheading}
        </p>

        <div className="flex items-center justify-center gap-3 mb-10" aria-hidden="true">
          <span className="h-px w-16 bg-gold/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
          <span className="h-px w-16 bg-gold/50" />
        </div>

        <h1 className="font-serif font-light leading-[0.92] tracking-wide text-navy
                       text-6xl sm:text-7xl md:text-8xl lg:text-[7rem]">
          {wedding.partner1}
          <span className="block font-serif italic font-light text-french-blue
                           text-4xl sm:text-5xl md:text-6xl my-3 md:my-4">
            &amp;
          </span>
          {wedding.partner2}
        </h1>

        <p className="font-serif italic text-xl md:text-2xl text-french-blue mt-7 mb-10 tracking-wide">
          {wedding.dateTBD ? t.hero.dateTBD : wedding.date}
        </p>

        {wedding.dateTBD ? (
          <div className="mb-10 py-5 border-t border-b border-gold/20">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-french-blue/50 mb-2">
              {t.hero.dateTBD}
            </p>
            <p className="font-serif italic text-french-blue/60 text-base">
              {t.hero.dateTBDNote}
            </p>
          </div>
        ) : done ? (
          <p className="font-serif italic text-2xl text-gold mb-10">{t.hero.married}</p>
        ) : (
          <div className="mb-10">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-french-blue/50 mb-6">
              {t.hero.countingDown}
            </p>
            <div className="grid grid-cols-4 gap-4 sm:gap-8 max-w-xs sm:max-w-sm mx-auto">
              <CountUnit value={days}    label={t.hero.days}  />
              <CountUnit value={hours}   label={t.hero.hours} />
              <CountUnit value={minutes} label={t.hero.min}   />
              <CountUnit value={seconds} label={t.hero.sec}   />
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#rsvp"
            className="inline-block px-10 py-3.5 bg-navy text-ivory font-sans text-xs
                       uppercase tracking-widest hover:bg-french-blue transition-colors duration-300">
            {t.hero.rsvpBtn}
          </a>
          <a href="#story"
            className="inline-block px-10 py-3.5 border border-navy text-navy font-sans text-xs
                       uppercase tracking-widest hover:bg-navy hover:text-ivory transition-colors duration-300">
            {t.hero.storyBtn}
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float" aria-hidden="true">
        <span className="w-px h-10 bg-navy/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-navy/25" />
      </div>
    </section>
  );
}
