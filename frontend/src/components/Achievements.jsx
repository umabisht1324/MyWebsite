import React from 'react';
import { FaTrophy, FaCode, FaAward, FaLaptopCode } from 'react-icons/fa';

function Achievements() {
  return (
    <section className="bg-[#ebf6f5] py-10 px-5 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-blueGreeny mb-12">Achievements</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Achievements List */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-blueGreeny">
          <h3 className="text-2xl font-semibold text-blueGreeny mb-4 flex items-center">
            <FaTrophy size={28} className="mr-3" /> Achievements
          </h3>
          <ul className="space-y-4 text-lg text-blueGreeny-700">
            <li className="flex items-center text-blueGreeny">
              <FaCode size={24} className="mr-3 text-blueGreeny" />
              Participated in national coding competitions and hackathons, showcasing problem-solving abilities.
            </li>
            <li className="flex items-center text-blueGreeny">
              <FaAward size={24} className="mr-3 text-blueGreeny" />
              Secured 1st place in a 24-hour Hackathon for innovative software solution development.
            </li>
          </ul>
        </div>

        {/* LeetCode and CodeChef Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-blueGreeny">
          <h3 className="text-2xl font-semibold text-blueGreeny mb-4 flex items-center">
            <FaLaptopCode size={28} className="mr-3" /> LeetCode & CodeChef
          </h3>
          <ul className="space-y-4 text-lg text-blueGreeny-700">
            <li className="flex items-center">
              <FaCode size={24} className="mr-3 text-blueGreeny" />
              <a href="https://leetcode.com/umabisht1324" className="text-blueGreeny hover:underline">
                LeetCode: Solved 300+ problems.
              </a>
            </li>
            <li className="flex items-center">
              <FaCode size={24} className="mr-3 text-blueGreeny" />
              <a href="https://www.codechef.com/users/uma_23" className="text-blueGreeny hover:underline">
                CodeChef: Participated in various contests and achieved high rankings.
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}

export default Achievements;
