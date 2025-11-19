import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/solucoes', label: 'Soluções' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white border-b border-[#E5E5E5] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#013440]">DataNerd</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#038C8C]'
                    : 'text-[#3F3F3F] hover:text-[#038C8C]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[#013440] hover:bg-[#026873] text-white transition-colors duration-300"
              onClick={() => window.open('https://wa.me/5511981793555', '_blank')}
            >
              Falar com a DataNerd
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#013440]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-base font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#038C8C]'
                    : 'text-[#3F3F3F]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="w-full bg-[#013440] hover:bg-[#026873] text-white transition-colors duration-300 mt-4"
              onClick={() => {
                window.open('https://wa.me/5511981793555', '_blank');
                setIsMenuOpen(false);
              }}
            >
              Falar com a DataNerd
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;