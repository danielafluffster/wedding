import { useLanguage } from '../context/LanguageContext';
import { wedding } from '../config/wedding';

export default function LanguagePicker() {
  const { setLang } = useLanguage();

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-ivory px-6">

      {/* Background blooms */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sky-blue/20 blur-[100px]" />
        <div className="absolute -bottom-16 -left-16 w-[400px] h-[350px] rounded-full bg-gold/10 blur-[90px]" />
      </div>

      <div className="relative text-center max-w-sm w-full">

        {/* Monogram */}
        <p className="font-serif text-5xl text-navy font-light tracking-widest mb-2">
          {wedding.partner1[0]}&nbsp;&amp;&nbsp;{wedding.partner2[0]}
        </p>

        {/* Gold rule */}
        <div className="flex items-center justify-center gap-3 my-6" aria-hidden="true">
          <span className="h-px w-12 bg-gold/50" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold/70" />
          <span className="h-px w-12 bg-gold/50" />
        </div>

        {/* Bilingual prompt */}
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-french-blue mb-1">
          Please select your language
        </p>
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-french-blue mb-10">
          Por favor selecciona tu idioma
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setLang('en')}
            className="flex-1 px-10 py-4 bg-navy text-ivory font-sans text-xs uppercase
                       tracking-widest hover:bg-french-blue transition-colors duration-300
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            English
          </button>
          <button
            onClick={() => setLang('es')}
            className="flex-1 px-10 py-4 border border-navy text-navy font-sans text-xs uppercase
                       tracking-widest hover:bg-navy hover:text-ivory transition-colors duration-300
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            Español
          </button>
        </div>

      </div>
    </div>
  );
}
