import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Careers | Landshark Sports Bar',
  description: 'Join our team at Landshark Sports Bar. We\'re hiring for positions in service, kitchen, and management.',
};

// Open positions data
const positions = [
  {
    id: 1,
    title: "Bartender",
    type: "Full-time / Part-time",
    description: "Crafting and serving drinks in our fast-paced sports bar environment. Must have minimum 2 years experience."
  },
  {
    id: 2,
    title: "Server",
    type: "Full-time / Part-time",
    description: "Providing exceptional customer service while taking orders and serving food and beverages."
  },
  {
    id: 3,
    title: "Line Cook",
    type: "Full-time",
    description: "Preparing high-quality dishes in a high-volume kitchen. Experience with bar food and appetizers a plus."
  },
  {
    id: 4,
    title: "Host/Hostess",
    type: "Part-time",
    description: "Greeting customers, managing reservations, and ensuring a positive first impression."
  },
  {
    id: 5,
    title: "Kitchen Manager",
    type: "Full-time",
    description: "Overseeing kitchen operations, inventory, and staff. Minimum 3 years in a management role required."
  },
  {
    id: 6,
    title: "Bar Back",
    type: "Part-time",
    description: "Supporting bartenders by restocking supplies, cleaning glasses, and maintaining bar cleanliness."
  }
];

export default function CareersPage() {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">Join Our Team</h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          At Landshark Sports Bar, we're always looking for passionate, energetic team members who love sports and providing great customer experiences.
        </p>
        
        {/* Now Hiring Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Now Hiring</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {positions.map((position) => (
              <div key={position.id} className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{position.title}</h3>
                <p className="text-yellow-600 font-medium mb-3">{position.type}</p>
                <p className="text-gray-600">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Application Process */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-900 text-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Apply Now!</h2>
            <p className="text-lg mb-4">
              To apply for any of our open positions, please download and complete our application form. You can submit your completed application:
            </p>
            
            <ul className="list-disc list-inside space-y-2 mb-6 pl-4">
              <li>In person during business hours (11am-12am daily)</li>
              <li>Via email to <a href="mailto:jobs@landsharkbar.com" className="text-yellow-300 hover:underline">jobs@landsharkbar.com</a></li>
            </ul>
            
            <div className="flex justify-center">
              <a 
                href="/documents/landshark-application.pdf" 
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-md transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Application Form
              </a>
            </div>
          </div>
          
          {/* Why Work With Us */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Why Work With Us?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Competitive Pay</h3>
                <p className="text-gray-600">Earn great wages plus tips in our high-volume environment</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Team Environment</h3>
                <p className="text-gray-600">Join a supportive, fun team that feels like family</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">Potential for advancement and career development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 