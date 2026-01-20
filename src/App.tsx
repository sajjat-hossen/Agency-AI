import { useState } from 'react';
import Navbar from './components/Navbar';

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
    </div>
  );
}
