import React from 'react';
import { Link } from 'react-router-dom';
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
    <nav className="sticky top-0 z-50 bg-punaroday-blue text-punaroday-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-punaroday-white">
          <span className="text-punaroday-orange">Punaroday</span> Foundation Sanstha
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="hover:text-punaroday-orange transition-colors">
              {link.name}
            </a>
          ))}
          <Button className="bg-punaroday-orange text-punaroday-white hover:bg-orange-600 px-6 py-2 rounded-full font-semibold transition-colors">
            Donate Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-punaroday-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-punaroday-blue text-punaroday-white border-none">
              <div className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.path} className="text-xl hover:text-punaroday-orange transition-colors">
                    {link.name}
                  </a>
                ))}
                <Button className="bg-punaroday-orange text-punaroday-white hover:bg-orange-600 px-6 py-2 rounded-full font-semibold transition-colors mt-4">
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