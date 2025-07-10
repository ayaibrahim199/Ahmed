import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa6';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Me</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-lg text-gray-700">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-xl" />
          <a href="mailto:ama1183@hotmail.com" className="hover:text-blue-600">ama1183@hotmail.com"</a>
        </div>

        <div className="flex items-center gap-3">
          <FaPhone className="text-xl" />
          <span>+966543503403</span>
        </div>

        <div className="flex items-center gap-3">
          <FaLinkedin className="text-xl" />
          <a href="https://www.linkedin.com/in/ahmed-mohamed-ahmed-lbrahim-659a5932?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
