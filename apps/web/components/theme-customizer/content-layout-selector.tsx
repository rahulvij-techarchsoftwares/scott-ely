'use client';

import { useThemeConfig } from '../active-theme';
import { Label } from '../ui/label';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';

export function ContentLayoutSelector() {
  const { theme, setTheme } = useThemeConfig();

  return (
    <div className="hidden flex-col gap-4 lg:flex">
      <Label>Content layout</Label>
      <ToggleGroup
        value={theme.contentLayout}
        type="single"
        onValueChange={(value) =>
          setTheme({ ...theme, contentLayout: value as any })
        }
        className="*:border-input w-full gap-4 *:rounded-md *:border"
      >
        <ToggleGroupItem variant="outline" value="full">
          Full
        </ToggleGroupItem>
        <ToggleGroupItem
          variant="outline"
          value="centered"
          className="data-[variant=outline]:border-l-1"
        >
          Centered
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
