import type { Metadata } from 'next';
import Head from 'next/head';
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
    <html lang="ru">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
