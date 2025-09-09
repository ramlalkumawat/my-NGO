import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { showSuccess, showError } from '@/utils/toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      showError("Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase.from('contacts').insert([{ name, email, message }]);

    if (error) {
      showError(`Error: ${error.message}`);
    } else {
      showSuccess("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600">We'd love to hear from you! Whether you have a question, a suggestion, or want to partner with us, feel free to reach out.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="text-orange-500" />
              <span className="text-gray-700">Jaipur, Rajasthan, India</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-orange-500" />
              <span className="text-gray-700">+91 12345 67890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-orange-500" />
              <span className="text-gray-700">info@punaroday.org</span>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-lg">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Your Email Address" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message..." value={formData.message} onChange={handleChange} rows={5} />
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;