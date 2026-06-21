import { useEffect, lazy, Suspense } from 'react';
import { useLanguage } from './context/LanguageContext';
import LanguagePicker from './components/LanguagePicker';
import Nav from './components/Nav';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';

const Travel     = lazy(() => import('./components/Travel'));
const ThingsToDo = lazy(() => import('./components/ThingsToDo'));
const Registry   = lazy(() => import('./components/Registry'));
const DressCode  = lazy(() => import('./components/DressCode'));
const FAQ        = lazy(() => import('./components/FAQ'));
const Gallery    = lazy(() => import('./components/Gallery'));
const PhotoShare = lazy(() => import('./components/PhotoShare'));
const Footer     = lazy(() => import('./components/Footer'));

function dismissLoader() {
  const el = document.getElementById('loading-screen');
  if (!el) return;
  el.classList.add('out');
  setTimeout(() => el.remove(), 400);
}

export default function App() {
  const { lang } = useLanguage();

  useEffect(() => { dismissLoader(); }, []);

  if (!lang) return <LanguagePicker />;

  return (
    <>
      {/* Skip-to-content link for keyboard/screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200]
                   focus:bg-ivory focus:px-4 focus:py-2 focus:text-navy focus:outline-gold"
      >
        Skip to main content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <OurStory />
        <EventDetails />
        <Schedule />
        <RSVP />
        <Suspense fallback={null}>
          <Travel />
          <ThingsToDo />
          <Registry />
          <DressCode />
          <FAQ />
          <Gallery />
          <PhotoShare />
        </Suspense>
      </main>

      <Suspense fallback={null}><Footer /></Suspense>
    </>
  );
}
