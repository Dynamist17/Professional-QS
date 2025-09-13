import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? darkMode 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50' 
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-colors ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            AbdulAzeez Ahmad
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 hover:scale-105 ${
                  darkMode 
                    ? 'text-slate-300 hover:text-orange-400' 
                    : 'text-slate-700 hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                darkMode 
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700 shadow-lg' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 shadow-md'
              }`}
              aria-label="Toggle dark mode"
            >
              <div className="relative">
                {darkMode ? (
                  <Sun size={20} className="animate-pulse" />
                ) : (
                  <Moon size={20} className="animate-pulse" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors hover:scale-110 ${
              darkMode 
                ? 'text-slate-300 hover:text-orange-400' 
                : 'text-slate-700 hover:text-orange-500'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`absolute top-full left-0 right-0 shadow-lg border-t ${
            darkMode ? 'bg-slate-900/95 backdrop-blur-md border-slate-700' : 'bg-white/95 backdrop-blur-md border-slate-200'
          }`}>
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left font-medium py-2 transition-colors hover:translate-x-2 ${
                    darkMode 
                      ? 'text-slate-300 hover:text-orange-400' 
                      : 'text-slate-700 hover:text-orange-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className={`flex items-center space-x-2 w-full text-left font-medium py-2 transition-colors hover:translate-x-2 ${
                  darkMode 
                    ? 'text-slate-300 hover:text-orange-400' 
                    : 'text-slate-700 hover:text-orange-500'
                }`}
              >
                {darkMode ? <Sun size={20} className="animate-pulse" /> : <Moon size={20} className="animate-pulse" />}
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;