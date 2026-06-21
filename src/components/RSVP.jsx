import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { wedding } from '../config/wedding';
import { useT } from '../hooks/useT';

const INITIAL = {
  name:        '',
  attending:   '',
  plusOne:     '',
  guestCount:  '1',
  meal:        '',
  meal2:       '',
  dietary:     '',
  songRequest: '',
};

export default function RSVP() {
  const t = useT();
  const headingRef = useScrollAnimation();
  const formRef    = useScrollAnimation();

  const [form,   setForm]   = useState(INITIAL);
  const [status, setStatus] = useState('idle');

  const endpoint      = `https://formspree.io/f/${wedding.rsvp.formspreeId}`;
  const isPlaceholder = wedding.rsvp.formspreeId === 'YOUR_FORM_ID';

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isPlaceholder) {
      alert('RSVP is not yet configured. See the README for Formspree setup instructions.');
      return;
    }
    setStatus('submitting');
    try {
      const res  = await fetch(endpoint, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({ ...form, _subject: `Wedding RSVP — ${form.name}` }),
      });
      const data = await res.json();
      setStatus(data.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const inputClass = `w-full font-sans text-sm bg-white border border-cream rounded-sm px-4 py-3
    focus:outline-none focus:border-french-blue focus:ring-1 focus:ring-french-blue/30 transition-colors`;
  const labelClass = `block font-sans text-xs uppercase tracking-widest text-navy/70 mb-1.5`;

  const isAttending = form.attending === t.rsvp.yes;

  return (
    <section id="rsvp" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">

        <div ref={headingRef} className="reveal text-center mb-12">
          <h2 className="section-title">{t.rsvp.heading}</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">{t.rsvp.deadlinePrefix} {wedding.rsvp.deadline}</p>
        </div>

        {status === 'success' && (
          <div className="text-center py-12 px-6 bg-white rounded-sm shadow-sm">
            <p className="font-serif text-3xl text-navy mb-3">{t.rsvp.successHeading}</p>
            <p className="font-sans text-sm text-gray-600">
              {t.rsvp.successBody.replace('{name}', form.name)}
            </p>
          </div>
        )}

        {status !== 'success' && (
          <div ref={formRef} className="reveal">
            {isPlaceholder && (
              <div className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-sm text-sm font-sans text-navy/80">
                <strong>{t.rsvp.setupNote}</strong>{' '}
                <code className="bg-gold/20 px-1 rounded">YOUR_FORM_ID</code>{' '}
                {t.rsvp.setupNote2}{' '}
                <code className="bg-gold/20 px-1 rounded">src/config/wedding.js</code>{' '}
                {t.rsvp.setupNote3}
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-sm shadow-sm p-7 md:p-10 space-y-6">

              {/* Name */}
              <div>
                <label htmlFor="rsvp-name" className={labelClass}>{t.rsvp.nameLabel} *</label>
                <input
                  id="rsvp-name" name="name" type="text" required
                  placeholder={t.rsvp.namePlaceholder}
                  value={form.name} onChange={handleChange}
                  className={inputClass}
                />
              </div>

              {/* Attending */}
              <fieldset>
                <legend className={labelClass}>{t.rsvp.attendingLabel} *</legend>
                <div className="flex gap-6 mt-1">
                  {[t.rsvp.yes, t.rsvp.no].map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio" name="attending" value={opt} required
                        checked={form.attending === opt} onChange={handleChange}
                        className="accent-french-blue w-4 h-4"
                      />
                      <span className="font-sans text-sm text-gray-700">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {isAttending && (
                <>
                  {/* Plus one */}
                  <fieldset>
                    <legend className={labelClass}>{t.rsvp.plusOneLabel}</legend>
                    <p className="font-sans text-xs text-gray-400 mb-2">{t.rsvp.plusOneNote}</p>
                    <div className="flex gap-6 mt-1">
                      {[t.rsvp.plusOneYes, t.rsvp.plusOneNo].map(opt => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio" name="plusOne" value={opt}
                            checked={form.plusOne === opt} onChange={handleChange}
                            className="accent-french-blue w-4 h-4"
                          />
                          <span className="font-sans text-sm text-gray-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {/* Guest count */}
                  <div>
                    <label htmlFor="rsvp-count" className={labelClass}>{t.rsvp.guestCountLabel} *</label>
                    <select
                      id="rsvp-count" name="guestCount"
                      value={form.guestCount} onChange={handleChange}
                      className={inputClass}
                    >
                      {[1, 2].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>

                  {/* Meal — Guest 1 */}
                  <div>
                    <label htmlFor="rsvp-meal" className={labelClass}>
                      {form.guestCount === '2' ? t.rsvp.meal1LabelG1 : t.rsvp.meal1Label} *
                    </label>
                    <select
                      id="rsvp-meal" name="meal" required
                      value={form.meal} onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" disabled>{t.rsvp.mealPlaceholder}</option>
                      {wedding.rsvp.mealChoices.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>

                  {/* Meal — Guest 2 */}
                  {form.guestCount === '2' && (
                    <div>
                      <label htmlFor="rsvp-meal2" className={labelClass}>{t.rsvp.meal2Label} *</label>
                      <select
                        id="rsvp-meal2" name="meal2" required
                        value={form.meal2} onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="" disabled>{t.rsvp.mealPlaceholder}</option>
                        {wedding.rsvp.mealChoices.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>
                  )}

                  {/* Dietary */}
                  <div>
                    <label htmlFor="rsvp-dietary" className={labelClass}>{t.rsvp.dietaryLabel}</label>
                    <input
                      id="rsvp-dietary" name="dietary" type="text"
                      placeholder={t.rsvp.dietaryPH}
                      value={form.dietary} onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  {/* Song */}
                  <div>
                    <label htmlFor="rsvp-song" className={labelClass}>{t.rsvp.songLabel}</label>
                    <input
                      id="rsvp-song" name="songRequest" type="text"
                      placeholder={t.rsvp.songPH}
                      value={form.songRequest} onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </>
              )}

              {status === 'error' && (
                <p className="font-sans text-sm text-red-600">{t.rsvp.errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? t.rsvp.submitting : t.rsvp.submit}
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
