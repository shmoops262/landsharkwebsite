import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Miami's Premier Sports Bar Experience
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Great food, cold drinks, and all the games you want to watch. Join us for the ultimate game day destination.
            </p>
            <Link 
              href="/menu/drink-menu" 
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-blue-900 font-bold rounded-md hover:bg-yellow-400 transition-colors"
            >
              See Our Menus
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Kick Back and Enjoy the Game Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Kick Back and Enjoy the Game
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                At Landshark, we take your sports viewing seriously. With over 25 HDTVs and a custom sound system, you'll never miss a moment of the action.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a fan of football, basketball, baseball, or any other sport, we've got you covered with all the major broadcasts and packages.
              </p>
            </div>
            <div className="relative h-72 md:h-96">
              <div className="absolute inset-0 bg-blue-900 rounded-lg transform rotate-1"></div>
              <div className="absolute inset-0 transform -rotate-1 overflow-hidden rounded-lg">
                <Image 
                  src="/images/sports-viewing.svg" 
                  alt="Sports bar with multiple TVs showing games" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Explore Our Menus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Drink Menu Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-2">
              <div className="h-48 bg-yellow-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Drink Menu</h3>
                <p className="text-gray-700 mb-4">
                  From craft cocktails to local brews, our extensive drink menu has something for everyone.
                </p>
                <Link 
                  href="/menu/drink-menu" 
                  className="text-yellow-500 font-bold hover:text-yellow-600 inline-flex items-center"
                >
                  Learn More 
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Food Menu Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-2">
              <div className="h-48 bg-blue-800 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Food Menu</h3>
                <p className="text-gray-700 mb-4">
                  Enjoy our delicious appetizers, burgers, pizzas and more while you watch the game.
                </p>
                <Link 
                  href="/menu/food-menu" 
                  className="text-yellow-500 font-bold hover:text-yellow-600 inline-flex items-center"
                >
                  Learn More 
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Tailgate Menu Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-2">
              <div className="h-48 bg-blue-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Tailgate Menu</h3>
                <p className="text-gray-700 mb-4">
                  Planning a gathering for the big game? Check out our special tailgate packages.
                </p>
                <Link 
                  href="/menu/tailgate-menu" 
                  className="text-yellow-500 font-bold hover:text-yellow-600 inline-flex items-center"
                >
                  Learn More 
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outstanding Service Banner */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl italic max-w-4xl mx-auto">
            "At Landshark Sports Bar, we pride ourselves on providing outstanding service in a fun, energetic atmosphere. Come join us and see why we're Miami's favorite game day destination!"
          </p>
        </div>
      </section>
    </div>
  );
}
