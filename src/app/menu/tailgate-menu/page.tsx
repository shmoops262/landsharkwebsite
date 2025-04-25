import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Tailgate Menu | Landshark Sports Bar',
  description: 'Check out our special tailgate packages perfect for your next game day party or event',
};

export default function TailgateMenuPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Tailgate Menu</h1>
          
          {/* Hero Banner */}
          <div className="relative h-64 rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-yellow-500 to-blue-700">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-xl md:text-2xl font-medium text-center px-6">
                Planning a gathering for the big game? <br />
                Our tailgate packages are perfect for any sports event!
              </p>
            </div>
          </div>
          
          {/* Introduction */}
          <section className="mb-16 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Whether you're hosting at home or coming to our venue, we've got you covered with catering options that will make your game day special.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              All packages require 24-hour advance notice. Contact us for customized options!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors text-center"
              >
                Contact for Ordering
              </Link>
              <a 
                href="tel:+15551234567" 
                className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors font-bold text-center"
              >
                Call (555) 123-4567
              </a>
            </div>
          </section>
          
          {/* Package Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Tailgate Packages</h2>
            
            {/* First Down Package */}
            <div className="mb-12 bg-blue-50 rounded-lg overflow-hidden shadow-md">
              <div className="bg-blue-900 text-white py-4 px-6">
                <h3 className="text-2xl font-bold">The First Down Package</h3>
                <p className="text-yellow-300 font-medium">Serves 10-15 people</p>
              </div>
              
              <div className="p-6">
                <p className="text-blue-900 text-lg font-bold mb-4">$150</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-800 mb-2">Includes:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>50 traditional wings (choice of 2 flavors)</li>
                    <li>2 large pizzas (choice of toppings)</li>
                    <li>Loaded nachos platter</li>
                    <li>Garden salad with assorted dressings</li>
                    <li>Plates, utensils, and napkins</li>
                  </ul>
                </div>
                
                <p className="text-gray-600 italic">
                  Add soft drinks or bottled water package for an additional $25
                </p>
              </div>
            </div>
            
            {/* Touchdown Package */}
            <div className="mb-12 bg-blue-50 rounded-lg overflow-hidden shadow-md">
              <div className="bg-blue-800 text-white py-4 px-6">
                <h3 className="text-2xl font-bold">The Touchdown Package</h3>
                <p className="text-yellow-300 font-medium">Serves 20-25 people</p>
              </div>
              
              <div className="p-6">
                <p className="text-blue-900 text-lg font-bold mb-4">$275</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-800 mb-2">Includes:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>100 traditional wings (choice of 3 flavors)</li>
                    <li>4 large pizzas (choice of toppings)</li>
                    <li>Loaded nachos platter</li>
                    <li>Mozzarella sticks platter</li>
                    <li>Garden salad with assorted dressings</li>
                    <li>Assorted cookie platter</li>
                    <li>Plates, utensils, and napkins</li>
                  </ul>
                </div>
                
                <p className="text-gray-600 italic">
                  Add soft drinks or bottled water package for an additional $45
                </p>
              </div>
            </div>
            
            {/* Championship Package */}
            <div className="mb-12 bg-yellow-50 rounded-lg overflow-hidden shadow-md border-2 border-yellow-500">
              <div className="bg-yellow-600 text-white py-4 px-6">
                <h3 className="text-2xl font-bold">The Championship Package</h3>
                <p className="text-blue-900 font-medium">Serves 30-40 people</p>
                <span className="inline-block mt-1 px-3 py-1 bg-blue-900 text-white text-sm rounded-full">MOST POPULAR</span>
              </div>
              
              <div className="p-6">
                <p className="text-blue-900 text-lg font-bold mb-4">$450</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-800 mb-2">Includes:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>150 traditional wings (choice of 4 flavors)</li>
                    <li>6 large pizzas (choice of toppings)</li>
                    <li>Loaded nachos platter</li>
                    <li>Mozzarella sticks platter</li>
                    <li>Spinach & artichoke dip with chips</li>
                    <li>2 garden salads with assorted dressings</li>
                    <li>Buffalo chicken dip with chips</li>
                    <li>Assorted cookie and brownie platter</li>
                    <li>Soft drinks and water included</li>
                    <li>Plates, utensils, and napkins</li>
                  </ul>
                </div>
                
                <p className="text-gray-600 italic">
                  Add disposable chafing dishes with stands and fuel for $30
                </p>
              </div>
            </div>
          </section>
          
          {/* Build Your Own Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Build Your Own Package</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-6">
                Don't see exactly what you're looking for? Create your own package by selecting items from our catering menu below. Minimum order of $100 required.
              </p>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Wings</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Traditional Wings (50 pc)</span>
                      <span className="font-semibold">$60</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Traditional Wings (100 pc)</span>
                      <span className="font-semibold">$110</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Boneless Wings (50 pc)</span>
                      <span className="font-semibold">$50</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Boneless Wings (100 pc)</span>
                      <span className="font-semibold">$90</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Platters</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Loaded Nachos Platter</span>
                      <span className="font-semibold">$35</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mozzarella Sticks Platter</span>
                      <span className="font-semibold">$30</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Spinach & Artichoke Dip</span>
                      <span className="font-semibold">$35</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Buffalo Chicken Dip</span>
                      <span className="font-semibold">$35</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Pizzas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Large Cheese Pizza</span>
                      <span className="font-semibold">$14</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Large 1-Topping Pizza</span>
                      <span className="font-semibold">$16</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Large Specialty Pizza</span>
                      <span className="font-semibold">$20</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Sides & Extras</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Garden Salad</span>
                      <span className="font-semibold">$25</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Cookie Platter</span>
                      <span className="font-semibold">$20</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Brownie Platter</span>
                      <span className="font-semibold">$25</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Soft Drinks Package (serves 10)</span>
                      <span className="font-semibold">$25</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Ordering Information */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Ordering Information</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-900 min-w-[24px]">1.</span>
                  <span>All tailgate orders require 24-hour advance notice (48 hours recommended for large orders)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-900 min-w-[24px]">2.</span>
                  <span>Delivery available within a 10-mile radius for orders over $150 (additional delivery fee may apply)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-900 min-w-[24px]">3.</span>
                  <span>Call us at (555) 123-4567 or visit our contact page to place your order</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-900 min-w-[24px]">4.</span>
                  <span>We can accommodate most dietary restrictions with advance notice</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-900 min-w-[24px]">5.</span>
                  <span>Ask about our game day specials for dine-in group reservations!</span>
                </li>
              </ul>
            </div>
          </section>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 italic">
              *Prices and availability subject to change. Please place your order in advance to ensure availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 