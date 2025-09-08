import React from 'react';

import { Plus } from 'lucide-react';

import { Button } from '../../../../../../../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../../../../../components/ui/dialog';
import { Input } from '../../../../../../../components/ui/input';
import { Label } from '../../../../../../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../../../../components/ui/select';
import { ProductCategory } from '../store';

type AddProductDialog = {
  categories: ProductCategory[];
};

export default function AddProductDialog({ categories }: AddProductDialog) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          <span className="hidden sm:inline">Add Product</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="product-name">Product Name</Label>
            <Input
              id="product-name"
              placeholder="Americano, Pepperoni Pizza etc."
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="product-price">Price</Label>
              <Input id="product-price" type="number" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="product-category">Category</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category: ProductCategory) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.icon} {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="product-image">Image URL</Label>
            <Input
              id="product-image"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
