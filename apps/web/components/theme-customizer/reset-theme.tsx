'use client';

import { DEFAULT_THEME } from '../../app/lib/themes';
import { useThemeConfig } from '../active-theme';
import { Button } from '../ui/button';

export function ResetThemeButton() {
  const { setTheme } = useThemeConfig();

  const resetThemeHandle = () => {
    setTheme(DEFAULT_THEME);
  };

  return (
    <Button
      variant="destructive"
      className="mt-4 w-full"
      onClick={resetThemeHandle}
    >
      Reset to Default
    </Button>
  );
}
