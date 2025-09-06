import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="contact" className="bg-punaroday-black text-punaroday-white p-8 md:p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: NGO Name & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-punaroday-orange">Punaroday Foundation</h3>
          <p className="text-sm text-gray-300">
            Empowering Rajasthan’s Future through Skills, Startups & Social Impact.
            Working for women empowerment, youth skill development, education, tourism, health, environment, and sports.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-punaroday-orange">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-punaroday-orange transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-punaroday-orange transition-colors">About Us</a></li>
            <li><a href="#initiatives" className="hover:text-punaroday-orange transition-colors">Initiatives</a></li>
            <li><a href="#get-involved" className="hover:text-punaroday-orange transition-colors">Get Involved</a></li>
            <li><a href="#contact" className="hover:text-punaroday-orange transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-punaroday-orange">Contact</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-punaroday-orange" />
              <p className="text-sm">123 Punaroday Marg, Jaipur, Rajasthan, India</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-punaroday-orange" />
              <p className="text-sm">+91 12345 67890</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-punaroday-orange" />
              <p className="text-sm">info@punaroday.org</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-orange transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-orange transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-orange transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-orange transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Newsletter Signup */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-punaroday-orange">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">Stay updated with our latest news and impact stories.</p>
          <form className="flex flex-col space-y-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-gray-700 border-gray-600 text-punaroday-white placeholder-gray-400 focus:border-punaroday-orange focus:ring-punaroday-orange"
            />
            <Button type="submit" className="bg-punaroday-orange text-punaroday-white hover:bg-orange-600 font-semibold">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Punaroday Foundation Sanstha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;