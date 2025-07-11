import React from 'react';
import profilePic from '/IMG_1640.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="py-8 flex flex-col justify-center items-center bg-gray-50 text-center px-2">
      <img
        src={profilePic}
        alt="Ahmed Ibrahim"
        className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
      />
      <h2 className="text-2xl font-bold mb-3 text-gray-800"></h2>
      <p className="text-base text-gray-600 mb-5 max-w-xl">
        ERP Functional Consultant specializing in Microsoft Dynamics AX, Dynamics 365, and Power BI solutions.
      </p>
      <a href="/Ahmed CV-4-6.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
        View My CV
      </a>
    </section>
  );
};

export default HeroSection;
