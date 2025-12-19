import { useState, useEffect } from 'react';
import './HomePage.css';
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

  return (
    <>
      <div className="homepage">
        <section className="about" id="about" data-testid="about-section">
          <div className="about-container">
            <div className="about-left">
              <img src="/my-photo.jpeg" alt="Anushka" className="profile-pic" />
            </div>

            <div className="about-right">
              <div className="handwritten-intro">Hi, since you're new here—</div>
              <h1>I'm Anushka</h1>
              <p className="about-blurb">
                I'm a full-stack engineer who builds products that solve real problems. 
                I love the intersection of design and engineering—taking an idea from wireframe 
                to deployed product. Whether it's architecting scalable systems or iterating on 
                user flows, I'm all about shipping things that work and feel right.
                <br/><br/>
                My sweet spot? Turning messy, complex problems into clean, intuitive solutions. 
                I think like a PM, build like an engineer, and care deeply about the details.
              </p>
            </div>
          </div>
        </section>

        <section className="projects" id="projects" data-testid="projects-section">
          <h2>Projects</h2>

          {/* Linka */}
          <div className="project-card">
            <div className="preview-container">
              <button onClick={() => setShowLinkaVideo(true)} className="preview-button" data-testid="linka-preview">
                <img src="/linka-preview.png" alt="Linka Preview" className="preview-image" />
                <div className="play-overlay">
                  <img src="/play-icon.png" alt="Play demo" className="play-icon" />
                </div>
              </button>
              <p className="tech-stack">
                JavaScript · Django · Google Drive API · MySQL · Docker
              </p>
              <a
                href="/docs/linka-abstract.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="info-button"
                data-testid="linka-docs"
              >
                📄 Full Documentation
              </a>
            </div>
            <div className="project-info">
              <h3>Linka</h3>
              <p className="project-desc">
                A full-stack no-code platform that transforms raw data (CSV, JSON, XML) into 
                live, interactive dashboards. Drag-and-drop interface for charts, tables, and 
                filters—deploy instantly or download as a ready-to-host package.
              </p>
              <p className="project-impact">
                <strong>The Problem:</strong> Non-technical teams were bottlenecked waiting for 
                engineers to build custom dashboards. Every stakeholder request meant dev cycles.
                <br/><br/>
                <strong>The Solution:</strong> Built a self-service platform with a visual editor, 
                real-time preview, and one-click deployment. Reduced dashboard creation from 
                weeks to minutes.
              </p>
            </div>
          </div>

          {/* WeGo */}
          <div className="project-card">
            <div className="preview-container">
              <button onClick={() => setShowWegoVideo(true)} className="preview-button" data-testid="wego-preview">
                <img src="/wego-preview.png" alt="WeGo Preview" className="preview-image" />
                <div className="play-overlay">
                  <img src="/play-icon.png" alt="Play demo" className="play-icon" />
                </div>
              </button>
              <p className="tech-stack">
                JavaScript · Django · MongoDB · MySQL · Mapbox · Docker · REST APIs
              </p>
              <a
                href="/docs/WeGo-abstract.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="info-button"
                data-testid="wego-docs"
              >
                📄 Full Documentation
              </a>
            </div>
            <div className="project-info">
              <h3>WeGo</h3>
              <p className="project-desc">
                A multi-cloud logistics platform for real-time autonomous delivery management. 
                Handles order intake, vehicle routing, and live tracking through a unified 
                dispatcher dashboard.
              </p>
              <p className="project-impact">
                <strong>Technical Highlights:</strong> Designed the system architecture to handle 
                concurrent vehicle tracking, integrated Mapbox for dynamic route optimization, 
                and built RESTful APIs connecting frontend dispatcher controls to backend logistics 
                orchestration. Scaled to manage multiple delivery projects simultaneously with 
                real-time coordination.
              </p>
            </div>
          </div>

          {/* Reel It In */}
          <div className="project-card">
            <div className="preview-container">
              <a href="https://reel-it-in.onrender.com" target="_blank" rel="noopener noreferrer" className="preview-button" data-testid="reelitin-preview">
                <img src="/reelitin-preview.png" alt="Reel it in Preview" className="preview-image" />
              </a>
              <p className="tech-stack">
                React · Flask · AI (Together AI) · TMDB API
              </p>
            </div>
            <div className="project-info">
              <h3>Reel It In</h3>
              <p className="project-desc">
                An AI-powered movie recommendation tool that matches moods to movies. 
                Describe your vibe—"chaotic thriller" or "cozy rom-com"—and get instant, 
                curated picks with trailers and vibe-based descriptions.
              </p>
              <p className="project-impact">
                <strong>Why I Built This:</strong> Traditional recommendation engines rely on 
                genres and ratings, but that's not how we actually pick movies. I wanted to 
                solve the "I don't know what to watch" problem by making discovery feel 
                conversational—like asking a friend who gets your mood.
              </p>
            </div>
          </div>
        </section>

        <section className="fun" id="fun" data-testid="art-section">
          <h2>When I'm Not Coding</h2>
          <p className="fun-intro">I paint, take photos, and chase pretty things with my camera.</p>
          <ArtGallery />
        </section>

        <section className="contact" id="contact" data-testid="contact-section">
          <div className="contact-container">
            <h2>Let's Connect</h2>
            <p className="contact-subtitle">Always open to interesting opportunities and conversations</p>
            <div className="contact-links">
              <a href="mailto:hn2shya@gmail.com" className="contact-button" data-testid="email-link">
                <span className="contact-icon">✉️</span>
                <span>hn2shya@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/han-nnb" target="_blank" rel="noopener noreferrer" className="contact-button" data-testid="linkedin-link">
                <span className="contact-icon">💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {showTopBtn && (
          <button className="scroll-to-top" onClick={scrollToTop} data-testid="scroll-to-top">
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
