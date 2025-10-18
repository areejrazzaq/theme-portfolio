import React, { useState } from 'react';
import { CoffeeIcon, MenuIcon, XIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CoffeeIcon size={24} />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
            <a href="#" className="text-accent">&nbsp;&lt;AREEJ /&gt;</a>
          </h1>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {location.pathname === '/' ? (
            <>
              <a href="#about-me" className="hover:text-accent transition-colors flex items-center">
                About Me
              </a>
              <a href="#projects" className="hover:text-accent transition-colors flex items-center">
                Projects
              </a>
              
              <a href="#connect" className="transition-colors hover:bg-accent-foreground hover:text-accent px-3 py-1 rounded-full font-semibold bg-accent text-accent-foreground flex items-center">
                Let's Connect 
              </a>
            </>
          ) : (
            <Link to="/" className="hover:text-accent transition-colors flex items-center">
              Home
            </Link>
          )}
        </nav>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 w-full bg-primary p-4 flex flex-col space-y-4 md:hidden shadow-lg">
            {location.pathname === '/' ? (
              <>
                <a href="#about-me" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Story
                </a>
                <a href="#projects" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </a>
                <a href="#connect" className="transition-colors font-semibold text-accent" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
              </>
            ) : (
              <Link to="/" className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}