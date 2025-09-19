
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-2 md:py-4 px-4 md:px-10 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Logo size="md" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-medium text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Features</a>
          <a href="#how-it-works" className="font-medium text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">How it works</a>
          <a href="#testimonials" className="font-medium text-gray-700 hover:text-rebuttl-blue transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-rebuttl-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Testimonials</a>
        </div>
        
        <div className="hidden md:flex gap-4">
          <Button variant="ghost" className="text-gray-700 hover:text-rebuttl-blue">
            Sign In
          </Button>
          <Button className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white">
            Sign Up
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 z-50">
          <div className="flex flex-col gap-4">
            <a href="#features" className="font-medium text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="font-medium text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>How it works</a>
            <a href="#testimonials" className="font-medium text-gray-700 hover:text-rebuttl-blue py-2 text-center" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
              <Button variant="ghost" className="text-gray-700 hover:text-rebuttl-blue" onClick={() => setMobileMenuOpen(false)}>
                Sign In
              </Button>
              <Button className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white" onClick={() => setMobileMenuOpen(false)}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
