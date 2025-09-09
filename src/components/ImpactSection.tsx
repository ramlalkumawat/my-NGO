import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CountUp from './CountUp';

const ImpactSection = () => {
  const impactMetrics = [
    { id: 1, value: 500, label: 'Youth Trained', suffix: '+' },
    { id: 2, value: 20, label: 'Projects Completed', suffix: '+' },
    { id: 3, value: 1000, label: 'Lives Impacted', suffix: '+' },
  ];

  return (
    <section id="impact" className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactMetrics.map((metric) => (
            <Card key={metric.id} className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <CardTitle className="text-5xl font-extrabold text-orange-500 mb-4">
                  <CountUp end={metric.value} suffix={metric.suffix} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-600">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;