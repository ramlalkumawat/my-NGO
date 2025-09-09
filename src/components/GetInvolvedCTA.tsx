import React from 'react';
import { Button } from '@/components/ui/button';

const GetInvolvedCTA = () => {
  return (
    <section id="get-involved" className="bg-orange-500 py-20 px-4 text-center text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Become a Change-Maker Today!</h2>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Your contribution, big or small, fuels our mission to empower communities and create a brighter future for Rajasthan. Join us!
        </p>
        <Button className="bg-white text-orange-500 hover:bg-gray-100 px-10 py-7 text-xl font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          Become a Change-Maker
        </Button>
      </div>
    </section>
  );
};

export default GetInvolvedCTA;