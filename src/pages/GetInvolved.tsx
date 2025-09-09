import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import LazyImage from '@/components/LazyImage';

const GetInvolved = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Get Involved</h1>
      <div className="space-y-16">
        <section id="volunteer" className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Become a Member/Volunteer</h2>
          <form className="space-y-4 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your Full Name" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Your Email Address" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Your Phone Number" />
            </div>
            <div>
              <Label htmlFor="message">Why do you want to join us?</Label>
              <Textarea id="message" placeholder="Tell us a bit about yourself" />
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">Submit Application</Button>
          </form>
        </section>

        <section id="donate" className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Donate</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Your support helps us continue our work. You can donate using the QR code or through a direct bank transfer.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-2">Scan QR Code to Pay</h3>
              <LazyImage 
                src="https://placehold.co/250x250/f97316/FFFFFF/png?text=QR+Code" 
                alt="Donation QR Code"
                className="w-64 h-64 object-cover rounded-lg mx-auto"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Bank Transfer Details</h3>
              <div className="space-y-1 text-sm bg-gray-100 p-6 rounded-lg text-left">
                <p><strong>Bank Name:</strong> [Your Bank Name]</p>
                <p><strong>Account Name:</strong> Punaroday Foundation</p>
                <p><strong>Account Number:</strong> [Your Account Number]</p>
                <p><strong>IFSC Code:</strong> [Your IFSC Code]</p>
                <p><strong>Branch:</strong> [Your Branch Name]</p>
              </div>
            </div>
          </div>
        </section>

        <section id="partner">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Partner with Us</h2>
          <p className="text-gray-600">[Information for potential partners will go here.]</p>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;