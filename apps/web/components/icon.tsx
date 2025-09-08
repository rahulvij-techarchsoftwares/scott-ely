'use client';

import * as LucideIcons from 'lucide-react';

import { cn } from '../app/lib/utils';

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  // @ts-ignore - Lucide icons are dynamically accessed
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide React`);
    return null;
  }

  return <IconComponent className={cn('size-4', className)} />;
}
