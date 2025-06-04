import { useState, useEffect } from 'react';
import './HomePage.css';
import Navbar from './Navbar';

export default function HomePage() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Navbar />
      <div className="homepage">
        <section className="about" id="about">
          <h1>Hi, I'm Anushka </h1>
          <p>
            I'm a Computer Science grad who loves puzzles, programming, and painting.
            This site is my little space to explore, experiment, and solve cool problems through code, scroll through my work, my skills,
            and a few fun things I made for joy.
          </p>
        </section>

        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-card">
                <div className="preview-container">
                <a href="/linka-demo" target="_blank" rel="noopener noreferrer">
                    <img src="/linka-preview.png" alt="Linka Dashboard Preview" className="preview-image" />
                </a>
                </div>
                <div className="project-info">
                <h3>Linka</h3>
                <p>
                A self-service dashboard builder that lets users visualize data with zero coding. Built with Django, React, MySQL, 
                and Docker, Linka supports drag-and-drop components, 
                Google Drive file uploads, and exportable dashboards.
                </p>
                </div>
            </div>
            </section>


        <section className="skills" id="skills">
        <h2>Skills</h2>
          
          <ul>
            <li>React</li>
            <li>Django</li>
            <li>Docker</li>
            <li>MySQL</li>
            <li>AWS</li>
          </ul>
        </section>

        <section className="fun" id="fun">
          <h2>🎨 Just for Fun</h2>
          <p>When I’m not coding, I love to draw. Here are a few of my pieces!</p>
          <div className="art-gallery">
            <img src="/drawings/art1.jpg" alt="Drawing 1" />
          </div>
        </section>

        {showTopBtn && (
          <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
        )}
      </div>
    </>
  );
}
