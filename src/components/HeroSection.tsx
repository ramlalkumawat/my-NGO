import React from 'react';
import { Button } from '@/components/ui/button';
import { DonateModal } from './DonateModal';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://placehold.co/1920x1080/1E3A8A/FFFFFF/png?text=NGO+Work+Background)' }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div> {/* Dark overlay */}
      </div>
      
      <div className="container mx-auto relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Empowering <span className="text-orange-500">Youth</span>, Enriching <span className="text-orange-500">Communities</span>.
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200">
          Punaroday Foundation is dedicated to fostering sustainable development
          across women empowerment, youth skill development, education, tourism, health, environment, and sports.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <DonateModal>
            <Button className="bg-orange-500 text-white hover:bg-orange-600 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Donate Now
            </Button>
          </DonateModal>
          <a href="#get-involved">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Involved
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;