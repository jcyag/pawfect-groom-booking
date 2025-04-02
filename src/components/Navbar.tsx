
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PawPrint } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-pawfect-pink" />
            <span className="text-2xl font-semibold text-pawfect-dark">Pawfect</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors">
              Services
            </Link>
            <Link to="/booking" className="font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors">
              Book Now
            </Link>
            <Link to="/about" className="font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors">
              About Us
            </Link>
            <Link to="/gallery" className="font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-pawfect-dark focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 pb-6 space-y-4">
            <Link 
              to="/" 
              className="block font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/booking" 
              className="block font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
            <Link 
              to="/about" 
              className="block font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/gallery" 
              className="block font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block font-medium text-pawfect-dark hover:text-pawfect-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
