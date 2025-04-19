// src/components/Navbar.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/buttons';
import { ModeToggle } from './mode-toggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="font-bold text-xl">TeeFS</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link to="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link to="/login">Sign Up</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/#features" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#pricing" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/#testimonials" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/#contact" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex gap-4 mt-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/login">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;