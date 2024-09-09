import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaAws, FaDatabase, FaCode, FaSearch, FaLayerGroup, FaLaptopCode, FaObjectGroup } from 'react-icons/fa';
import { GiThink, GiTeamIdea } from 'react-icons/gi';
import { MdEmojiEvents } from 'react-icons/md'; // Replaced the leadership icon with a trophy icon
import { BiConversation } from 'react-icons/bi';
// import './Skills.css'; // Custom CSS for skill bars

function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#ebf6f5]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-blueGreeny mb-12 animate-fadeIn">
          Skills
        </h2>

        <div className="space-y-12">
          {/* Technical Skills with Progress Bars */}
          <div className="bg-white p-8 border border-blueGreeny rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 animate-fadeIn">
            <h3 className="text-3xl font-bold text-blueGreeny mb-6">Technical Skills</h3>
            <div className="space-y-6">
              <SkillBar icon={<FaReact size={28} />} skill="React.js" level="90%" />
              <SkillBar icon={<FaNodeJs size={28} />} skill="Node.js" level="85%" />
              <SkillBar icon={<FaHtml5 size={28} />} skill="HTML" level="95%" />
              <SkillBar icon={<FaCss3Alt size={28} />} skill="CSS" level="90%" />
              <SkillBar icon={<FaJsSquare size={28} />} skill="JavaScript" level="85%" />
              <SkillBar icon={<FaAws size={28} />} skill="AWS" level="70%" />
              <SkillBar icon={<FaDatabase size={28} />} skill="MongoDB" level="80%" />
            </div>
          </div>

          {/* Hard Skills */}
          <div className="bg-white p-8 border border-blueGreeny rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 animate-fadeIn">
            <h3 className="text-3xl font-bold text-blueGreeny mb-6">Hard Skills</h3>
            <div className="space-y-6">
              <SkillBar icon={<FaCode size={28} />} skill="Algorithms" level="90%" />
              <SkillBar icon={<FaDatabase size={28} />} skill="Data Structures" level="85%" />
              <SkillBar icon={<FaSearch size={28} />} skill="SEO" level="80%" />
              <SkillBar icon={<FaLayerGroup size={28} />} skill="Caching" level="75%" />
              <SkillBar icon={<FaLaptopCode size={28} />} skill="Web Development" level="95%" />
              <SkillBar icon={<FaObjectGroup size={28} />} skill="UI/UX Design" level="85%" />
              <SkillBar icon={<FaDatabase size={28} />} skill="NoSQL" level="80%" />
            </div>
          </div>

          {/* Soft Skills with Icons */}
          <div className="bg-white p-8 border border-blueGreeny rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 animate-fadeIn">
            <h3 className="text-3xl font-bold text-blueGreeny mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-6 text-lg text-gray-700">
              <div className="flex items-center space-x-4">
                <GiThink size={28} className="text-blueGreeny" />
                <span>Critical Thinking</span>
              </div>
              <div className="flex items-center space-x-4">
                <MdEmojiEvents size={28} className="text-blueGreeny" />
                <span>Leadership</span>
              </div>
              <div className="flex items-center space-x-4">
                <BiConversation size={28} className="text-blueGreeny" />
                <span>Communication</span>
              </div>
              <div className="flex items-center space-x-4">
                <GiTeamIdea size={28} className="text-blueGreeny" />
                <span>Teamwork</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaCode size={28} className="text-blueGreeny" />
                <span>Problem-solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Progress Bar Component
function SkillBar({ icon, skill, level }) {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <div className="w-full">
        <div className="flex justify-between">
          <span className="text-lg font-medium">{skill}</span>
          <span className="text-lg font-medium">{level}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blueGreeny h-4 rounded-full"
            style={{ width: level }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
