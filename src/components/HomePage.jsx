import { useState, useEffect } from 'react';
import './HomePage.css';
import Navbar from './Navbar';
import TinderForTools from './Tinderfortools';
import ArtGallery from './ArtGallery';

export default function HomePage() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showLinkaVideo, setShowLinkaVideo] = useState(false);
  const [showWegoVideo, setShowWegoVideo] = useState(false);

  useEffect(() => {
    const homepage = document.querySelector('.homepage');
    const handleScroll = () => setShowTopBtn(homepage.scrollTop > 20);
    homepage.addEventListener('scroll', handleScroll);
    return () => homepage.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const homepageElement = document.querySelector('.homepage');
    homepageElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showAbstract, setShowAbstract] = useState(false);

  // ---------- Upcoming projects + suggestions (persisted locally) ----------
  const STORAGE_KEY = 'anushka_portfolio_suggestions_v1';
  const [suggestions, setSuggestions] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    // seed with a few items
    return [
      { id: crypto.randomUUID(), text: 'MedMind — symptom → doctor questions' },
      { id: crypto.randomUUID(), text: 'Reel It In 2.0 — better streaming sources' },
      { id: crypto.randomUUID(), text: 'Linka — template marketplace' },
    ];
  });
  const [newIdea, setNewIdea] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(suggestions));
    } catch {}
  }, [suggestions]);

  const addSuggestion = () => {
    const t = newIdea.trim();
    if (!t) return;
    setSuggestions(prev => [{ id: crypto.randomUUID(), text: t }, ...prev]);
    setNewIdea('');
  };
  // ------------------------------------------------------------------------

  return (
    <>
      {/* <Navbar /> */}
      <div className="homepage">
        <section className="about" id="about">
          {/* ---------- two-column layout: left photo, right content ---------- */}
          <div className="about-container">
            <div className="about-left">
              {/* Replace /my-photo.jpeg with your actual image path */}
              <img src="/my-photo.jpeg" alt="Anushka" className="profile-pic" />

            </div>

            <div className="about-right">
              <h1>Hi, I'm Anushka</h1>
              <p className="about-blurb">
                A Computer Science grad who loves puzzles, programming, and painting.
                This site is my space to experiment, explore, and turn ideas into products
                that solve real problems. Here you’ll find my work, my skills, and a few passion
                projects I built just for fun.
              </p>

              {/* compact checklist below summary */}
              <div className="about-right-grid">
                <div className="upcoming-wrapper">
                  <h3>📌 Upcoming Projects</h3>
                  <ul className="checklist">
                    {suggestions.map(item => (
                      <li key={item.id} className="checklist-item">
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="suggestion-row">
                    <textarea
                      className="suggestion-box"
                      placeholder="Suggest a feature or project…"
                      value={newIdea}
                      onChange={(e) => setNewIdea(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), addSuggestion())}
                    />
                    <button className="add-btn" onClick={addSuggestion}>Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
        </section>

        <section className="projects" id="projects">
          <h2>Projects</h2>

          {/* Linka */}
          <div className="project-card">
            <div className="preview-container">
              <button onClick={() => setShowLinkaVideo(true)} className="preview-button">
                <img src="/linka-preview.png" alt="Linka Preview" className="preview-image" />
                <div className="play-overlay">
                  <img src="/play-icon.png" alt="Play demo" className="play-icon" />
                </div>
              </button>
              <p>
                JavaScript · Django · Google Drive API · MySQL · Docker
              </p>
              <a
                href="/docs/linka-abstract.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="info-button"
              >
                📄 Details & Documentation
              </a>
            </div>
            <div className="project-info">
              <h3>Linka</h3>
              <p>
                Linka is a full-stack, no-code platform that turns raw CSV, JSON, or XML data into live, interactive dashboards in minutes. Just upload your file, drag and drop charts, tables, filters, and templates, then deploy instantly or download a ready-to-host HTML/JSON package.
                <br /><br />
                Built for a data-heavy world, Linka removes the technical roadblocks so anyone—from
                PMs to educators—can go from data to decisions without slowing down.
              </p>

              <p>
                <p>📦 Deliverables</p>
                Every dashboard is deployable or downloadable as a ready-to-host HTML/JSON package. No extra setup needed.
              </p>
            </div>
          </div>

          {/* WeGo */}
          <div className="project-card">
            <div className="preview-container">
              <button onClick={() => setShowWegoVideo(true)} className="preview-button">
                <img src="/wego-preview.png" alt="WeGo Preview" className="preview-image" />
                <div className="play-overlay">
                  <img src="/play-icon.png" alt="Play demo" className="play-icon" />
                </div>
              </button>
              <p>
                JavaScript · Django · MongoDB · MySQL · Mapbox · Docker · REST APIs
              </p>
              <a
                href="/docs/WeGo-abstract.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="info-button"
              >
                📄 Details & Documentation
              </a>
            </div>
            <div className="project-info">
              <h3>WeGo</h3>
              <p>
                WeGo is a multi-cloud logistics platform designed to manage real-time autonomous
                delivery,from order intake to vehicle routing. Users can assign trips, track vehicles
                live, and generate optimized routes with Mapbox-powered geocoding, all through a
                dispatcher dashboard that connects seamlessly to the backend. With support for live project
                and order management, dynamic trip/vehicle coordination, and full Mapbox route integration, WeGo turns logistics
                into a unified, programmable service layer across supply and demand.
              </p>
            </div>
          </div>

          {/* Reel It In */}
          <div className="project-card">
            <div className="preview-container">
              <a href="https://reel-it-in.onrender.com" target="_blank" rel="noopener noreferrer" className="preview-button">
                <img src="/reelitin-preview.png" alt="Reel it in Preview" className="preview-image" />
              </a>

              <p>
                React · Flask · Together AI · TMDB API
              </p>
            </div>
            <div className="project-info">
              <h3>Reel It In</h3>
              <p>
                An AI-powered movie recommendation tool that turns
                “I’m in the mood for…” into instant, curated picks. Just describe your vibe
                - from “chaotic thriller” to “cozy rom-com” - and get trailers, vibe-based descriptions,
                and personalized suggestions in seconds.
                <br /><br />
                I built it to solve a universal problem: we’re drowning in movie options,
                but none feel right. Instead of sorting by genre or ratings, Reel It In makes discovery
                feel like chatting with a friend who gets you — using AI to translate moods into movies.
              </p>
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <TinderForTools />
        </section>

        <section className="fun" id="fun">
          <h2> 🌸 Funsies 🌸</h2>
          <p>When the laptop closes,
            I’m either making a mess with paint or chasing pretty things
            with my camera. Take a looksie!</p>
          <ArtGallery />
        </section>

        {showTopBtn && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <img src="/uparrow.png" alt="Scroll to top" className="arrow-icon" />
          </button>
        )}

        {/* Linka Video Modal */}
        {showLinkaVideo && (
          <div className="video-overlay" onClick={() => setShowLinkaVideo(false)}>
            <button className="close-button" onClick={() => setShowLinkaVideo(false)}>✕</button>
            <video className="demo-video" controls autoPlay onClick={e => e.stopPropagation()}>
              <source src="/linka-demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* WeGo Video Modal */}
        {showWegoVideo && (
          <div className="video-overlay" onClick={() => setShowWegoVideo(false)}>
            <button className="close-button" onClick={() => setShowWegoVideo(false)}>✕</button>
            <video className="demo-video" controls autoPlay onClick={e => e.stopPropagation()}>
              <source src="/WeGo-Demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </>
  );
}
