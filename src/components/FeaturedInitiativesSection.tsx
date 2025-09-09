import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LazyImage from './LazyImage';

const initiativesData = [
  {
    id: 'udyamsetu',
    title: 'UdyamSetu: Bridging Dreams to Reality',
    description: 'A flagship program providing entrepreneurial training, mentorship, and seed funding to rural youth and women.',
    imageUrl: 'https://placehold.co/600x400/f97316/FFFFFF/png?text=UdyamSetu',
  },
  {
    id: 'digital-shiksha',
    title: 'Digital Shiksha: Empowering Through Technology',
    description: 'Initiatives to provide basic computer and internet literacy to underserved communities.',
    imageUrl: 'https://placehold.co/600x400/1f2937/FFFFFF/png?text=Digital+Shiksha',
  },
  {
    id: 'adivasi-darshan',
    title: 'Adivasi Darshan: Promoting Tribal Tourism',
    description: 'Developing sustainable eco-tourism models in tribal and rural areas, preserving cultural heritage.',
    imageUrl: 'https://placehold.co/600x400/f97316/FFFFFF/png?text=Adivasi+Darshan',
  },
];

const FeaturedInitiativesSection = () => {
  return (
    <section id="initiatives" className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Featured Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiativesData.map((initiative) => (
            <Card key={initiative.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <LazyImage src={initiative.imageUrl} alt={initiative.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">{initiative.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <a href="#get-involved">
                  <Button className="text-orange-500 hover:underline font-semibold" variant="link">
                    Learn More &rarr;
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInitiativesSection;