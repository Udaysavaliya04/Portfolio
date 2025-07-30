import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioShowcase from './components/PortfolioShowcase';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="App loaded">
        <main>
          <Hero />
          <Skills />
          <PortfolioShowcase />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
