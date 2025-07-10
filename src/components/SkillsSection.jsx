import React from 'react';

const skills = [
  'Microsoft Dynamics AX',
  'Microsoft Dynamics 365 F&O',
  'Power BI',
  'ERP Implementation',
  'Business Analysis',
  'Data Migration',
  'SQL & SSRS Reports',
  'Microsoft Office',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;