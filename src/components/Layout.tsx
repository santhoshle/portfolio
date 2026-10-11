import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Montserrat, Open_Sans } from 'next/font/google';
import data from '../data/data.json';
import { PortfolioData } from '../types';
import Header from './Header';
import Footer from './Footer';
import CursorSpotlight from './CursorSpotlight';

// Self-hosted at build time: no render-blocking request to Google Fonts
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans', display: 'swap' });

const { intro, socialLinks } = data as PortfolioData;

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useRouter();
  const page = intro.menus.find((menu) => menu.path === pathname);
  const title = page && page.path !== '/' ? `${page.title} | ${intro.name}` : intro.name;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <CursorSpotlight />
      <div
        className={`${montserrat.variable} ${openSans.variable} relative min-h-screen px-4 py-8 font-secondary bg-background text-text z-10`}
      >
        <Header data={intro} />

        {/* Keyed by route so each page fades in on navigation */}
        <main key={pathname} className="max-w-5xl mx-auto space-y-12 mt-4 animate-fade-in">
          {children}
        </main>

        <Footer links={socialLinks} name={intro.name} />
      </div>
    </>
  );
}
