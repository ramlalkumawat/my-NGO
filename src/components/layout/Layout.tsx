import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../SEO';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-punaroday-white text-gray-800">
      <SEO />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;