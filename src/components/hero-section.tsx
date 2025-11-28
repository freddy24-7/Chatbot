'use client';

import { Button } from '@/components/ui/button';
import { FloatingElements } from '@/components/floating-elements';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <FloatingElements />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-secondary-foreground">
              Enrolling for 2025-2026
            </span>
          </div>

          {/* Main Heading with Animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            <span className="block">Where Learning</span>
            <span className="block text-primary relative">
              Meets Adventure
              <svg
                className="absolute -bottom-2 left-0 w-full h-4 text-secondary"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C30 4 70 2 100 6C130 10 170 8 198 4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 leading-relaxed">
            Join our community of curious minds and creative spirits. At The Fun
            School, every day is a new discovery!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 py-6 text-lg group"
            >
              Schedule a Visit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold rounded-full px-8 py-6 text-lg bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary">
                500+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Happy Students
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-accent">
                25+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Expert Teachers
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary">
                15
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Years of Fun
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  );
}
