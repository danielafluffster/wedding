import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-navy py-16 px-5">
      <div className="max-w-2xl mx-auto text-center space-y-6">

        <p className="font-serif text-5xl md:text-6xl text-ivory font-light tracking-wide">
          {wedding.partner1[0]}&nbsp;&amp;&nbsp;{wedding.partner2[0]}
        </p>

        <div className="flex items-center justify-center gap-4" aria-hidden="true">
          <span className="h-px w-12 bg-gold/40" />
          <svg className="w-4 h-4 text-gold/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.4 6.8H21l-5.5 4 2.1 6.6L12 16l-5.6 3.4L8.5 12.8 3 8.8h6.6z" />
          </svg>
          <span className="h-px w-12 bg-gold/40" />
        </div>

        <p className="font-serif italic text-xl text-sky-blue">{wedding.date}</p>

        <p className="font-sans text-sm text-ivory/70 leading-relaxed max-w-md mx-auto">
          {wedding.thankYouNote}
        </p>

        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">{wedding.hashtag}</p>

        <p className="font-sans text-xs text-ivory/40">
          {t.footer.questions}{' '}
          <a
            href={`mailto:${wedding.contactEmail}`}
            className="text-ivory/60 hover:text-ivory transition-colors underline underline-offset-2"
          >
            {wedding.contactEmail}
          </a>
        </p>

        <p className="font-sans text-[10px] text-ivory/25 pt-4">
          © {year} {wedding.partner1} &amp; {wedding.partner2}. {t.footer.madeWith}
        </p>

      </div>
    </footer>
  );
}
