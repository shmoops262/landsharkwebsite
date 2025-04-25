import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Menu | Landshark Bar & Grill',
  description: 'Explore our delicious food, drinks, and tailgate menus at Landshark Bar & Grill.',
};

export default function MenuPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Our Menus</h1>
          
          <p className="text-xl text-center text-gray-700 mb-12">
            At Landshark, we pride ourselves on serving delicious food and drinks in a fun, sports-focused atmosphere.
            Explore our menus below to find your game day favorites!
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Food Menu Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-3">Food Menu</h2>
                <p className="text-gray-600 mb-6">
                  Burgers, wings, pizzas, and more! Check out our delicious food options perfect for any game day.
                </p>
                <Link href="/menu/food-menu" className="block w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-4 rounded-md text-center transition-colors">
                  View Food Menu
                </Link>
              </div>
            </div>
            
            {/* Drink Menu Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-yellow-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-3">Drink Menu</h2>
                <p className="text-gray-600 mb-6">
                  Specialty cocktails, craft beers, famous Sharkbowls, and more to quench your thirst!
                </p>
                <Link href="/menu/drink-menu" className="block w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-3 px-4 rounded-md text-center transition-colors font-bold">
                  View Drink Menu
                </Link>
              </div>
            </div>
            
            {/* Tailgate Menu Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-green-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-900 mb-3">Tailgate Menu</h2>
                <p className="text-gray-600 mb-6">
                  Planning a party? Our tailgate packages are perfect for your next game day gathering!
                </p>
                <Link href="/menu/tailgate-menu" className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md text-center transition-colors">
                  View Tailgate Menu
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center space-y-4">
            <h2 className="text-2xl font-bold text-blue-900">Visit Us Today</h2>
            <p className="text-gray-600">
              Join us for the best sports viewing experience, delicious food, and amazing drinks!
            </p>
            <Link href="/contact" className="inline-block bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-md text-center transition-colors">
              Find Our Location
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 