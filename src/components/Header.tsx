import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IntroData } from '../types';

interface HeaderProps {
  data?: IntroData;
}

export default function Header({ data }: HeaderProps) {
  const { pathname } = useRouter();
  const {
    name = '',
    role = '',
    subHeading = '',
    menus = [],
  } = data || {};

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-center gap-x-4 gap-y-1 p-4 shadow-md bg-background/95 backdrop-blur-md"
      >
        {menus.map((menu) => (
          <Link
            key={menu.id}
            href={menu.path}
            aria-current={pathname === menu.path ? 'page' : undefined}
            className={`text-m px-4 py-2 rounded hover:underline transition-all ${
              pathname === menu.path ? 'text-primary' : 'text-text'
            }`}
          >
            {menu.title}
          </Link>
        ))}
      </nav>

      <div className="h-20" />

      <div className="text-center pb-4">
        <h1 className="pb-1 text-4xl font-bold font-primary text-primary">{name}</h1>
        <h2 className="text-2xl text-gray-300">{role}</h2>
        <p className="mt-2 text-lg text-gray-400">{subHeading}</p>
      </div>
    </>
  );
}
