'use client';

import { useEffect, useState } from 'react';

const shapes = [
  { type: 'circle', color: 'bg-primary/20', size: 'w-16 h-16' },
  { type: 'circle', color: 'bg-accent/20', size: 'w-24 h-24' },
  { type: 'circle', color: 'bg-secondary', size: 'w-12 h-12' },
  { type: 'square', color: 'bg-primary/15', size: 'w-20 h-20' },
  { type: 'triangle', color: 'text-accent/20', size: 'w-16 h-16' },
  { type: 'circle', color: 'bg-secondary/80', size: 'w-8 h-8' },
  { type: 'star', color: 'text-secondary', size: 'w-12 h-12' },
  { type: 'circle', color: 'bg-primary/10', size: 'w-32 h-32' },
];

export function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`absolute ${shape.size} ${shape.type === 'circle' || shape.type === 'square' ? shape.color : ''}`}
          style={{
            top: `${10 + ((index * 12) % 80)}%`,
            left: `${5 + ((index * 13) % 90)}%`,
            animation: `float-${index % 3} ${6 + index * 0.5}s ease-in-out infinite`,
            animationDelay: `${index * 0.3}s`,
            borderRadius:
              shape.type === 'circle'
                ? '50%'
                : shape.type === 'square'
                  ? '20%'
                  : '0',
            transform: shape.type === 'square' ? 'rotate(15deg)' : 'none',
          }}
        >
          {shape.type === 'triangle' && (
            <svg
              viewBox="0 0 100 100"
              className={`w-full h-full ${shape.color}`}
              fill="currentColor"
            >
              <polygon points="50,10 90,90 10,90" />
            </svg>
          )}
          {shape.type === 'star' && (
            <svg
              viewBox="0 0 100 100"
              className={`w-full h-full ${shape.color}`}
              fill="currentColor"
            >
              <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" />
            </svg>
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes float-0 {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }
        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(-5deg);
          }
        }
        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-25px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
