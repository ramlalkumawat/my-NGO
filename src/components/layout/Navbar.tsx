import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, LogIn } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'About Us', 
    path: '/about',
    subLinks: [
      { name: 'Mission & Vision', path: '/about#mission' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'History', path: '/about#history' },
    ]
  },
  { name: 'Programs', path: '/programs' },
  { 
    name: 'Get Involved', 
    path: '/get-involved',
    subLinks: [
      { name: 'Volunteer', path: '/get-involved#volunteer' },
      { name: 'Donate', path: '/get-involved#donate' },
      { name: 'Partner with Us', path: '/get-involved#partner' },
    ]
  },
  { name: 'Events & News', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          <span className="text-orange-500">Punaroday</span> Foundation
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.subLinks ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center text-gray-600 hover:text-orange-500">
                    {link.name} <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {link.subLinks.map(subLink => (
                    <DropdownMenuItem key={subLink.name} asChild>
                      <Link to={subLink.path}>{subLink.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={link.name} to={link.path} className="text-gray-600 hover:text-orange-500 transition-colors">
                {link.name}
              </Link>
            )
          ))}
          <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors">
            Donate Now
          </Button>
          <Link to="/admin">
            <Button variant="outline" size="icon" title="Admin Panel">
              <LogIn className="h-4 w-4" />
            </Button>
          </Link>
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
                  <Link key={link.name} to={link.path} className="text-xl text-gray-600 hover:text-orange-500 transition-colors">
                    {link.name}
                  </Link>
                ))}
                <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors mt-4">
                  Donate Now
                </Button>
                 <Link to="/admin">
                    <Button variant="outline" className="w-full mt-2">
                        Admin Panel
                    </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;