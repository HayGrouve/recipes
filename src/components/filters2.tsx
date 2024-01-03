import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent } from "react";

type IProps = {
  searchValue: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  //   selectCategories: string[];
  //   onSelectCategory: (category: string) => void;
  //   selectUsers: string[];
  //   onSelectAuthor: (author: string) => void;
  //   clearFilters: () => void;
};

export function DrawerDialogDemo({ onSearch, searchValue }: IProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = window.innerWidth > 768 ? true : false;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Filter Options</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filter Options</DialogTitle>
            <DialogDescription>
              Please search by recipe title, category, or author.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm onSearch={onSearch} searchValue={searchValue} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Filter Options</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Filter Options</DrawerTitle>
          <DrawerDescription>
            Please search by recipe title, category, or author.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm onSearch={onSearch} searchValue={searchValue} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

type SearchProps = {
  searchValue: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function ProfileForm({ onSearch, searchValue, className }: SearchProps) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="search">Search</Label>
        {/*!! DANI SOLVED THAT !!*/}
        <Input
          id="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            onSearch(e);
          }}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
    </form>
  );
}
