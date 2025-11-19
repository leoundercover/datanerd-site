import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/solucoes', label: 'Soluções' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-[#013440]/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-[#5E17EB] to-[#F80068] rounded-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"></div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-[#F80068] to-[#5E17EB] rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-[#5E17EB] tracking-tight">DataNerd</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(link.path)
                    ? 'text-[#013440]'
                    : 'text-[#64748B] hover:text-[#013440]'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#013440] to-[#593954] transition-all duration-300 ${
                    isActive(link.path) ? 'w-8' : 'w-0 group-hover:w-8'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-[#013440] to-[#593954] hover:shadow-xl hover:shadow-[#013440]/20 text-white rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 group"
              onClick={() => window.open('https://wa.me/5511981793555', '_blank')}
            >
              Falar com a DataNerd
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#013440] p-2 hover:bg-[#013440]/5 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 pb-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-[#013440] to-[#593954] text-white'
                    : 'text-[#64748B] hover:bg-[#013440]/5 hover:text-[#013440]'
                }`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="bg-gradient-to-r from-[#013440] to-[#593954] text-white rounded-xl px-4 py-3 text-sm font-medium mt-2 hover:shadow-lg transition-all duration-300"
              onClick={() => {
                window.open('https://wa.me/5511981793555', '_blank');
                setIsMenuOpen(false);
              }}
            >
              Falar com a DataNerd
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;