import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

const PLACEHOLDER_GRADIENTS = [
  'from-navy to-french-blue', 'from-french-blue to-dusty-blue', 'from-dusty-blue to-sky-blue',
  'from-navy to-dusty-blue',  'from-french-blue to-navy',        'from-sky-blue to-french-blue',
  'from-dusty-blue to-navy',  'from-french-blue to-sky-blue',    'from-navy to-sky-blue',
];

function GalleryItem({ src, alt, ratio, index, onOpen, addPhotoLabel }) {
  const grad = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];

  return (
    <button
      className="group relative overflow-hidden rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300 focus-visible:outline-gold"
      style={{ aspectRatio: ratio }}
      onClick={() => onOpen(index)}
      aria-label={`View photo: ${alt}`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${grad} flex items-end`}>
          <p className="font-sans text-[11px] text-ivory/50 p-3 leading-tight w-full text-center">
            {alt}<br /><span className="text-[10px] opacity-70">{addPhotoLabel}</span>
          </p>
        </div>
      )}
      <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
    </button>
  );
}

function Lightbox({ photos, currentIndex, onClose, onPrev, onNext }) {
  const photo = photos[currentIndex];
  if (!photo.src) return null;

  return (
    <div
      role="dialog" aria-modal="true" aria-label="Photo lightbox"
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} className="w-full rounded-sm max-h-[80vh] object-contain" />
        <p className="font-sans text-sm text-ivory/70 text-center mt-3">{photo.alt}</p>
        <button onClick={onClose} aria-label="Close lightbox"
          className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/10 text-ivory flex items-center justify-center hover:bg-white/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        {currentIndex > 0 && (
          <button onClick={onPrev} aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 text-ivory flex items-center justify-center hover:bg-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
        )}
        {currentIndex < photos.length - 1 && (
          <button onClick={onNext} aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 text-ivory flex items-center justify-center hover:bg-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default function Gallery() {
  const t = useT();
  const headingRef = useScrollAnimation();
  const gridRef    = useScrollAnimation(0.05);
  const [lightbox, setLightbox] = useState(null);

  function openLightbox(i)  { if (wedding.gallery[i].src) setLightbox(i); }
  function closeLightbox()  { setLightbox(null); }
  function prevPhoto()      { setLightbox(i => Math.max(0, i - 1)); }
  function nextPhoto()      { setLightbox(i => Math.min(wedding.gallery.length - 1, i + 1)); }

  return (
    <section id="gallery" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-14">
          <h2 className="section-title">{t.gallery.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.gallery.subtitle}</p>
        </div>

        <div ref={gridRef} className="reveal grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {wedding.gallery.map((photo, i) => (
            <GalleryItem
              key={i} {...photo} index={i}
              onOpen={openLightbox}
              addPhotoLabel={t.gallery.addPhoto}
            />
          ))}
        </div>

        <p className="font-sans text-sm text-gray-500 text-center mt-10">
          {t.gallery.sharePrompt}{' '}
          <span className="font-medium text-french-blue">{wedding.hashtag}</span>
        </p>

      </div>

      {lightbox !== null && (
        <Lightbox
          photos={wedding.gallery}
          currentIndex={lightbox}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  );
}
