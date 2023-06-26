import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.Clear}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}
