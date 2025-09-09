import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import LazyImage from '@/components/LazyImage';

const teamMembers = [
  {
    name: "Team Member One",
    role: "Founder & CEO",
    image: "https://placehold.co/300x300/f97316/FFFFFF/png?text=Team+1",
  },
  {
    name: "Team Member Two",
    role: "Program Director",
    image: "https://placehold.co/300x300/1f2937/FFFFFF/png?text=Team+2",
  },
  {
    name: "Team Member Three",
    role: "Community Outreach Lead",
    image: "https://placehold.co/300x300/f97316/FFFFFF/png?text=Team+3",
  },
];

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h1>
      <div className="space-y-16">
        <section id="story">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Our Story</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            [Your story will go here. Describe the founding of Punaroday Foundation, the inspiration behind it, and the journey so far. This is where you connect with your audience on a personal level.]
          </p>
        </section>

        <section id="mission">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Mission & Vision</h2>
          <p className="text-gray-600">[Content for Mission & Vision will go here.]</p>
        </section>

        <section id="team">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <LazyImage src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-orange-500" />
                  <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                  <p className="text-orange-500 font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    [Details about the team member, their background, and their role in the foundation will go here.]
                  </p>
                  <div className="flex justify-center space-x-4 text-gray-500">
                    <a href="#" className="hover:text-orange-500"><Twitter /></a>
                    <a href="#" className="hover:text-orange-500"><Linkedin /></a>
                    <a href="#" className="hover:text-orange-500"><Mail /></a>
                    <a href="#" className="hover:text-orange-500"><Phone /></a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="history">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">History</h2>
          <p className="text-gray-600">[A detailed paragraph about the history and milestones of the Punaroday Foundation will go here.]</p>
        </section>
      </div>
    </div>
  );
};

export default About;