import React from 'react';

const GetInvolved = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Get Involved</h1>
      <div className="space-y-12">
        <section id="volunteer">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Volunteer</h2>
          <p className="text-gray-600">Information about volunteering opportunities will go here.</p>
        </section>
        <section id="donate">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donate</h2>
          <p className="text-gray-600">Information on how to donate will go here.</p>
        </section>
        <section id="partner">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Partner with Us</h2>
          <p className="text-gray-600">Information for potential partners will go here.</p>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;