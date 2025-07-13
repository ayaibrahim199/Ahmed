import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
