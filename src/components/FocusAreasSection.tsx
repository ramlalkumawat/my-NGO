import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from './Icon'; // Import the new Icon component
import { Lightbulb, Users, BookOpen, Globe, Heart, Award } from 'lucide-react'; // Using lucide-react for icons

const focusAreas = [
  {
    title: 'Women Empowerment',
    description: 'Providing vocational training, financial literacy, and support for women entrepreneurs.',
    icon: <Users className="h-10 w-10 text-punaroday-orange" />,
  },
  {
    title: 'Youth Skill Development',
    description: 'Equipping young individuals with essential skills for employment and fostering startup growth.',
    icon: <Lightbulb className="h-10 w-10 text-punaroday-orange" />,
  },
  {
    title: 'Education & Digital Literacy',
    description: 'Promoting access to quality education and digital skills to bridge the knowledge gap.',
    icon: <BookOpen className="h-10 w-10 text-punaroday-orange" />,
  },
  {
    title: 'Tourism Development',
    description: 'Promoting tribal and village tourism to create sustainable livelihoods and preserve heritage.',
    icon: <Globe className="h-10 w-10 text-punaroday-orange" />,
  },
  {
    title: 'Health & Environment',
    description: 'Initiatives focused on improving community health, sanitation, and environmental sustainability.',
    icon: <Heart className="h-10 w-10 text-punaroday-orange" />,
  },
  {
    title: 'Sports & Fair Democracy',
    description: 'Encouraging sports participation and promoting civic engagement for a stronger society.',
    icon: <Award className="h-10 w-10 text-punaroday-orange" />,
  },
];

const FocusAreasSection = () => {
  return (
    <section id="about" className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-punaroday-blue mb-12">Our Focus Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {focusAreas.map((area, index) => (
          <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              {area.icon}
              <CardTitle className="text-xl font-semibold text-punaroday-blue mt-4">{area.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-punaroday-dark-gray">{area.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FocusAreasSection;