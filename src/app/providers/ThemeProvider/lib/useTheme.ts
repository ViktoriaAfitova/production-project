import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let currentTheme: Theme;

    switch (theme) {
    case Theme.DARK:
      currentTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      currentTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      currentTheme = Theme.DARK;
      break;
    default:
      currentTheme = Theme.LIGHT;
    }

    setTheme?.(currentTheme);
    document.body.className = currentTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
