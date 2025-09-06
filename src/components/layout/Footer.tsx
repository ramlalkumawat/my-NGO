import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-punaroday-blue text-punaroday-white p-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-punaroday-yellow">Punaroday Foundation</h3>
          <p className="text-sm">
            Empowering Rajasthan’s Future through Skills, Startups & Social Impact.
            Working for women empowerment, youth skill development, education, tourism, health, environment, and sports.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-punaroday-yellow">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-punaroday-yellow transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-punaroday-yellow transition-colors">Projects</Link></li>
            <li><Link to="/programs" className="hover:text-punaroday-yellow transition-colors">Programs</Link></li>
            <li><Link to="/contact" className="hover:text-punaroday-yellow transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-punaroday-yellow">Connect With Us</h3>
          <p className="text-sm mb-4">
            Email: info@punaroday.org <br />
            Phone: +91 12345 67890 <br />
            Address: Rajasthan, India
          </p>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-yellow transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-yellow transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-yellow transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-yellow transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-punaroday-yellow mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Punaroday Foundation Sanstha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;