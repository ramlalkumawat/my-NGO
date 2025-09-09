import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h1>
      <div className="space-y-12">
        <section id="mission">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Mission & Vision</h2>
          <p className="text-gray-600">Content for Mission & Vision will go here.</p>
        </section>
        <section id="team">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600">Content for Our Team will go here.</p>
        </section>
        <section id="history">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">History</h2>
          <p className="text-gray-600">Content for History will go here.</p>
        </section>
      </div>
    </div>
  );
};

export default About;