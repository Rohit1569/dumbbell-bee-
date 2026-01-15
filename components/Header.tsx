
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Classes', href: '#classes' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo with Bee-to-Gym Morphing Hover Effect */}
        <a href="#home" className="flex items-center gap-2 group relative">
          <div className="bg-amber-500 p-1.5 rounded-lg group-hover:animate-pulse transition-all relative overflow-hidden">
            <Dumbbell className="w-6 h-6 text-black relative z-10 group-hover:scale-90 transition-transform" />
            {/* Animated Wings on Hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40 rounded-full blur-[1px] -rotate-45 animate-bounce"></div>
              <div className="absolute top-0 right-0 w-full h-1/2 bg-white/40 rounded-full blur-[1px] rotate-45 animate-bounce"></div>
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl md:text-2xl font-bold tracking-tighter heading-font">
              DUMBBELL <span className="text-amber-500 group-hover:animate-pulse">BEE</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-400">Fitness & Wellness</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-amber-500 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+919021312105" 
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 text-sm"
          >
            <Phone className="w-4 h-4" />
            CALL NOW
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-zinc-100 hover:text-amber-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-zinc-950 z-40 p-6 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold heading-font hover:text-amber-500 uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+919021312105" 
            className="mt-4 flex items-center justify-center gap-3 bg-amber-500 text-black py-4 rounded-xl font-bold text-lg"
          >
            <Phone className="w-6 h-6" />
            CALL NOW
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
