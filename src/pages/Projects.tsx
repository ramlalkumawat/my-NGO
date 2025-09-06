import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import LazyImage from '@/components/LazyImage'; // To be created

const projectsData = [
  {
    id: 'udyamsetu',
    title: 'UdyamSetu: Bridging Dreams to Reality',
    slug: 'udyamsetu',
    description: 'A flagship program focused on providing entrepreneurial training, mentorship, and seed funding to rural youth and women, fostering local startups and self-employment.',
    imageUrl: '/placeholder.svg', // Placeholder image
    status: 'Ongoing',
    metrics: '500+ beneficiaries, 50+ startups launched',
  },
  {
    id: 'digital-literacy',
    title: 'Digital Shiksha: Empowering Through Technology',
    slug: 'digital-literacy',
    description: 'Initiatives to provide basic computer and internet literacy to underserved communities, opening doors to online education, government services, and digital opportunities.',
    imageUrl: '/placeholder.svg', // Placeholder image
    status: 'Ongoing',
    metrics: '1000+ individuals trained, 5 digital centers established',
  },
  {
    id: 'tribal-tourism',
    title: 'Adivasi Darshan: Promoting Tribal & Village Tourism',
    slug: 'tribal-tourism',
    description: 'Developing sustainable eco-tourism models in tribal and rural areas, preserving cultural heritage while creating livelihood opportunities for local communities.',
    imageUrl: '/placeholder.svg', // Placeholder image
    status: 'New Initiative',
    metrics: '3 villages adopted, 15 local guides trained',
  },
  {
    id: 'health-camps',
    title: 'Swasth Jeevan: Health & Wellness Camps',
    slug: 'health-camps',
    description: 'Organizing regular health check-up camps, awareness sessions on hygiene, nutrition, and preventive healthcare in remote villages.',
    imageUrl: '/placeholder.svg', // Placeholder image
    status: 'Ongoing',
    metrics: '20+ camps conducted, 3000+ patients served',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-punaroday-blue text-center mb-10">Our Impactful Projects</h1>
      <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Discover the initiatives through which Punaroday Foundation is bringing about
        tangible change and empowering communities across Rajasthan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <LazyImage src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-punaroday-blue">{project.title}</CardTitle>
              <CardDescription className="text-gray-600">{project.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4"><strong>Impact:</strong> {project.metrics}</p>
              <Link to={`/projects/${project.slug}`}>
                <Button className="bg-punaroday-yellow text-punaroday-blue hover:bg-yellow-400">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;