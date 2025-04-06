import React from 'react';

interface HeaderProps {
  data: {
    name: string;
    role: string;
    subHeading: string;
    menus: { id: string; title: string }[];
  };
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export default function Header({ data, activeSection, setActiveSection }: HeaderProps) {
  return (
    <>
      {/* Fixed menu at the top */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-4 p-4 shadow-md bg-background/95 backdrop-blur-md"
        style={{ fontFamily: 'Open Sans' }}
      >
        {data.menus.map(menu => (
          <button
            key={menu.id}
            onClick={() => setActiveSection(menu.id)}
            className={`text-m px-4 py-2 rounded hover:underline transition-all ${activeSection === menu.id ? 'text-primary' : 'text-text'}`}
          >
            {menu.title}
          </button>
        ))}
      </nav>

      {/* Add spacing so content doesn't overlap the fixed nav */}
      <div className="h-20" />

      {/* Name, Role, and Subheading below menu */}
      <div className="text-center pb-18">
        <h1 className="pb-1 text-4xl font-bold font-primary text-primary">{data.name}</h1>
        <h2 className="text-2xl text-gray-300">{data.role}</h2>
        <p className="mt-2 text-lg text-gray-400">{data.subHeading}</p>
      </div>
    </>
  );
}
