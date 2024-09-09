import React from 'react';
import graphicEraImage from '../static/gehu.jpg'; // Example image path
import armySchoolImage from '../static/school.jpg'; // Example image path

function Education() {
  return (
    <section id="education" className="bg-teenyGreeny py-12">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-blueGreeny mb-12">
          Educational Details
        </h2>

        <div className="space-y-10">
          {/* Graphic Era Hill University */}
          <div className="flex flex-col md:flex-row items-center p-6  border border-blueGreeny rounded-lg bg-white shadow-lg">
            <img src={graphicEraImage} alt="Graphic Era Hill University" className="w-48 h-48 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"/>
            <div className='flex flex-col  justify-end' >
              <h3 className="text-3xl font-bold text-blueGreeny">Graphic Era Hill University, Dehradun</h3>
              <p>Bachelor’s in Technology; Majors in Computer Science and Engineering</p>
              <p className="text-gray-600">CGPA: 8.7</p>
              <p className="text-gray-600">2021-2025</p>
            </div>
          </div>

          {/* Army Public School - Intermediate */}
          <div className="flex flex-col md:flex-row items-center p-6 border border-blueGreeny rounded-lg bg-white shadow-lg">
            <img src={armySchoolImage} alt="Army Public School" className="w-48 h-48 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"/>
            <div>
              <h3 className="text-3xl font-bold text-blueGreeny">Army Public School, Almora</h3>
              <p>Intermediate</p>
              <p className="text-gray-600">CGPA: 9.3</p>
              <p className="text-gray-600">2019-2020</p>
            </div>
          </div>

          {/* Army Public School - High School */}
          <div className="flex flex-col md:flex-row items-center p-6 border border-blueGreeny rounded-lg bg-white shadow-lg">
            <img src={armySchoolImage} alt="Army Public School" className="w-48 h-48 rounded-lg object-cover mb-4 md:mb-0 md:mr-6"/>
            <div>
              <h3 className="text-3xl font-bold text-blueGreeny">Army Public School, Almora</h3>
              <p>High School</p>
              <p className="text-gray-600">CGPA: 9.2</p>
              <p className="text-gray-600">2018-2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
