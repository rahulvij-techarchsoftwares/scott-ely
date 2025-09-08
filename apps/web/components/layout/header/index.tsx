'use client';

import * as React from 'react';

import { PanelLeftIcon } from 'lucide-react';

import { ThemeCustomizerPanel } from '../../theme-customizer';
import { Button } from '../../ui/button';
import { useSidebar } from '../../ui/sidebar';
import Notifications from './notifications';
import Search from './search';
import ThemeSwitch from './theme-switch';
import UserMenu from './user-menu';

export default function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="sticky top-0 z-50 flex flex-col">
      <header className="bg-background/50 flex h-14 items-center gap-3 px-4 backdrop-blur-xl lg:h-[60px]">
        <Button
          onClick={toggleSidebar}
          size="icon"
          variant="outline"
          className="flex md:hidden lg:flex"
        >
          <PanelLeftIcon />
        </Button>
        <Search />
        <Notifications />
        <ThemeCustomizerPanel />
        <ThemeSwitch />
        <UserMenu />
      </header>
    </div>
  );
}
