// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
// import Certifications from './components/Certifications';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'Education':
        return <Education />;
      case 'Skills':
        return <Skills />;
      case 'Achievements':
        return <Achievements />;
      case 'Contact':
        return <Contact />;
      // case 'Certifications':
      //   return <Certifications />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <main className="content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
