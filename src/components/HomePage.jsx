import { useState, useEffect } from 'react';
import './HomePage.css';
import ArtGallery from './ArtGallery';

export default function HomePage() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showLinkaVideo, setShowLinkaVideo] = useState(false);
  const [showWegoVideo, setShowWegoVideo] = useState(false);

  // default to something that exists in navbar (or '' if you want none active at top)
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    const homepage = document.querySelector('.homepage');
    if (!homepage) return;

    const handleScroll = () => setShowTopBtn(homepage.scrollTop > 20);
    homepage.addEventListener('scroll', handleScroll);

    return () => homepage.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const homepageElement = document.querySelector('.homepage');
    if (!homepageElement) return;
    homepageElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const homepage = document.querySelector('.homepage');
    const section = document.getElementById(sectionId);

    if (section && homepage) {
      const offsetTop = section.offsetTop - 80; // adjust based on navbar height
      homepage.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  return (
    <>
      {/* Navigation Tabs */}
      <div className="nav-tabs" data-testid="nav-tabs">
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
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => scrollToSection('about')}
          data-testid="tab-about"
        >
          About Me
        </button>

        <button
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => scrollToSection('contact')}
          data-testid="tab-contact"
        >
          Contact
        </button>

      </div>

      {/* IMPORTANT: Everything must be inside .homepage so homepage.scrollTo works */}
      <div className="homepage">
        {/* HERO / TOP (not in navbar) */}
        <section className="about" id="top" data-testid="hero-section">
          <div className="hero-wrapper">
            <div className="deco-star deco-star-1">★</div>
            <div className="deco-star deco-star-2">✨</div>
            <div className="deco-heart deco-heart-1">♡</div>
            <div className="deco-arrow deco-arrow-1">→</div>
            <div className="deco-circle deco-circle-1"></div>
            <div className="deco-circle deco-circle-2"></div>

            <div className="handwritten-top">Hi, since you're new here...</div>

            <div className="hero-content">
              <div className="hero-pic-container">
                <div className="pic-sticker pic-sticker-1">Full-stack</div>
                <div className="pic-sticker pic-sticker-2">Product</div>
                <div className="pic-sticker pic-sticker-3">Painter</div>

                <img src="/my-photo.jpeg" alt="Anushka" className="hero-profile-pic" />

                <div className="pic-doodle pic-doodle-1">⭐</div>
                <div className="pic-doodle pic-doodle-2">♡</div>
              </div>

              <div className="name-overlay-container">
                <h1 className="hero-name">ANUSHKA</h1>
                <div className="hero-tagline">Product Engineer</div>
              </div>
            </div>

            <div className="hero-bio">
              <p>
                I turn ideas into real products; coding, designing, and leading end-to-end with empathy as my compass.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects" id="projects" data-testid="projects-section">
          <h2 className="big-bold-text">Projects</h2>

          {/* Linka */}
          <div className="project-card">
            <div className="preview-container">
              <button
                onClick={() => setShowLinkaVideo(true)}
                className="preview-button"
                data-testid="linka-preview"
              >
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
                filters, deploy instantly or download as a ready-to-host package.
              </p>
              <p className="project-impact">
                <strong>The Problem:</strong> Non-technical teams were bottlenecked waiting for
                engineers to build custom dashboards. Every stakeholder request meant dev cycles.
                <br /><br />
                <strong>The Solution:</strong> Built a self-service platform with a visual editor,
                real-time preview, and one-click deployment. Reduced dashboard creation from
                weeks to minutes.
              </p>
            </div>
          </div>

          {/* WeGo */}
          <div className="project-card">
            <div className="preview-container">
              <button
                onClick={() => setShowWegoVideo(true)}
                className="preview-button"
                data-testid="wego-preview"
              >
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
                orchestration.
              </p>
            </div>
          </div>

          {/* Reel It In */}
          <div className="project-card">
            <div className="preview-container">
              <a
                href="https://reel-it-in.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="preview-button"
                data-testid="reelitin-preview"
              >
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

        {/* FUN */}
        <section className="fun" id="fun" data-testid="art-section">
          <h2 className="big-bold-text">When I'm Not Coding</h2>
          <p className="fun-intro">I paint, and chase pretty things with my camera.</p>
          <ArtGallery />
        </section>


        {/* DEEP ABOUT (BOTTOM) */}
