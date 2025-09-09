import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LazyImage from '@/components/LazyImage';
import { Button } from '@/components/ui/button';

const projects = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Project Title ${i + 1}`,
  description: `This is a brief description of Project ${i + 1}. More details about its objectives, activities, and impact will be added here soon.`,
  imageUrl: `https://placehold.co/600x400/cccccc/FFFFFF/png?text=Project+${i + 1}`,
}));

const Programs = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Programs & Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <LazyImage src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <Button variant="link" className="text-orange-500 p-0 self-start">Learn More &rarr;</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programs;