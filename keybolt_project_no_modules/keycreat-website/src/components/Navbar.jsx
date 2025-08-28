import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, X, Play, Gamepad2 } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black/90 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <span className="text-white text-xl font-bold">KeyBolt</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#ott" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                OTT Subscriptions
              </a>
              <a href="#games" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Games
              </a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#ott" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              OTT Subscriptions
            </a>
            <a href="#games" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Games
            </a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

