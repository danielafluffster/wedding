import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport the CSS class "visible" is added,
 * which triggers the .reveal or .reveal-stagger animation defined in index.css.
 *
 * @param {number} threshold - 0–1, how much of the element must be visible. Default 0.12.
 */
export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el); // fire once — stays visible after trigger
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
