import React from 'react';
import profileImage from '../static/pic.png'; // Ensure this path is correct
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Home() {
  return (
    <section id="home" className="bg-[#ebf6f5] min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-6">
        {/* Profile Image */}
        <img 
          src={profileImage} 
          alt="Profile" 
          className="w-64 h-64 rounded-full mx-auto border-4 border-blueGreeny mb-6 transition-transform duration-700 transform scale-110"
          style={{ animation: 'fadeIn 1s ease-out' }}
        />

        {/* Heading */}
        <h1 className="text-6xl font-bold text-blueGreeny opacity-1 animate-fadeIn">
          Welcome to My Portfolio
        </h1>

        {/* Subheading */}
        <p className="text-2xl text-blueGreeny opacity-1 animate-fadeIn delay-200">
        Hi, I'm Uma. I blend innovation and expertise to deliver impactful results across diverse projects.</p>


        {/* Call-to-Action */}
        <a 
          href="#contact" 
          className="mt-8 inline-block px-8 py-4 bg-blueGreeny text-white font-semibold rounded-lg shadow-lg hover:bg-blueGreeny-dark transition duration-300 transform hover:scale-105"
          style={{ animation: 'fadeIn 1s ease-out 0.2s' }}
        >
          Get in Touch
        </a>
      </div>

      {/* Footer with Social Media Links */}
      <footer id="contact" className="mt-12 flex justify-center space-x-6 pb-4">
        <a href="https://www.linkedin.com/in/umabisht" target="_blank" rel="noopener noreferrer" className="text-blueGreeny hover:text-blueGreeny-dark transition transform hover:scale-110 duration-300">
          <FaLinkedin size={36} />
        </a>
        <a href="https://github.com/umabisht1324" target="_blank" rel="noopener noreferrer" className="text-blueGreeny hover:text-blueGreeny-dark transition transform hover:scale-110 duration-300">
          <FaGithub size={36} />
        </a>
        <a href="https://twitter.com/umabisht" target="_blank" rel="noopener noreferrer" className="text-blueGreeny hover:text-blueGreeny-dark transition transform hover:scale-110 duration-300">
          <FaTwitter size={36} />
        </a>
      </footer>


      

    </section>
  );
}

export default Home;
