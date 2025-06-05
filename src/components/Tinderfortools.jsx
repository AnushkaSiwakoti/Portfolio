import { useState, useEffect, useRef } from 'react';
import './TinderForTools.css';

const tools = [
  { name: '⚛️ React', description: 'Frontend library used in Linka and WeGo for dynamic interfaces.' },
  { name: '🦄 Django', description: 'Backend framework for Linka and WeGo projects.' },
  { name: '🐳 Docker', description: 'Used to containerize Linka for deployment.' },
  { name: '🐬 MySQL', description: 'Database management for Linka dashboard data.' },
  { name: '🍃 MongoDB', description: 'Used in WeGo for handling flexible logistics data.' },
  { name: '📁 Google Drive API', description: 'Integrated into Linka for user file uploads.' },
  { name: '📬 Postman', description: 'Used for API testing during NEON internship, Linka, and WeGo.' },
  { name: '🎭 Playwright', description: 'Testing automation tool used for QA in WeGo.' },
  { name: '🐍 Python', description: 'Used in backend development.' },
  { name: '🟨 JavaScript', description: 'Main scripting language across projects.' },
  { name: '☕ Java', description: 'Experience in academic settings and fundamentals.' },
  { name: '📊 R', description: 'Used in NEON internship for data transformation.' },
  { name: '🚀 CI/CD', description: 'Set up for automated deployment pipelines.' },
  { name: '🌱 Git', description: 'Version control used across all projects with collaborative teams.' },
  { name: '📈 Agile/Scrum', description: 'Practiced throughout Linka, WeGo, and NEON internship.' },
  { name: '🏗️ System Architecture', description: 'Designed project structure and API flow for Linka and WeGo.' },
  { name: '📋 Project Management', description: 'Led sprints, planning, and mentoring in WeGo and Linka.' },
  { name: '🌐 DigitalOcean', description: 'Used for deploying Linka and WeGo with custom Docker setups.' },
  { name: '🗺️ Mapbox', description: 'Integrated into WeGo for dynamic vehicle routing and location mapping.' },
  { name: '🎯 Render', description: 'Used to deploy the personal portfolio site with React and Vite.' }
];

export default function TinderForTools() {
  const [index, setIndex] = useState(0);
  const [isFast, setIsFast] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startSlide = () => {
    stopSlide(); // clear any previous
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % tools.length);
      setIsFast(false);
    }, 1600);
  };

  const stopSlide = () => clearInterval(intervalRef.current);

  const handleDotClick = (i) => {
    stopSlide();
    clearTimeout(timeoutRef.current);
    setIsFast(true);
    setIndex(i);
    timeoutRef.current = setTimeout(() => {
      setIsFast(false);
      startSlide();
    }, 4000); // resume auto after 4s
  };

  useEffect(() => {
    return () => {
      stopSlide();
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="tinder-tools">
      <h2>🛠️ Tool Belt</h2>
      <div
        className="card-container"
        onMouseEnter={startSlide}
        onMouseLeave={stopSlide}
      >
        <div className={`card slide ${isFast ? 'slide-fast' : ''}`}>
          <h3>{tools[index].name}</h3>
          <p>{tools[index].description}</p>
          <div className="dots">
            {tools.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
