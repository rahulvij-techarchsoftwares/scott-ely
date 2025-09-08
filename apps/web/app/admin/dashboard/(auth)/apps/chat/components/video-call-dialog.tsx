'use client';

import React from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Phone, VideoIcon, X } from 'lucide-react';

import { Avatar, AvatarImage } from '../../../../../../../components/ui/avatar';
import { Button } from '../../../../../../../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../../../../../../../components/ui/dialog';

export function VideoCallDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <VideoIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="top-8 flex translate-y-0 items-center justify-between">
        <VisuallyHidden>
          <DialogTitle>Calling...</DialogTitle>
        </VisuallyHidden>
        <div className="flex items-center gap-4">
          <Avatar className="size-16">
            <AvatarImage
              src={`https://bundui-images.netlify.app/avatars/04.png`}
              alt="shadcn/ui avatar"
            />
          </Avatar>
          <div className="text-lg">Jennica calling ...</div>
        </div>
        <div className="flex gap-4">
          <Button variant="destructive" className="h-12 w-12 rounded-full">
            <X />
          </Button>
          <Button
            variant="destructive"
            className="size-12 rounded-full bg-green-600 hover:bg-green-700 dark:bg-green-950"
          >
            <Phone />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
