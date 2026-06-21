import { useState, useRef, useCallback } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

function uploadToCloudinary(file, { cloudName, uploadPreset, folder }, onProgress) {
  return new Promise((resolve, reject) => {
    const body = new FormData();
    body.append('file', file);
    body.append('upload_preset', uploadPreset);
    body.append('folder', folder);
    body.append('tags', 'wedding,guest_upload');

    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', e => {
      if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 90));
    });
    xhr.addEventListener('load', () => {
      try {
        const data = JSON.parse(xhr.responseText);
        data.secure_url ? resolve(data.secure_url) : reject(new Error(data.error?.message || 'Upload failed'));
      } catch { reject(new Error('Unexpected response')); }
    });
    xhr.addEventListener('error', () => reject(new Error('Network error')));
    xhr.open('POST', `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`);
    xhr.send(body);
  });
}

function CameraIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg className="w-14 h-14 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function PhotoShare() {
  const t = useT();
  const { photoShare, hashtag } = wedding;
  if (!photoShare?.enabled) return null;

  const headingRef = useScrollAnimation();
  const bodyRef    = useScrollAnimation();
  const inputRef   = useRef(null);

  const [phase,      setPhase]      = useState('idle');
  const [progress,   setProgress]   = useState(0);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [errorMsg,   setErrorMsg]   = useState('');
  const [photoCount, setPhotoCount] = useState(0);

  const isConfigured = photoShare.cloudName !== 'YOUR_CLOUD_NAME';

  const setPreview = useCallback((file) => {
    if (previewSrc) URL.revokeObjectURL(previewSrc);
    setPreviewSrc(file ? URL.createObjectURL(file) : null);
  }, [previewSrc]);

  async function handleCapture(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(file);
    setPhase('uploading');
    setProgress(0);
    try {
      await uploadToCloudinary(file, photoShare, pct => setProgress(pct));
      setProgress(100);
      setPhotoCount(c => c + 1);
      setPhase('success');
    } catch (err) {
      setErrorMsg(err.message || 'Upload failed. Please try again.');
      setPhase('error');
    } finally {
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  function reset() {
    setPhase('idle');
    setProgress(0);
    setErrorMsg('');
    if (previewSrc) { URL.revokeObjectURL(previewSrc); setPreviewSrc(null); }
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <section id="photo-share" className="py-20 md:py-28 bg-navy">
      <div className="max-w-lg mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-french-blue/20 mb-6">
            <CameraIcon />
          </div>
          <h2 className="section-title text-ivory">{t.photoShare.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle text-sky-blue">{t.photoShare.subtitle}</p>
        </div>

        <div ref={bodyRef} className="reveal">
          <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden">

            <input
              ref={inputRef} type="file" accept="image/*" capture="environment"
              onChange={handleCapture} className="hidden"
              aria-label={t.photoShare.openCamera}
            />

            {phase === 'idle' && (
              <div className="p-8 md:p-10 text-center space-y-8">
                <p className="font-sans text-base text-ivory/80 leading-relaxed">
                  {t.photoShare.blurb}
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-[11px] font-sans uppercase tracking-widest">
                  {[t.photoShare.badge1, t.photoShare.badge2, t.photoShare.badge3].map(badge => (
                    <span key={badge} className="px-3 py-1 bg-french-blue/20 text-sky-blue rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
                {isConfigured ? (
                  <button
                    onClick={() => inputRef.current?.click()}
                    className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4
                               font-sans text-sm uppercase tracking-widest
                               hover:bg-gold-light transition-colors duration-300
                               focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  >
                    <CameraIcon className="w-5 h-5" />
                    {t.photoShare.openCamera}
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-3 border border-white/20 text-ivory/30
                                    px-8 py-4 font-sans text-sm uppercase tracking-widest cursor-not-allowed">
                      <CameraIcon className="w-5 h-5" />
                      {t.photoShare.notConfigured}
                    </div>
                    <p className="font-sans text-xs text-ivory/30">
                      {t.photoShare.addCredentials}{' '}
                      <code className="bg-white/10 px-1 py-0.5 rounded">src/config/wedding.js</code>
                    </p>
                  </div>
                )}
                <p className="font-sans text-xs text-ivory/30">{t.photoShare.privacy}</p>
              </div>
            )}

            {phase === 'uploading' && (
              <div className="p-8 md:p-10 space-y-6">
                {previewSrc && (
                  <div className="rounded-sm overflow-hidden bg-navy/40">
                    <img src={previewSrc} alt="Your photo preview" className="w-full max-h-64 object-cover" />
                  </div>
                )}
                <div className="space-y-3 text-center">
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden"
                    role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                    <div className="h-full bg-gold rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="font-sans text-sm text-ivory/60">{t.photoShare.uploading} {progress}%</p>
                </div>
              </div>
            )}

            {phase === 'success' && (
              <div className="p-8 md:p-10 space-y-6 text-center">
                {previewSrc && (
                  <div className="rounded-sm overflow-hidden ring-2 ring-gold/40">
                    <img src={previewSrc} alt="Your uploaded photo" className="w-full max-h-64 object-cover" />
                  </div>
                )}
                <div className="flex justify-center"><CheckCircleIcon /></div>
                <div className="space-y-1">
                  <p className="font-serif text-2xl text-ivory">{t.photoShare.received}</p>
                  <p className="font-sans text-sm text-sky-blue">
                    {photoCount === 1
                      ? t.photoShare.thankYou1
                      : `${photoCount} ${t.photoShare.thankYouN}`}
                  </p>
                </div>
                <button onClick={reset}
                  className="inline-flex items-center gap-2 border border-white/20 text-ivory
                             px-6 py-3 font-sans text-xs uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                  <CameraIcon className="w-4 h-4" />
                  {t.photoShare.takeAnother}
                </button>
              </div>
            )}

            {phase === 'error' && (
              <div className="p-8 md:p-10 space-y-5 text-center">
                {previewSrc && (
                  <div className="rounded-sm overflow-hidden opacity-50">
                    <img src={previewSrc} alt="Photo that failed to upload" className="w-full max-h-48 object-cover" />
                  </div>
                )}
                <p className="font-sans text-sm text-red-400">{errorMsg}</p>
                <button onClick={reset}
                  className="border border-white/20 text-ivory px-6 py-3 font-sans text-xs
                             uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
                  {t.photoShare.tryAgain}
                </button>
              </div>
            )}

          </div>

          <p className="font-sans text-xs text-gold/50 text-center mt-6">
            {t.photoShare.socialTag}{' '}
            <span className="text-gold/80 font-medium">{hashtag}</span>
          </p>
        </div>

      </div>
    </section>
  );
}
