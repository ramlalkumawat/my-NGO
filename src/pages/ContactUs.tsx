import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API)
    alert('Your message has been sent! We will get back to you soon.');
    console.log('Contact form submitted');
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-punaroday-blue text-center mb-10">Contact Us</h1>
      <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
        We'd love to hear from you! Whether you have a question, want to collaborate, or simply want to say hello,
        feel free to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-punaroday-blue p-8 rounded-lg shadow-lg text-punaroday-white">
          <h2 className="text-3xl font-semibold text-punaroday-yellow mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-punaroday-yellow" />
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p>info@punaroday.org</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-punaroday-yellow" />
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p>+91 12345 67890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-punaroday-yellow" />
              <div>
                <h3 className="font-bold text-lg">Our Office</h3>
                <p>123 Punaroday Marg, Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-bold text-lg text-punaroday-yellow mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Social media icons - replace with actual links */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.002 3.714.051 1.104.122 1.749.53 2.167.948.418.419.826 1.064.948 2.167.049.93.051 1.286.051 3.714v.007c0 2.43-.002 2.784-.051 3.714-.122 1.104-.53 1.749-.948 2.167-.419.418-1.064.826-2.167.948-.93.049-1.286.051-3.714.051h-.007c-2.43 0-2.784-.002-3.714-.051-1.104-.122-1.749-.53-2.167-.948-.418-.419-.826-1.064-.948-2.167-.049-.93-.051-1.286-.051-3.714v-.007c0-2.43.002-2.784.051-3.714.122-1.104.53-1.749.948-2.167.419-.418 1.064-.826 2.167-.948.93-.049 1.286-.051 3.714-.051h.007zm0 1.679c-2.687 0-3.038.003-4.07.056-1.064.067-1.61.368-1.973.731-.362.363-.665.909-.732 1.973-.053 1.032-.056 1.383-.056 4.07v.007c0 2.687.003 3.038.056 4.07.067 1.064.368 1.61.731 1.973.363.362.909.665 1.973.732 1.032.053 1.383.056 4.07.056h.007c2.687 0 3.038-.003 4.07-.056 1.064-.067 1.61-.368 1.973-.731.362-.363.665-.909.732-1.973.053-1.032.056-1.383.056-4.07v-.007c0-2.687-.003-3.038-.056-4.07-.067-1.064-.368-1.61-.731-1.973-.363-.362-.909-.665-1.973-.732-1.032-.053-1.383-.056-4.07-.056h-.007zm0 4.076c-2.24 0-4.06 1.82-4.06 4.06s1.82 4.06 4.06 4.06 4.06-1.82 4.06-4.06-1.82-4.06-4.06-4.06zm0 1.679c1.31 0 2.381 1.07 2.381 2.381s-1.07 2.381-2.381 2.381-2.381-1.07-2.381-2.381 1.07-2.381 2.381-2.381zM17.45 5.072c0 .596-.483 1.079-1.079 1.079-.596 0-1.079-.483-1.079-1.079s.483-1.079 1.079-1.079 1.079.483 1.079 1.079z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 10.702v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-punaroday-yellow transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-punaroday-blue text-center mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-punaroday-blue">Your Name</Label>
              <Input id="name" type="text" placeholder="Full Name" required className="border-punaroday-blue focus:ring-punaroday-yellow" />
            </div>
            <div>
              <Label htmlFor="email" className="text-punaroday-blue">Your Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" required className="border-punaroday-blue focus:ring-punaroday-yellow" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-punaroday-blue">Subject</Label>
              <Input id="subject" type="text" placeholder="Regarding..." required className="border-punaroday-blue focus:ring-punaroday-yellow" />
            </div>
            <div>
              <Label htmlFor="message" className="text-punaroday-blue">Your Message</Label>
              <Textarea id="message" placeholder="Type your message here..." rows={6} required className="border-punaroday-blue focus:ring-punaroday-yellow" />
            </div>
            <Button type="submit" className="w-full bg-punaroday-yellow text-punaroday-blue hover:bg-yellow-400 py-3 text-lg font-semibold">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;