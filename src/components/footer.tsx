import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-black text-lg">
                  F
                </span>
              </div>
              <div>
                <span className="font-extrabold text-lg text-background">
                  The Fun School
                </span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Where every child discovers the joy of learning through
              creativity, play, and exploration.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-background/70 hover:text-primary transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-background mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#programs"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="#admission"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#events"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Events & News
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-background mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Pre-Kindergarten
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Kindergarten
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Primary School
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  After-School Care
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  Summer Camp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-background mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  123 Learning Lane
                  <br />
                  Sunshine City, SC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@thefunschool.edu"
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  hello@thefunschool.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} The Fun School. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-background/50 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-background/50 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
