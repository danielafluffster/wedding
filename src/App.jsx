import { useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import LanguagePicker from './components/LanguagePicker';
import Nav from './components/Nav';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import Schedule from './components/Schedule';
import RSVP from './components/RSVP';
import Travel from './components/Travel';
import ThingsToDo from './components/ThingsToDo';
import Registry from './components/Registry';
import DressCode from './components/DressCode';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import PhotoShare from './components/PhotoShare';
import Footer from './components/Footer';

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
        <Travel />
        <ThingsToDo />
        <Registry />
        <DressCode />
        <FAQ />
        <Gallery />
        <PhotoShare />
      </main>

      <Footer />
    </>
  );
}
