import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-punaroday-blue text-center mb-10">About Punaroday Foundation</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-punaroday-blue mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Punaroday Foundation Sanstha was established with a profound commitment to uplift and empower the communities of Rajasthan.
          Witnessing the challenges faced by women, youth, and rural populations, our founders envisioned an organization
          that would act as a catalyst for positive change, fostering self-reliance and sustainable development.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Since our inception, we have worked tirelessly across various sectors, building strong relationships
          with local communities, government bodies, and corporate partners to create impactful programs
          that address the root causes of inequality and underdevelopment.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-punaroday-blue mb-6">Our Impact Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-punaroday-blue mb-3">Women Empowerment</h3>
            <p className="text-gray-700">
              Providing vocational training, financial literacy, and support for women entrepreneurs to achieve economic independence.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-punaroday-blue mb-3">Youth Skill Development & Livelihood</h3>
            <p className="text-gray-700">
              Equipping young individuals with essential skills for employment and fostering an environment for startup growth.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-punaroday-blue mb-3">Education & Digital Literacy</h3>
            <p className="text-gray-700">
              Promoting access to quality education and digital skills to bridge the knowledge gap in rural areas.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-punaroday-blue mb-3">Tourism Development</h3>
            <p className="text-gray-700">
              Promoting tribal and village tourism to create sustainable livelihoods and preserve cultural heritage.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-punaroday-blue mb-3">Health & Environment</h3>
            <p className="text-gray-700">
              Initiatives focused on improving community health, sanitation, and environmental sustainability.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-punaroday-blue mb-3">Sports & Fair Democracy</h3>
            <p className="text-gray-700">
              Encouraging sports participation and promoting civic engagement for a stronger, more equitable society.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-punaroday-blue mb-6">Our Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our dedicated team comprises passionate individuals, experts, and volunteers
          who are committed to our cause. We believe in collaborative efforts and
          community-led development to achieve our goals.
        </p>
        {/* Placeholder for team members */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-punaroday-yellow p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-punaroday-blue">John Doe</h3>
            <p className="text-punaroday-blue">Founder & CEO</p>
          </div>
          <div className="bg-punaroday-yellow p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-punaroday-blue">Jane Smith</h3>
            <p className="text-punaroday-blue">Program Director</p>
          </div>
          <div className="bg-punaroday-yellow p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-punaroday-blue">Alice Johnson</h3>
            <p className="text-punaroday-blue">Community Outreach Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;