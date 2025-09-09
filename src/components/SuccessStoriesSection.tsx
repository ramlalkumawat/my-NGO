import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import LazyImage from './LazyImage';

const testimonials = [
  {
    id: 1,
    quote: "Punaroday Foundation transformed my life. The skill development program helped me start my own small business.",
    name: "Priya Sharma",
    title: "Beneficiary",
    avatar: "https://placehold.co/100x100/f97316/FFFFFF/png?text=PS",
  },
  {
    id: 2,
    quote: "The health camps organized by the foundation brought much-needed medical attention to our remote village.",
    name: "Rajesh Kumar",
    title: "Beneficiary",
    avatar: "https://placehold.co/100x100/1f2937/FFFFFF/png?text=RK",
  },
  {
    id: 3,
    quote: "Thanks to their digital literacy program, I can now help my children with online studies and access government services.",
    name: "Sunita Devi",
    title: "Beneficiary",
    avatar: "https://placehold.co/100x100/f97316/FFFFFF/png?text=SD",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section id="success-stories" className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Voices of Change</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-500 rounded-lg bg-white">
            <CardContent className="flex flex-col items-center text-center">
              <p className="text-lg italic text-gray-600 mb-6">"{testimonial.quote}"</p>
              <LazyImage
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-orange-500"
              />
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">{testimonial.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SuccessStoriesSection;