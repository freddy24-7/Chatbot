'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openChat = () => {
    const event = new CustomEvent('openChat');
    window.dispatchEvent(event);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-black text-lg md:text-xl">
                F
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg md:text-xl text-foreground leading-tight">
                The Fun School
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                The place to be
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              About Us
            </Link>
            <Link
              href="#programs"
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Programs
            </Link>
            <Link
              href="#gallery"
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-semibold"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                openChat();
              }}
              className="hidden sm:flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-6"
            >
              <MessageCircle className="w-4 h-4" />
              {'Parent? Chat with us!'}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4">
              <Link
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#programs"
                className="text-foreground hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                href="#gallery"
                className="text-foreground hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                onClick={() => {
                  openChat();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                Parent? Chat with us!
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
