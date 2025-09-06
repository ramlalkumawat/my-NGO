import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-punaroday-blue text-punaroday-white py-20 md:py-32 overflow-hidden">
      {/* Background pattern/texture - optional */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/placeholder.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-punaroday-yellow">
          Empowering Rajasthan’s Future through Skills, Startups & Social Impact.
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Punaroday Foundation Sanstha is dedicated to fostering sustainable development
          across women empowerment, youth skill development, education, tourism, health, environment, and sports.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/projects">
            <Button className="bg-punaroday-yellow text-punaroday-blue hover:bg-yellow-400 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Explore Our Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-2 border-punaroday-white text-punaroday-white hover:bg-punaroday-white hover:text-punaroday-blue px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Get Involved
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;