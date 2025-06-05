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


  return (
    <>
      <Navbar />
      <div className="homepage">
        <section className="about" id="about">
          <h1>Hi, I'm Anushka</h1>
          <p>
            I'm a Computer Science grad who loves puzzles, programming, and painting.
            This site is my little space to explore, experiment, and solve cool problems through code. Scroll through my work, my skills,
            and a few fun things I made for joy.
          </p>
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
              Linka is a full-stack platform for creating interactive dashboards, no code needed. 
              Upload CSV, JSON, or XML files, then drag and drop charts, tables, filters, and 
              templates to build and deploy in minutes. Designed for developers, PMs, analysts, 
              and educators, Linka streamlines the entire workflow: upload, design, deploy.
              </p>
              

              <p>
              <p>📦 Deliverables</p>
              Every dashboard is deployable or downloadable as a ready-to-host HTML/JSON package. No extra setup needed.</p>
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
