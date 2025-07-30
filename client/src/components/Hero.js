import React, { useState, useEffect, useMemo } from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Dynamic text animation with typewriter effect
  const dynamicTexts = useMemo(() => ["I ship fast", "I build at scale", "I deliver quality"], []);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const currentText = dynamicTexts[currentTextIndex];
    let timeoutId;

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100); // Typing speed
      } else {
        // Wait before starting to delete
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Deleting speed
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentTextIndex, dynamicTexts]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-text">
              <div className="hero-greeting">
                <span className="greeting-text">Hi, I'm</span>
                <h1 className="hero-name">
                  <span className="section-title">Uday Savaliya</span>
                </h1>
              </div>

              <div className="hero-dynamic-text">
                <h2 className="hero-tagline">
                  <span className="dynamic-word gradient-text">
                    {displayedText}
                    <span className="typewriter-cursor">|</span>
                  </span>
                </h2>
              </div>

              <p className="hero-description">
                Building scalable web solutions that solve complex problems
                efficiently. Full Stack Developer passionate about modern
                technologies and user experience.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a
                  href="/resume.pdf"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-container">
              <div className="image-carousel">
                <div
                  className={`carousel-item ${
                    currentImageIndex === 0 ? "active" : ""
                  }`}
                >
                  <div className="tech-showcase">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  </div>
                </div>
                <div
                  className={`carousel-item ${
                    currentImageIndex === 1 ? "active" : ""
                  }`}
                >
                  <div className="tech-showcase">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  </div>
                </div>
                <div
                  className={`carousel-item ${
                    currentImageIndex === 2 ? "active" : ""
                  }`}
                >
                  <div className="tech-showcase">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                  </div>
                </div>
                <div
                  className={`carousel-item ${
                    currentImageIndex === 3 ? "active" : ""
                  }`}
                >
                  <div className="tech-showcase">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  </div>
                </div>
                <div
                  className={`carousel-item ${
                    currentImageIndex === 4 ? "active" : ""
                  }`}
                >
                  <div className="tech-showcase">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  </div>
                </div>
                <div
                  className={`carousel-item ${
                    currentImageIndex === 5 ? "active" : ""
                  }`}
                >
                  <div className="tech-showcase">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                  </div>
                </div>
                <div
                  className={`carousel-item ${
                    currentImageIndex === 6 ? "active" : ""
                  }`}
                >
                  <div className="tech-showcase">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  </div>
                </div>
              </div>

              {/* Image indicators */}
              <div className="carousel-indicators">
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      currentImageIndex === index ? "active" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="floating-badges">
              <div className="badge badge-1">Available for Hire!</div>
              <div className="badge badge-2">Available for Projects!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
