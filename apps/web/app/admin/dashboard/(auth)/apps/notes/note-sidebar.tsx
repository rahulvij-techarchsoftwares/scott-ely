import React from 'react';

import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Archive, Edit3, PenSquare } from 'lucide-react';

import { Button } from '../../../../../../components/ui/button';
import {
  DialogHeader,
  DialogTitle,
} from '../../../../../../components/ui/dialog';
import { Separator } from '../../../../../../components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../../../../../../components/ui/sheet';
import { AddNoteModal } from './add-note-modal';
import { noteLabels } from './data';
import { EditLabelsModal } from './edit-labels-modal';

export default function NoteSidebar() {
  return (
    <div className="sticky top-20 hidden space-y-4 xl:block">
      <AddNoteModal />
      <NoteSidebarContent />
    </div>
  );
}

export function NoteMobileSidebar({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="px-0">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Dialog</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>
        <NoteSidebarContent />
      </SheetContent>
    </Sheet>
  );
}

export function NoteSidebarContent() {
  return (
    <div className="flex flex-col rounded-md p-2 xl:w-64 xl:border">
      {/* Main Actions */}
      <div className="space-y-1">
        <Button variant="ghost" className="w-full justify-start">
          <PenSquare className="mr-2 h-4 w-4" />
          Notes
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Archive className="mr-2 h-4 w-4" />
          Archive
        </Button>
        <EditLabelsModal>
          <Button variant="ghost" className="w-full justify-start">
            <Edit3 className="mr-2 h-4 w-4" />
            Edit Labels
          </Button>
        </EditLabelsModal>
      </div>

      <Separator className="my-4" />

      {/* Tags Section */}
      <div className="flex-1">
        <div className="text-muted-foreground mb-3 px-2 text-sm font-medium">
          Labels
        </div>
        <nav className="space-y-1">
          {noteLabels.map((label, key) => (
            <Button
              key={key}
              variant="ghost"
              className="w-full justify-start font-normal"
            >
              <div className={`mr-2 h-2 w-2 rounded-full ${label.color}`} />
              {label.title}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
}
