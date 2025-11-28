import type React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { ChatWidget } from '@/components/chat-widget';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Fun School - The Place to Be',
  description:
    'Where learning meets adventure! Join our community of curious minds and creative spirits.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
