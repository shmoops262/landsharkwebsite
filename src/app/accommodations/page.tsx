import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Accommodations | Landshark Bar & Grill',
  description: 'Host your next gathering at Landshark Bar & Grill in East Lansing. Perfect for MSU game days, birthdays, corporate events, and private parties.',
};

export default function Accommodations() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-2">Group Accommodations</h1>
        <h2 className="text-xl text-center text-blue-700 mb-8">The Perfect Venue for Your Next Gathering</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">We Accommodate Groups Of All Sizes</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Game day groups looking for the best sports viewing experience</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Bachelor and bachelorette parties</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Birthday celebrations with friends and family</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Corporate events and team-building outings</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Fantasy football draft parties with special packages</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Alumni watch parties with dedicated viewing areas</span>
              </li>
            </ul>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Ready to Book?</h3>
              <p className="text-gray-600 mb-4">
                We recommend making reservations at least 7 days in advance for groups of 10 or more. For the best experience and guaranteed seating, please use our online reservation system or contact us directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://www.lineLeap.com/landshark" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                  Reserve on LineLeap
                </Link>
                <Link href="/contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/accommodations-1.jpg" 
                alt="Large group enjoying food and drinks at Landshark Sports Bar" 
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/accommodations-2.jpg" 
                alt="Private event space at Landshark Sports Bar" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-blue-800 text-white p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-700 p-5 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Premium Audio & Visual</h4>
              <p>25+ HDTVs throughout the venue with dedicated sound zones for multiple games</p>
            </div>
            <div className="bg-blue-700 p-5 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Custom Food & Drink</h4>
              <p>Tailored food and drink packages with options to pre-order for your group</p>
            </div>
            <div className="bg-blue-700 p-5 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Flexible Spaces</h4>
              <p>Semi-private and full-private areas available depending on your group size</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 