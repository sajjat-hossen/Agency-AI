import { useEffect } from 'react';
import assets from '../assets/assets';

interface ThemeToggleBtnProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeToggleBtn = ({ theme, setTheme }: ThemeToggleBtnProps) => {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <button>
        {theme === 'light' ? (
          <img
            src={assets.moon_icon}
            onClick={() => setTheme('dark')}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt="Moon Icon"
          />
        ) : (
          <img
            src={assets.sun_icon}
            onClick={() => setTheme('light')}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt="Sun Icon"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
