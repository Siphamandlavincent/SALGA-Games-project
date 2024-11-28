import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Logo />
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-green-500 font-medium transition-colors">About Us</a>
            <a href="#gallery" className="text-white hover:text-green-500 font-medium transition-colors">Gallery</a>
            <a href="#contact" className="text-white hover:text-green-500 font-medium transition-colors">Contact</a>
          </nav>
          <Menu className="h-8 w-8 text-white md:hidden" />
        </div>
      </div>
    </header>
  );
}