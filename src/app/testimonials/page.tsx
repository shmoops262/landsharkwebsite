import React from 'react';

export const metadata = {
  title: 'Testimonials | Landshark Bar & Grill',
  description: 'See what our customers are saying about their experience at Landshark Bar & Grill in East Lansing, MI',
};

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Best sports bar in East Lansing, hands down! The atmosphere during MSU game days is electric, and they have every game you could want to watch. The food is way better than your average bar food too!",
    author: "Michael R.",
    location: "East Lansing, MI"
  },
  {
    id: 2,
    quote: "I hosted my fantasy football draft party here and it was perfect. They reserved a section for us with our own TVs, and the staff was super attentive. Great selection of beers on tap too.",
    author: "Sarah T.",
    location: "Okemos, MI"
  },
  {
    id: 3,
    quote: "The Sharkbowls are amazing! My friends and I come here for every weekend home game. Never had a bad experience in the dozens of times we've been here during my years at MSU.",
    author: "David L.",
    location: "Lansing, MI"
  },
  {
    id: 4,
    quote: "As an MSU alum, I make it a point to stop by Landshark whenever I'm back in town. They always make sure the Spartans games are on with sound! Great place to watch sports.",
    author: "Jessica M.",
    location: "Grand Rapids, MI"
  },
  {
    id: 5,
    quote: "Great wings, cold beer, and all the games. What more could you ask for? The staff remembers regulars and makes you feel like part of the family.",
    author: "Chris B.",
    location: "Haslett, MI"
  },
  {
    id: 6,
    quote: "Brought our corporate team here for a team-building event. They accommodated our large group perfectly. Everyone had a blast with the DJs and enjoying the food and drinks.",
    author: "Lauren K.",
    location: "Lansing, MI"
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Customer Testimonials</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-700 text-center italic">
            "At Landshark Bar & Grill, we pride ourselves on providing outstanding service in a fun, energetic atmosphere. 
            Don't just take our word for it - see what our customers have to say!"
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full"
            >
              <blockquote className="flex-grow mb-4">
                <svg className="h-8 w-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </blockquote>
              <div className="mt-auto">
                <p className="text-blue-900 font-bold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">We'd Love to Hear from You!</h2>
          <p className="text-gray-700 mb-6">
            Had a great experience at Landshark? Leave us a review on Google or Yelp, or share your feedback directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300"
            >
              Google Review
            </a>
            <a 
              href="https://www.yelp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition duration-300"
            >
              Yelp Review
            </a>
            <a 
              href="/contact" 
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 