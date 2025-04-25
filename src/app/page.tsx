import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landshark Bar & Grill | East Lansing, MI | Home of the Sharkbowl',
  description: 'Landshark Bar & Grill in East Lansing - Serving delicious food, famous Sharkbowls, and featuring DJs every Thursday through Saturday. An essential part of the MSU experience for over 30 years.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{
               backgroundImage: "url('/images/hero-bg.svg')",
               backgroundSize: "cover",
               backgroundPosition: "center"
             }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to Landshark Bar & Grill</h1>
            <p className="text-xl md:text-2xl mb-8">East Lansing's premier sports bar and nightlife destination for over 30 years. Home of the famous Sharkbowl!</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                View Our Menu
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-lg transition duration-300">
                Find Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Landshark?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              An essential part of the Michigan State University experience since 1993
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Quality Food & Drinks</h3>
              <p className="text-gray-700">
                Freshly made-in-house, American style bar food. Try our famous Sharkbowl cocktail, Duck Burger, Pesto Chicken Sandwich, or our thin crust Greek Pizza!
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Ultimate Sports Viewing</h3>
              <p className="text-gray-700">
                Watch all your favorite sports on our 25+ TVs with custom sound system. We're the best place to catch MSU games with fellow Spartans!
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">Vibrant Nightlife</h3>
              <p className="text-gray-700">
                Experience East Lansing's best nightlife with DJs every Thursday through Saturday. Dance the night away while enjoying our signature Sharkbowls!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Join Us Today</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Located in the heart of East Lansing near Michigan State University, we offer lunch, dinner, and a vibrant nightclub atmosphere. Come see why we've been an essential part of the MSU experience for over 30 years!
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Link href="/menu" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Browse Our Menu
            </Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-16 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "The best sports bar near campus! The Sharkbowl is a must-try, and their duck burger is incredible. Love watching Spartans games here with all the TVs and great atmosphere."
              </blockquote>
              <div className="font-bold text-blue-900">Mike S. - MSU Alumni</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "Thursday nights at Landshark are unbeatable! Great DJ, fantastic drinks, and such a fun atmosphere. The Sharkbowl is truly legendary - there's nothing else like it in East Lansing!"
              </blockquote>
              <div className="font-bold text-blue-900">Sarah K. - East Lansing Resident</div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4">
                "I've been coming to Landshark since my freshman year. It's an East Lansing institution! The Greek pizza is amazing, and nothing beats watching MSU basketball here. A must-visit for anyone in the area."
              </blockquote>
              <div className="font-bold text-blue-900">Jason T. - MSU Senior</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events/Specials Highlight */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Weekly Specials & Events</h2>
              <p className="text-lg mb-8">
                Join us throughout the week for amazing food and drink specials!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <span className="font-bold">M</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Monday</h3>
                    <p>$5 Burger Night & $3 Domestic Drafts</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <span className="font-bold">T</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tuesday</h3>
                    <p>Taco Tuesday - $2 Tacos & $5 Margaritas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <span className="font-bold">W</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Wednesday</h3>
                    <p>Wing Wednesday - 75¢ Wings & $4 Craft Beers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <span className="font-bold">T</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Thursday</h3>
                    <p>$5 Sharkbowls & DJ Night Starting at 10PM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <span className="font-bold">F/S</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Friday & Saturday</h3>
                    <p>DJ Nights & Dance Floor - Weekend Drink Specials</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-blue-700 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <span className="font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sunday</h3>
                    <p>Sunday Funday - $4 Bloody Marys & $4 Mimosas</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/events" className="inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
                  View All Events
                </Link>
              </div>
            </div>
            
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Experience the Famous Sharkbowl!</h3>
              <p className="mb-6">
                Our signature cocktail that's been an East Lansing favorite for decades. Available in original blue and other seasonal flavors.
              </p>
              <p className="mb-6">
                <span className="font-bold">DJ NIGHTS:</span> Every Thursday, Friday, and Saturday starting at 10PM. Dance the night away with East Lansing's best DJs!
              </p>
              <p className="mb-6">
                <span className="font-bold">GAME DAYS:</span> The ultimate destination for MSU sports! We open early for big games with special game day menus.
              </p>
              <div>
                <Link href="/menu/drinks-menu" className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  View Drink Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
