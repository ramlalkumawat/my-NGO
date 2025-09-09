import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white p-8 md:p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: NGO Name & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-orange-500">Punaroday Foundation</h3>
          <p className="text-sm text-gray-400">
            Empowering Rajasthan’s Future through Skills, Startups & Social Impact.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
            <li><a href="#initiatives" className="hover:text-orange-500 transition-colors">Initiatives</a></li>
            <li><a href="#get-involved" className="hover:text-orange-500 transition-colors">Get Involved</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500">Contact</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-orange-500" />
              <p className="text-sm">Jaipur, Rajasthan, India</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-orange-500" />
              <p className="text-sm">+91 12345 67890</p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-orange-500" />
              <p className="text-sm">info@punaroday.org</p>
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Newsletter Signup */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">Stay updated with our latest news.</p>
          <form className="flex flex-col space-y-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 rounded-lg"
            />
            <Button type="submit" className="bg-orange-500 text-white hover:bg-orange-600 font-semibold rounded-lg">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Punaroday Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;