
import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pawfect-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <PawPrint className="h-8 w-8 text-pawfect-pink" />
              <span className="text-2xl font-semibold">Pawfect</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional pet grooming services to keep your furry friends looking and feeling their best.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-pawfect-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-pawfect-pink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-pawfect-pink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Basic Wash
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Full Grooming
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Nail Trimming
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Ear Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Teeth Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pawfect-pink transition-colors">
                  Special Treatments
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pawfect-pink mt-0.5" />
                <span className="text-gray-300">123 Pet Avenue, Furry City, PC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pawfect-pink" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pawfect-pink" />
                <span className="text-gray-300">info@pawfectgroom.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-pawfect-pink mt-0.5" />
                <div className="text-gray-300">
                  <p>Mon-Fri: 9AM - 7PM</p>
                  <p>Sat: 9AM - 5PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pawfect Grooming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
