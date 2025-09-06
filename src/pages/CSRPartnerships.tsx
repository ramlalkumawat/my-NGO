import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const CSRPartnerships = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API)
    alert('CSR Partnership form submitted! We will get back to you soon.');
    console.log('CSR form submitted');
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-punaroday-blue text-center mb-10">CSR Partnerships</h1>
      <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        Partner with Punaroday Foundation to fulfill your Corporate Social Responsibility goals
        and create a lasting positive impact in Rajasthan.
      </p>

      <section className="mb-16 bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-punaroday-blue mb-6 text-center">Why Partner With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-punaroday-yellow mb-3">Strategic Impact</h3>
            <p className="text-gray-700 mb-4">
              Align your CSR initiatives with our proven programs in women empowerment, youth skill development,
              education, and sustainable tourism. We ensure your investment creates measurable and meaningful change.
            </p>
            <h3 className="text-2xl font-bold text-punaroday-yellow mb-3">Transparency & Accountability</h3>
            <p className="text-gray-700">
              We maintain the highest standards of transparency in our operations and provide regular, detailed reports
              on the utilization of funds and the impact achieved, ensuring your trust is well-placed.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-punaroday-yellow mb-3">Brand Visibility & Engagement</h3>
            <p className="text-gray-700 mb-4">
              Partnering with Punaroday Foundation enhances your brand's reputation as a socially responsible entity.
              We offer opportunities for employee engagement, joint campaigns, and public recognition.
            </p>
            <h3 className="text-2xl font-bold text-punaroday-yellow mb-3">Sustainable Development Goals</h3>
            <p className="text-gray-700">
              Our work directly contributes to several United Nations Sustainable Development Goals (SDGs),
              allowing your organization to be a part of a global movement for a better future.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto bg-punaroday-blue p-8 rounded-lg shadow-lg text-punaroday-white">
        <h2 className="text-3xl font-semibold text-punaroday-yellow text-center mb-6">CSR Partnership Inquiry</h2>
        <p className="text-center mb-8">
          Interested in collaborating? Please fill out the form below, and our team will get in touch with you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="companyName" className="text-punaroday-white">Company Name</Label>
            <Input id="companyName" type="text" placeholder="Your Company Name" required className="bg-punaroday-white text-punaroday-blue border-punaroday-yellow focus:ring-punaroday-yellow" />
          </div>
          <div>
            <Label htmlFor="contactPerson" className="text-punaroday-white">Contact Person</Label>
            <Input id="contactPerson" type="text" placeholder="Full Name" required className="bg-punaroday-white text-punaroday-blue border-punaroday-yellow focus:ring-punaroday-yellow" />
          </div>
          <div>
            <Label htmlFor="email" className="text-punaroday-white">Email</Label>
            <Input id="email" type="email" placeholder="company@example.com" required className="bg-punaroday-white text-punaroday-blue border-punaroday-yellow focus:ring-punaroday-yellow" />
          </div>
          <div>
            <Label htmlFor="phone" className="text-punaroday-white">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+91 XXXXXXXXXX" className="bg-punaroday-white text-punaroday-blue border-punaroday-yellow focus:ring-punaroday-yellow" />
          </div>
          <div>
            <Label htmlFor="message" className="text-punaroday-white">Message / Areas of Interest</Label>
            <Textarea id="message" placeholder="Tell us about your CSR goals and how you envision partnering with us." rows={5} className="bg-punaroday-white text-punaroday-blue border-punaroday-yellow focus:ring-punaroday-yellow" />
          </div>
          <Button type="submit" className="w-full bg-punaroday-yellow text-punaroday-blue hover:bg-yellow-400 py-3 text-lg font-semibold">
            Submit Inquiry
          </Button>
        </form>
      </section>
    </div>
  );
};

export default CSRPartnerships;