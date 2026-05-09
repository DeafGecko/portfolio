// Root layout for the application, defining global styles and metadata
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '09 labs',
  description: 'Front-End Engineering portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
