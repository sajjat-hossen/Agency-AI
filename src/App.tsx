import { useState } from 'react';
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import { TrustedBy } from './components/TrustedBy';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    localStorage.getItem('theme') ? (localStorage.getItem('theme') as 'light' | 'dark') : 'light'
  );

  return (
    <div className="dark:bg-black relative">
      <Navbar
        theme={theme}
        setTheme={setTheme}
      />
      <Hero></Hero>
      <TrustedBy></TrustedBy>
    </div>
  );
}
