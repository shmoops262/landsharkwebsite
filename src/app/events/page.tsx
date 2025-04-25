import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Users, Music, Star } from 'lucide-react';

export const metadata = {
  title: 'Events | Landshark Sports Bar',
  description: 'Host your next private event at Landshark or check out our weekly events and specials',
};

export default function EventsPage() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Events</h1>
          
          {/* Private Events Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Host Your Next Event at Landshark</h2>
                
                <p className="text-lg mb-8">
                  Looking for the perfect venue for your next celebration or gathering? Landshark Sports Bar offers flexible private event options for groups of all sizes.
                </p>
                
                <div className="grid gap-6 md:grid-cols-2 mb-8">
                  <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold flex items-center mb-4">
                      <Users className="mr-2 h-5 w-5" /> Perfect For
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Birthday Parties
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Corporate Events
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Bachelor/Bachelorette Parties
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Sports Watch Parties
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Holiday Celebrations
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Graduation Parties
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold flex items-center mb-4">
                      <Star className="mr-2 h-5 w-5" /> What We Offer
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Flexible seating arrangements
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Custom food and drink packages
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Reserved viewing areas for games
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Audio/visual capabilities
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Private bar options
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-300 mr-2">•</span>
                        Personalized service
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors"
                  >
                    Book Your Event
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Weekly Events Section */}
          <section>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Weekly Events & Specials</h2>
            
            <div className="space-y-6">
              {/* Monday */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-900 text-white py-3 px-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> Monday
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">All Day</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Monday Night Football</h4>
                  <p className="text-gray-700 mb-3">
                    $15 Domestic Buckets (5 beers) & $10 Wing Baskets during all NFL games
                  </p>
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">4PM - 7PM</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Happy Hour</h4>
                  <p className="text-gray-700">
                    Half-price appetizers and $2 off all drinks
                  </p>
                </div>
              </div>
              
              {/* Tuesday */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-900 text-white py-3 px-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> Tuesday
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">7PM - 10PM</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Trivia Night</h4>
                  <p className="text-gray-700 mb-3">
                    Test your knowledge with our weekly trivia competition. Prizes for top teams!
                  </p>
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">All Day</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Taco Tuesday</h4>
                  <p className="text-gray-700">
                    $2 Tacos and $5 Margaritas all day
                  </p>
                  
                  <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center text-blue-900 mb-2">
                      <Music className="mr-2 h-5 w-5" />
                      <span className="font-bold">Instagram: @landshark_trivia</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Follow us on Instagram to see weekly trivia winners and upcoming themes!
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Wednesday */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-900 text-white py-3 px-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> Wednesday
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">6PM - Close</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Wing Wednesday</h4>
                  <p className="text-gray-700 mb-3">
                    50¢ wings (minimum 10) and $3 draft beers
                  </p>
                </div>
              </div>
              
              {/* Thursday */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-900 text-white py-3 px-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> Thursday
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">8PM - 11PM</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Karaoke Night</h4>
                  <p className="text-gray-700 mb-3">
                    Show off your singing skills with our professional karaoke setup
                  </p>
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">All Day</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Thirsty Thursday</h4>
                  <p className="text-gray-700">
                    $3 Domestic Bottles and $5 Signature Cocktails
                  </p>
                </div>
              </div>
              
              {/* Friday */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-900 text-white py-3 px-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> Friday
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">4PM - 7PM</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Extended Happy Hour</h4>
                  <p className="text-gray-700 mb-3">
                    Half-price appetizers and $2 off all drinks
                  </p>
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">9PM - Close</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">DJ Night</h4>
                  <p className="text-gray-700">
                    Live DJ spinning the latest hits
                  </p>
                </div>
              </div>
              
              {/* Saturday */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-900 text-white py-3 px-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> Saturday
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">11AM - 3PM</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Game Day Brunch</h4>
                  <p className="text-gray-700 mb-3">
                    Special brunch menu with $5 Bloody Marys and Mimosas
                  </p>
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">All Day</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">College Game Day</h4>
                  <p className="text-gray-700">
                    Watch all the college games with $15 Domestic Buckets and $5 Shots when your team scores
                  </p>
                </div>
              </div>
              
              {/* Sunday */}
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-blue-900 text-white py-3 px-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> Sunday
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">11AM - 3PM</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">Game Day Brunch</h4>
                  <p className="text-gray-700 mb-3">
                    Special brunch menu with $5 Bloody Marys and Mimosas
                  </p>
                  <div className="flex items-center mb-2">
                    <Clock className="mr-2 h-4 w-4 text-blue-900" /> 
                    <span className="font-medium">All Day</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-1">NFL Sunday</h4>
                  <p className="text-gray-700 mb-2">
                    Watch all the NFL games with sound and special game day menu
                  </p>
                  
                  <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center text-blue-900 mb-2">
                      <Music className="mr-2 h-5 w-5" />
                      <span className="font-bold">Instagram: @landshark_sundayfunday</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Check out our Instagram for game day specials and fan highlights!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 italic">
              *Events and specials are subject to change. Please call ahead to confirm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 