'use client';

import React from 'react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { CommandIcon, SearchIcon, icons } from 'lucide-react';

import { page_routes } from '../../../app/lib/routes-config';
import { Button } from '../../ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../../ui/command';
import { DialogHeader, DialogTitle } from '../../ui/dialog';
import { Input } from '../../ui/input';

type CommandItemProps = {
  item: {
    title: string;
    href: string;
    icon?: string;
  };
};

export default function Search() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const CommandItemComponent: React.FC<CommandItemProps> = ({ item }) => {
    // @ts-expect-error
    const LucideIcon = icons[item.icon];

    return (
      <CommandItem
        onSelect={() => {
          setOpen(false);
          router.push(item.href);
        }}
      >
        {item.icon && <LucideIcon className="me-2 h-4! w-4!" />}
        <span>{item.title}</span>
      </CommandItem>
    );
  };

  return (
    <div className="ms-auto lg:me-auto lg:flex-1">
      <div className="relative hidden max-w-sm flex-1 lg:block">
        <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          className="h-9 w-full cursor-pointer rounded-md border pr-4 pl-10 text-sm shadow-xs"
          placeholder="Search..."
          type="search"
          onFocus={() => setOpen(true)}
        />
        <div className="absolute top-1/2 right-2 hidden -translate-y-1/2 items-center gap-0.5 rounded-sm bg-zinc-200 p-1 font-mono text-xs font-medium sm:flex dark:bg-neutral-700">
          <CommandIcon className="size-3" />
          <span>k</span>
        </div>
      </div>
      <div className="block lg:hidden">
        <Button size="icon" variant="outline" onClick={() => setOpen(true)}>
          <SearchIcon />
        </Button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
        </VisuallyHidden>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {page_routes.map((route) => (
            <React.Fragment key={route.title}>
              <CommandGroup heading={route.title}>
                {route.items.map((item, key) => (
                  <CommandItemComponent key={key} item={item} />
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
}
