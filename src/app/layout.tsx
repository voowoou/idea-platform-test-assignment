import type { Metadata } from 'next';
import './globals.sass';

export const metadata: Metadata = {
  title: 'Buy Tickets',
  description: 'Idea Platform Test Assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
