import { MadeWithDyad } from "@/components/made-with-dyad";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Users, BookOpen, Globe, Heart, Award } from 'lucide-react';
import { Button } from "@/components/ui/button"; // Added this import

const Index = () => {
  return (
    <div className="bg-punaroday-white">
      <HeroSection />

      {/* Mission, Vision, Objectives Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-punaroday-blue mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Lightbulb className="h-12 w-12 text-punaroday-yellow mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold text-punaroday-blue">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                To empower marginalized communities in Rajasthan through sustainable initiatives
                in education, skill development, and social welfare, fostering self-reliance and dignity.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <Users className="h-12 w-12 text-punaroday-yellow mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold text-punaroday-blue">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                A Rajasthan where every individual has the opportunity to thrive,
                contribute to society, and live a life of purpose and prosperity.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-punaroday-yellow mx-auto mb-4" />
              <CardTitle className="text-2xl font-semibold text-punaroday-blue">Our Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 text-left mx-auto max-w-xs">
                <li>Promote women empowerment</li>
                <li>Enhance youth skills & livelihood</li>
                <li>Advance education & digital literacy</li>
                <li>Develop tribal & village tourism</li>
                <li>Improve health & environment</li>
                <li>Foster sports & fair democracy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action for Projects/Programs */}
      <section className="bg-punaroday-yellow py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-punaroday-blue mb-6">Join Us in Making a Difference!</h2>
        <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
          Your support helps us reach more communities and create lasting change.
          Explore our initiatives and find out how you can contribute.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/projects">
            <Button className="bg-punaroday-blue text-punaroday-white hover:bg-blue-800 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              View All Projects
            </Button>
          </a>
          <a href="/contact">
            <Button variant="outline" className="border-2 border-punaroday-blue text-punaroday-blue hover:bg-punaroday-blue hover:text-punaroday-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Partner With Us
            </Button>
          </a>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;