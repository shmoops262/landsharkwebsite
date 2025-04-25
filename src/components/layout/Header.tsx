"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.svg" 
            alt="Landshark Logo" 
            width={200} 
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          
          {/* Menu Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-yellow-300">
              Menu
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-blue-800 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link href="/menu/drink-menu" className="block px-4 py-2 hover:bg-blue-700">Drink Menu</Link>
              <Link href="/menu/food-menu" className="block px-4 py-2 hover:bg-blue-700">Food Menu</Link>
              <Link href="/menu/tailgate-menu" className="block px-4 py-2 hover:bg-blue-700">Tailgate Menu</Link>
            </div>
          </div>
          
          <Link href="/events" className="hover:text-yellow-300">Events</Link>
          <Link href="/accommodations" className="hover:text-yellow-300">Accommodations</Link>
          <Link href="/gallery" className="hover:text-yellow-300">Gallery</Link>
          <Link href="/testimonials" className="hover:text-yellow-300">Testimonials</Link>
          <Link href="/careers" className="hover:text-yellow-300">Careers</Link>
          <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-800`}>
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-3 pb-4">
            <Link href="/" className="py-2 hover:text-yellow-300">Home</Link>
            <div className="py-2">
              <p className="font-medium mb-2">Menu</p>
              <div className="pl-4 flex flex-col space-y-2">
                <Link href="/menu/drink-menu" className="hover:text-yellow-300">Drink Menu</Link>
                <Link href="/menu/food-menu" className="hover:text-yellow-300">Food Menu</Link>
                <Link href="/menu/tailgate-menu" className="hover:text-yellow-300">Tailgate Menu</Link>
              </div>
            </div>
            <Link href="/events" className="py-2 hover:text-yellow-300">Events</Link>
            <Link href="/accommodations" className="py-2 hover:text-yellow-300">Accommodations</Link>
            <Link href="/gallery" className="py-2 hover:text-yellow-300">Gallery</Link>
            <Link href="/testimonials" className="py-2 hover:text-yellow-300">Testimonials</Link>
            <Link href="/careers" className="py-2 hover:text-yellow-300">Careers</Link>
            <Link href="/contact" className="py-2 hover:text-yellow-300">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 