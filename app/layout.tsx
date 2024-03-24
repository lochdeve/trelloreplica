import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './ui/NavBar';
import SideBar from './ui/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trello Clone',
  description: 'A Trello clone built with Next.js and React.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        <main
          style={{
            display: 'flex',
            flex: 1,
          }}
        >
          <SideBar />
          {children}
        </main>
      </body>
    </html>
  );
}
