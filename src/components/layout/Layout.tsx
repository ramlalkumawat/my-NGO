import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../SEO'; // To be created

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description, keywords, ogImage }) => {
  return (
    <div className="flex flex-col min-h-screen bg-punaroday-white text-gray-800">
      <SEO title={title} description={description} keywords={keywords} ogImage={ogImage} />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;