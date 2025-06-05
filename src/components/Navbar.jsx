import { useEffect, useState } from 'react';
import './HomePage.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'funsies'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Anushka Logo" className="logo-img" />
      </div>
      <div className="navbar-links">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#fun">Funsies</a>
  </div>
    </div>
  );
}
