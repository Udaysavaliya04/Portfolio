import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#portfolio-showcase" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-left">
          <a href="#home" className="nav-link">
            Home
          </a>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
            </div>
        </div>

        <div className="nav-socials">
          <a href="https://github.com/Udaysavaliya04" target="_blank" rel="noopener noreferrer" className="nav-link">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/uday-savaliya-b30bb7286" target="_blank" rel="noopener noreferrer" className="nav-link">
            <Linkedin size={20} />
          </a>
          <a href="mailto:udaysavaliya2004@gmail.com" className="nav-link">
            <Mail size={20} />
          </a>
        </div>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
