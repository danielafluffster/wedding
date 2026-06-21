import { useState, useEffect } from 'react';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';
import { useLanguage } from '../context/LanguageContext';

export default function Nav() {
  const t = useT();
  const { setLang, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    { href: '#story',       label: t.nav.story },
    { href: '#details',     label: t.nav.details },
    { href: '#schedule',    label: t.nav.schedule },
    { href: '#rsvp',        label: t.nav.rsvp },
    { href: '#travel',      label: t.nav.travel },
    { href: '#registry',    label: t.nav.registry },
    { href: '#gallery',     label: t.nav.gallery },
    { href: '#photo-share', label: t.nav.sharePhotos },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const linkBase  = `font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-300`;
  const linkColor = scrolled ? 'text-navy hover:text-french-blue' : 'text-ivory/90 hover:text-gold';

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? 'bg-ivory/96 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Monogram */}
          <a
            href="#hero"
            aria-label="Back to top"
            className={`font-serif text-xl font-light tracking-wider transition-colors duration-300
              ${scrolled ? 'text-navy' : 'text-ivory'}`}
          >
            {wedding.partner1[0]}&nbsp;&amp;&nbsp;{wedding.partner2[0]}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-5 lg:gap-7 list-none" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className={`${linkBase} ${linkColor}`}>
                  {link.label}
                </a>
              </li>
            ))}
            {/* Language toggle */}
            <li>
              <button
                onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                className={`${linkBase} ${linkColor} border border-current/30 px-2 py-1 rounded-sm`}
                aria-label="Switch language"
              >
                {lang === 'en' ? 'ES' : 'EN'}
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 -mr-2 rounded transition-colors ${scrolled ? 'text-navy' : 'text-ivory'}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-ivory border-t border-cream transition-all duration-300 overflow-hidden
          ${menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col px-6 py-5 gap-5 list-none" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-[11px] uppercase tracking-[0.18em] text-navy hover:text-french-blue transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => { setLang(lang === 'en' ? 'es' : 'en'); setMenuOpen(false); }}
              className="font-sans text-[11px] uppercase tracking-[0.18em] text-navy hover:text-french-blue transition-colors"
            >
              {lang === 'en' ? 'Español' : 'English'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