<section className="about-deep" id="about" data-testid="about-deep-section">
  <div className="about-deep-container">
    <h2 className="big-bold-text">About Me</h2>

    <div className="about-letter">
      <p>nice to meet you!! i’m anushka.</p>

      <p>
        this site started as a place to show what i’ve built, but over time it became something
        more personal. it’s not just a collection of projects, it’s a snapshot of how i think,
        how i work, and what i care about. that said… yes, this <em>is</em> a portfolio.
        and yes, someone please hire me.
      </p>

      <p>
        i recently graduated with a <strong>B.S. in Computer Science from St. Edward’s University</strong>,
        where i spent a lot of time building full-stack applications, experimenting with ideas,
        and learning what it actually means to take ownership of a product. somewhere along the way,
        i realized that what excites me most isn’t just writing code, it’s understanding the
        problem behind it.
      </p>

      <p>
        i’m a product-minded full-stack engineer. i like working end-to-end: figuring out what to build,
        shaping the experience, writing backend logic, and refining the details until something
        feels clear and usable. i care a lot about clarity, in systems, in user flows,
        and in communication, and i’m always trying to make complex things feel simpler and more human.
      </p>

      <p>
        i didn’t always expect to gravitate toward the intersection of engineering, design,
        and product, but it’s where i’ve felt the most engaged. i enjoy the technical depth
        of building systems just as much as the people side of thinking through users,
        trade-offs, and decisions. that balance is what keeps me curious (and hopefully employable).
      </p>

      <p>
        outside of code, i paint and take photos.
         they remind me to slow down, observe, and build with care.
      </p>

      <p>
        this site is still evolving, and so am i. i’ll keep refining it as i learn more,
        build more, and grow. if anything here resonated with you, a project, a sentence,
        or just the overall vibe,  i’d genuinely love to connect.
      </p>

      <p className="about-signoff">
        thanks for being here.
        <br />
        <span>- anushka</span>
      </p>
    </div>
  </div>
</section>

        {/* CONTACT */}
        <section className="contact" id="contact" data-testid="contact-section">
          <div className="contact-container">
            <h2 className="big-bold-text">Let's Connect</h2>
            <p className="contact-subtitle">Always open to interesting opportunities and conversations</p>

            <div className="contact-links">
              <a href="mailto:anushkasiwakoti03@gmail.com" className="contact-button" data-testid="email-link">
                <span className="contact-icon">✉️</span>
                <span>anushkasiwakoti03@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/anushka-siwakoti"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
                data-testid="linkedin-link"
              >
                <span className="contact-icon">💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* Scroll-to-top */}
        {showTopBtn && (
          <button className="scroll-to-top" onClick={scrollToTop} data-testid="scroll-to-top">
            <img src="/uparrow.png" alt="Scroll to top" className="arrow-icon" />
          </button>
        )}

        {/* Linka Video Modal */}
        {showLinkaVideo && (
          <div className="video-overlay" onClick={() => setShowLinkaVideo(false)}>
            <button className="close-button" onClick={() => setShowLinkaVideo(false)}>✕</button>
            <video className="demo-video" controls autoPlay onClick={(e) => e.stopPropagation()}>
              <source src="/linka-demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* WeGo Video Modal */}
        {showWegoVideo && (
          <div className="video-overlay" onClick={() => setShowWegoVideo(false)}>
            <button className="close-button" onClick={() => setShowWegoVideo(false)}>✕</button>
            <video className="demo-video" controls autoPlay onClick={(e) => e.stopPropagation()}>
              <source src="/WeGo-Demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </>
  );
}
