import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-green-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.1),_transparent)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(5,150,105,0.1),_transparent)] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                PD
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-green-500 rounded-full blur opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-white to-green-400 bg-clip-text text-transparent">
                Python Developer
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Exploring the frontiers of <span className="text-green-400 font-semibold">Artificial Intelligence</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Backend engineer passionate about building scalable systems and diving deep into 
              machine learning, natural language processing, and AI-driven solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-500 rounded-lg font-semibold text-gray-300 hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110">
              <Github className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
            <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110">
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
            <a href="#" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110">
              <Mail className="h-6 w-6 text-gray-300 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;