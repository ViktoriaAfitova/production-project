import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(currentTheme);
    document.body.className = currentTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
  };

  return { theme, toggleTheme };
}
