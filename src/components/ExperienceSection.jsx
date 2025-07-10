import React from 'react';

const experiences = [
  {
    position: 'ERP Functional Consultant',
    company: 'Indevco Group',
    duration: 'Aug 2021 – Present',
    description: 'Implementing and supporting Microsoft Dynamics 365 and AX solutions, providing user training, and enhancing business processes.'
  },
  {
    position: 'ERP Application Consultant',
    company: 'TriNet Solutions',
    duration: 'Jan 2019 – July 2021',
    description: 'Worked on full ERP cycle implementation including analysis, design, and post-live support for Dynamics AX and D365.'
  },
  {
    position: 'ERP Application Support',
    company: 'IT Fusion',
    duration: '2016 – 2018',
    description: 'Provided application support for Microsoft Dynamics AX with a focus on financial and supply chain modules.'
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Experience</h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-1">{exp.position}</h3>
            <p className="text-gray-600 font-medium">{exp.company}</p>
            <p className="text-gray-500 italic mb-3">{exp.duration}</p>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
