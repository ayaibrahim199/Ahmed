import React from 'react';
import profilePic from '/IMG_1640.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
         <img
        src={profilePic}
        alt="Ahmed Ibrahim"
        className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
      />
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Ahmed Ibrahim</h2>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl">
        ERP Functional Consultant specializing in Microsoft Dynamics AX, Dynamics 365, and Power BI solutions.
      </p>
      <a href="/Ahmed CV-4-6.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        View My CV
      </a>
    </section>
  );
};

export default HeroSection;
