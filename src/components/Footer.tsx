import React from 'react';
import { Heart, Code, Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Code className="h-6 w-6 text-blue-400" />
              <Brain className="h-6 w-6 text-green-400" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              PyAI Dev
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>&copy; 2024 Python AI Developer. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>and lots of</span>
            <Code className="h-4 w-4 text-blue-400" />
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;