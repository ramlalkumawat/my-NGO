import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Programs', path: '/programs' },
    { name: 'CSR Partnerships', path: '/csr' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-punaroday-blue text-punaroday-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-punaroday-yellow">
          Punaroday Foundation
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="hover:text-punaroday-yellow transition-colors">
              {link.name}
            </Link>
          ))}
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
                  <Link key={link.name} to={link.path} className="text-xl hover:text-punaroday-yellow transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;