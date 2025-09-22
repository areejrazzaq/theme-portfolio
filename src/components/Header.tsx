import React, { useState } from 'react';
import { CoffeeIcon, MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 w-full bg-friends-maroon text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CoffeeIcon size={24} />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
            <span className="text-friends-nude">THE ONE WITH</span> MY PORTFOLIO
          </h1>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#introduction" className="hover:text-friends-nude transition-colors">
            Introduction
          </a>
          <a href="#accomplishments" className="hover:text-friends-nude transition-colors">
            Accomplishments
          </a>
          <a href="#goals" className="hover:text-friends-nude transition-colors">
            Future Goals
          </a>
          <a href="#skills" className="hover:text-friends-nude transition-colors">
            The 3 Cs
          </a>
        </nav>
        {/* Mobile navigation */}
        {isMenuOpen && <nav className="absolute top-full left-0 w-full bg-friends-maroon p-4 flex flex-col space-y-4 md:hidden">
            <a href="#introduction" className="hover:text-friends-nude transition-colors" onClick={() => setIsMenuOpen(false)}>
              Introduction
            </a>
            <a href="#accomplishments" className="hover:text-friends-nude transition-colors" onClick={() => setIsMenuOpen(false)}>
              Accomplishments
            </a>
            <a href="#goals" className="hover:text-friends-nude transition-colors" onClick={() => setIsMenuOpen(false)}>
              Future Goals
            </a>
            <a href="#skills" className="hover:text-friends-nude transition-colors" onClick={() => setIsMenuOpen(false)}>
              The 3 Cs
            </a>
          </nav>}
      </div>
    </header>;
}