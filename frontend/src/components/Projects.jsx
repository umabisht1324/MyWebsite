import React, { useState } from 'react';

import LungCancer from '../static/lung-cancer.png';
import HandWritten from '../static/hand-written.png';
import PDF from '../static/pdf.png';
import Linkedin from '../static/Linkedin.png';
import Twitter from '../static/twitter.png';
import Hospital from '../static/hospital.png';

// Define the projects with domains
const projectData = [
  // { domain: 'Automation', title: 'LinkedIn Automation', image: TaskImage, link: 'https://github.com/umabisht1324' },
  { domain: 'Automation', title: 'LinkedIn Automation', image: Linkedin, link: 'https://github.com/umabisht1324' },
  { domain: 'Data Analyst', title: 'Twitter Data Dashboard', image: Twitter, link: 'https://github.com/umabisht1324' },
  { domain: 'ML', title: 'Lungs Cancer Prediction', image: LungCancer, link: 'https://github.com/umabisht1324' },
  { domain: 'ML', title: 'Hand Written Digit Recognization', image: HandWritten, link: 'https://github.com/umabisht1324' },
  { domain: 'Generative AI', title: 'PDF Summarizer', image: PDF, link: 'https://github.com/umabisht1324' },
  { domain: 'DBMS', title: 'Hospital Management System', image: Hospital, link: 'https://github.com/umabisht1324' },
  // { domain: 'Web', title: 'E-Commerce Website', image: ECommerceImage, link: 'https://github.com/umabisht1324' },
];

function Projects() {
  const [selectedDomain, setSelectedDomain] = useState('All');

  // Filter projects based on the selected domain
  const filteredProjects = selectedDomain === 'All'
    ? projectData
    : projectData.filter(project => project.domain === selectedDomain);

  return (
    <section id="projects" className="py-12 bg-teenyGreeny">
      <div className="max-w26xl mx-auto px-5 flex gap-38  ">
        {/* Sidebar */}
        <aside className="w-1/4 pr-5">
          <h3 className="text-xl font-bold mb-5 text-blueGreeny">Domains</h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => setSelectedDomain('All')}
                className={`w-full font-bold text-left p-2 ${selectedDomain === 'All' ? 'bg-blueGreeny text-white' : 'text-blueGreeny'} hover:bg-blueGreeny  hover:text-white transition duration-300`}
              >
                All Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedDomain('Automation')}
                className={`w-full font-bold text-left p-2 ${selectedDomain === 'Automation' ? 'bg-blueGreeny text-white' : 'text-blueGreeny'} hover:bg-blueGreeny  hover:text-white transition duration-300`}
              >
                Automation
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedDomain('Data Analyst')}
                className={`w-full font-bold text-left p-2 ${selectedDomain === 'Data Analyst' ? 'bg-blueGreeny text-white' : 'text-blueGreeny'} hover:bg-blueGreeny  hover:text-white transition duration-300`}
              >
                Data Analyst
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedDomain('Generative AI')}
                className={`w-full font-bold text-left p-2 ${selectedDomain === 'Generative AI' ? 'bg-blueGreeny text-white' : 'text-blueGreeny'} hover:bg-blueGreeny  hover:text-white transition duration-300`}
              >
                Generative AI
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedDomain('ML')}
                className={`w-full font-bold text-left p-2 ${selectedDomain === 'ML' ? 'bg-blueGreeny text-white' : 'text-blueGreeny'} hover:bg-blueGreeny  hover:text-white transition duration-300`}
              >
                Machine Learning (ML)
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedDomain('DBMS')}
                className={`w-full font-bold text-left p-2 ${selectedDomain === 'DBMS' ? 'bg-blueGreeny text-white' : 'text-blueGreeny'} hover:bg-blueGreeny  hover:text-white transition duration-300`}
              >
                DBMS
              </button>
            </li>
          </ul>
        </aside>

        {/* Projects Section */}
        <div className="w-3/4">
          <h2 className="text-3xl font-semibold text-center text-blueGreeny mb-10">{selectedDomain} Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <a key={index} href={project.link} className="pbox bg-white p-6 border border-blueGreeny rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md" />
                <div className="mt-4 text-center">
                  <span className="text-blueGreeny hover:text-pinky transition duration-300">{project.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
