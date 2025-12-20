import { useState, useEffect } from 'react';
import './HomePage.css';
import ArtGallery from './ArtGallery';

export default function HomePage() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showLinkaVideo, setShowLinkaVideo] = useState(false);
  const [showWegoVideo, setShowWegoVideo] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const homepage = document.querySelector('.homepage');
    if (section && homepage) {
      const offsetTop = section.offsetTop - 80;
      homepage.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setActiveTab(sectionId);
  };

  return (
    <>
      {/* Navigation Tabs */}
      <div className="nav-tabs" data-testid="nav-tabs">
        <button 
          className={activeTab === 'about' ? 'active' : ''} 
          onClick={() => scrollToSection('about')}
          data-testid="tab-about"
        >
          About Me
        </button>
        <button 
          className={activeTab === 'projects' ? 'active' : ''} 
          onClick={() => scrollToSection('projects')}
          data-testid="tab-projects"
        >
          Projects
        </button>
        <button 
          className={activeTab === 'fun' ? 'active' : ''} 
          onClick={() => scrollToSection('fun')}
          data-testid="tab-art"
        >
          Art & Photos
        </button>
        <button 
          className={activeTab === 'contact' ? 'active' : ''} 
          onClick={() => scrollToSection('contact')}
          data-testid="tab-contact"
        >
          Contact
        </button>
      </div>

      <div className="homepage">
        <section className="about" id="about" data-testid="about-section">
          <div className="hero-wrapper">
            {/* Decorative elements */}
            <div className="deco-star deco-star-1">★</div>
            <div className="deco-star deco-star-2">✨</div>
            <div className="deco-heart deco-heart-1">♡</div>
            <div className="deco-arrow deco-arrow-1">→</div>
            <div className="deco-circle deco-circle-1"></div>
            <div className="deco-circle deco-circle-2"></div>
            
            {/* Handwritten intro - top */}
            <div className="handwritten-top">Hi, since you're new here—</div>
            
            {/* Main content container */}
            <div className="hero-content">
              {/* Large profile picture with frame */}
              <div className="hero-pic-container">
                <div className="pic-sticker pic-sticker-1">Full-stack</div>
                <div className="pic-sticker pic-sticker-2">SWE</div>
                <img src="/my-photo.jpeg" alt="Anushka" className="hero-profile-pic" />
                <div className="pic-doodle pic-doodle-1">⭐</div>
                <div className="pic-doodle pic-doodle-2">♡</div>
              </div>
              
              {/* Big name overlay */}
              <div className="name-overlay-container">
                <h1 className="hero-name">ANUSHKA</h1>
                <div className="hero-tagline">Product Engineer</div>
              </div>
            </div>
            
            {/* Bio box */}
            <div className="hero-bio">
              <p>
                I'm a full-stack engineer who builds products that solve real problems. 
                I love the intersection of design and engineering—taking an idea from wireframe 
                to deployed product. Whether it's architecting scalable systems or iterating on 
                user flows, I'm all about shipping things that work and feel right.
              </p>
              <p className="bio-highlight">
                My sweet spot? Turning messy, complex problems into clean, intuitive solutions. 
                I think like a PM, build like an engineer, and care deeply about the details.
              </p>
            </div>
            
            {/* Fun facts/tags */}
            <div className="hero-tags">
              <span className="hero-tag">React</span>
              <span className="hero-tag">Python</span>
              <span className="hero-tag">System Design</span>
              <span className="hero-tag">Product Thinking</span>
            </div>
          </div>
        </section>

        <section className="projects" id="projects" data-testid="projects-section">
          <h2 className="big-bold-text">Projects</h2>

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
          <h2 className="big-bold-text">When I'm Not Coding</h2>
          <p className="fun-intro">I paint, take photos, and chase pretty things with my camera.</p>
          <ArtGallery />
        </section>

        <section className="contact" id="contact" data-testid="contact-section">
          <div className="contact-container">
            <h2 className="big-bold-text">Let's Connect</h2>
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
