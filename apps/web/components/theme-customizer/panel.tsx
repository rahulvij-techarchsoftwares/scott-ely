"use client";

import { Settings } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import {
  PresetSelector,
  SidebarModeSelector,
  ThemeScaleSelector,
  ColorModeSelector,
  ContentLayoutSelector,
  ThemeRadiusSelector,
  ResetThemeButton
} from "./index";
import { useIsMobile } from "../../app/lib/hooks/use-mobile";

export function ThemeCustomizerPanel() {
  const isMobile = useIsMobile();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="outline">
          <Settings className="animate-tada" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="me-4 w-72 p-4 shadow-xl lg:me-0"
        align={isMobile ? "center" : "end"}>
        <div className="grid space-y-4">
          <PresetSelector />
          <ThemeScaleSelector />
          <ThemeRadiusSelector />
          <ColorModeSelector />
          <ContentLayoutSelector />
          <SidebarModeSelector />
        </div>
        <ResetThemeButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
