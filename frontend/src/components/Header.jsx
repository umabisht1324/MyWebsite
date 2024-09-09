import React from 'react';

function Header({ setActiveSection }) {
  return (
    <nav className="w-full bg-blueGreeny text-white py-6 flex justify-center space-x-8 md:space-x-6 transition-all duration-300">
      <button 
        onClick={() => setActiveSection('Home')} 
        className="text-xl font-bold hover:text-teenyGreeny transition duration-300"
      >
        Home
      </button>
      <button 
        onClick={() => setActiveSection('Projects')} 
        className="text-xl font-bold hover:text-teenyGreeny transition duration-300"
      >
        Projects
      </button>
      <button 
        onClick={() => setActiveSection('Education')} 
        className="text-xl font-bold hover:text-teenyGreeny transition duration-300"
      >
        Education
      </button>
      <button 
        onClick={() => setActiveSection('Skills')} 
        className="text-xl font-bold hover:text-teenyGreeny transition duration-300"
      >
        Skills
      </button>
      <button 
        onClick={() => setActiveSection('Achievements')} 
        className="text-xl font-bold hover:text-teenyGreeny transition duration-300"
      >
        Achievements
      </button>
      <button 
        onClick={() => setActiveSection('Contact')} 
        className="text-xl font-bold hover:text-teenyGreeny transition duration-300"
      >
        Contact
      </button>
    </nav>
  );
}

export default Header;
