import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const programsData = [
  {
    id: 'women-leadership',
    name: 'Nari Shakti Leadership Program',
    category: 'Women Empowerment',
    details: 'A comprehensive program designed to develop leadership skills, confidence, and advocacy among women in rural areas.',
    startDate: 'Jan 2023',
    endDate: 'Ongoing',
  },
  {
    id: 'youth-tech',
    name: 'Tech-Savvy Youth Initiative',
    category: 'Youth Skill Development',
    details: 'Workshops and training sessions on modern technologies, coding, and digital marketing to prepare youth for the future workforce.',
    startDate: 'Mar 2023',
    endDate: 'Ongoing',
  },
  {
    id: 'eco-tourism-training',
    name: 'Rural Eco-Tourism Guide Training',
    category: 'Tourism Development',
    details: 'Training local villagers to become certified eco-tourism guides, promoting sustainable tourism practices and local culture.',
    startDate: 'Feb 2024',
    endDate: 'Dec 2024',
  },
  {
    id: 'health-hygiene',
    name: 'Community Health & Hygiene Awareness',
    category: 'Health & Environment',
    details: 'Regular campaigns and educational sessions on sanitation, nutrition, and disease prevention in remote communities.',
    startDate: 'Apr 2023',
    endDate: 'Ongoing',
  },
];

const Programs = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-punaroday-blue text-center mb-10">Our Transformative Programs</h1>
      <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Punaroday Foundation runs various programs tailored to address specific needs
        and create lasting positive change in the lives of individuals and communities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programsData.map((program) => (
          <Card key={program.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-punaroday-blue">{program.name}</CardTitle>
              <CardDescription className="text-punaroday-yellow font-medium">{program.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{program.details}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Duration:</strong> {program.startDate} - {program.endDate}
              </p>
              <Link to={`/programs/${program.id}`}>
                <Button className="bg-punaroday-blue text-punaroday-white hover:bg-blue-800">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programs;