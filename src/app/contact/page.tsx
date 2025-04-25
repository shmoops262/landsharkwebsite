"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send this data to your server
      console.log('Form submitted:', formData);
      
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions or want to reserve a table? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {formStatus.type && (
                  <div className={`p-4 rounded-lg ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {formStatus.message}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-blue-900 placeholder-blue-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-blue-900 placeholder-blue-400"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-blue-900 placeholder-blue-400"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-blue-900 placeholder-blue-400"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Location & Hours</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Address</h3>
                  <p className="text-gray-700">
                    101 East Grand River Road<br />
                    East Lansing, MI 48823
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Phone</h3>
                  <p className="text-gray-700">
                    <a href="tel:+15175745033" className="hover:text-blue-600">
                      (517) 574-5033
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Hours of Operation</h3>
                  <table className="w-full text-gray-700">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">Monday-Wednesday</td>
                        <td className="py-2">11:00 AM - 12:00 AM</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">Thursday</td>
                        <td className="py-2">11:00 AM - 2:00 AM</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-medium">Friday-Saturday</td>
                        <td className="py-2">11:00 AM - 2:00 AM</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Sunday</td>
                        <td className="py-2">12:00 PM - 10:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Private Events</h3>
                  <p className="text-gray-700 mb-4">
                    Looking to host a private event? We offer specialized service for groups, game watches, graduation parties, and more. 
                  </p>
                  <a 
                    href="mailto:events@thelandsharkmsu.com" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Email our events team →
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Social Media</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://facebook.com/landsharkbarandgrill" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-900 hover:text-blue-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a 
                      href="https://instagram.com/landsharkeastlansing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-900 hover:text-blue-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com/landsharkbargrill" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-900 hover:text-blue-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.1095520014835!2d-84.48319522353222!3d42.73430827132897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8822e9cd1c15aab5%3A0x8f6ae55b7e7d7f06!2sLandshark%20Bar%20%26%20Grill!5e0!3m2!1sen!2sus!4v1701231138272!5m2!1sen!2sus" 
              width="100%" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Do you take reservations?</h3>
              <p className="text-gray-700">
                We don't take reservations for regular dining, but we do accommodate large parties and special events. Please contact us directly for group arrangements.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">What is the age requirement to enter?</h3>
              <p className="text-gray-700">
                We're family-friendly during dining hours. After 9 PM, we require guests to be 21+ years of age with valid ID.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Is there parking available?</h3>
              <p className="text-gray-700">
                Street parking is available, and there are several public parking lots and garages within walking distance. The closest parking garage is on Charles Street.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Can I host a private event at Landshark?</h3>
              <p className="text-gray-700">
                Yes! We offer private event spaces perfect for graduation parties, corporate events, birthdays, and more. Please email events@thelandsharkmsu.com for details and availability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Do you open early for MSU games?</h3>
              <p className="text-gray-700">
                Yes, we often open early for big MSU games. Check our social media for updated hours during special events and game days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 