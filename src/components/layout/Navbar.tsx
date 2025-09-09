import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Initiatives', path: '#initiatives' },
    { name: 'Get Involved', path: '#get-involved' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-800">
          <span className="text-orange-500">Punaroday</span> Foundation
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="text-gray-600 hover:text-orange-500 transition-colors">
              {link.name}
            </a>
          ))}
          <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors">
            Donate Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-800">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-gray-800 border-none">
              <div className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.path} className="text-xl text-gray-600 hover:text-orange-500 transition-colors">
                    {link.name}
                  </a>
                ))}
                <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors mt-4">
                  Donate Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;