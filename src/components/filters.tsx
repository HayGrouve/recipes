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
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type IProps = {
  searchValue: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  selectCategories: string[];
  currentCategory?: string;
  onSelectCategory: (category: string) => void;
  selectUsers: string[];
  currentAuthor?: string;
  onSelectAuthor: (author: string) => void;
  clearFilters: () => void;
};

export function Filters({
  onSearch,
  searchValue,
  clearFilters,
  onSelectAuthor,
  onSelectCategory,
  selectCategories,
  selectUsers,
  currentAuthor,
  currentCategory,
}: IProps) {
  const [open, setOpen] = useState(false);
  const [isCleared, setIsCleared] = useState(false);
  const isDesktop = window.innerWidth > 768 ? true : false;

  const handleClear = (e: any) => {
    e.preventDefault();
    clearFilters();
    setIsCleared(true);
  };

  useEffect(() => {
    setIsCleared(true);
  }, []);

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
          <ProfileForm
            onSearch={onSearch}
            searchValue={searchValue}
            handleClear={handleClear}
            onSelectAuthor={onSelectAuthor}
            onSelectCategory={onSelectCategory}
            selectCategories={selectCategories}
            isCleared={isCleared}
            selectUsers={selectUsers}
            currentCategory={currentCategory}
            currentAuthor={currentAuthor}
            setIsCleared={setIsCleared}
          />
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
        <ProfileForm
          onSearch={onSearch}
          searchValue={searchValue}
          handleClear={handleClear}
          onSelectAuthor={onSelectAuthor}
          onSelectCategory={onSelectCategory}
          selectCategories={selectCategories}
          isCleared={isCleared}
          selectUsers={selectUsers}
          currentCategory={currentCategory}
          currentAuthor={currentAuthor}
          setIsCleared={setIsCleared}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" className="bg-green-700 text-slate-100">
              Search
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

type SearchProps = {
  searchValue: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  selectCategories: string[];
  currentCategory?: string;
  onSelectCategory: (category: string) => void;
  selectUsers: string[];
  currentAuthor?: string;
  onSelectAuthor: (author: string) => void;
  handleClear: (e: any) => void;
  isCleared: boolean;
  setIsCleared: (isCleared: boolean) => void;
  className?: string;
};

function ProfileForm({
  onSearch,
  searchValue,
  handleClear,
  onSelectAuthor,
  onSelectCategory,
  selectCategories,
  selectUsers,
  isCleared,
  className,
  currentCategory,
  currentAuthor,
  setIsCleared,
}: SearchProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={cn("grid items-start gap-4 p-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="search">Search</Label>
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
        <Label htmlFor="category">Category</Label>
        <Select
          onValueChange={(category) => {
            onSelectCategory(category);
            setIsCleared(false);
          }}
          value={isCleared ? "all" : currentCategory}
        >
          <SelectTrigger className="capitalize" id="category">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {selectCategories.sort().map((category) => {
              return (
                <SelectItem
                  key={category}
                  value={category}
                  className="cursor-pointer capitalize"
                >
                  {category}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="author">Author</Label>
        <Select
          onValueChange={(userName) => {
            onSelectAuthor(userName);
            setIsCleared(false);
          }}
          value={isCleared ? "all" : currentAuthor}
        >
          <SelectTrigger id="author" className="capitalize">
            <SelectValue placeholder="Author" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {selectUsers.sort().map((user) => {
              return (
                <SelectItem
                  key={user}
                  value={user}
                  className="cursor-pointer capitalize"
                >
                  {user}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Button
          variant="outline"
          className="bg-orange-600 text-slate-100"
          onClick={(e) => handleClear(e)}
        >
          Clear Filters
        </Button>
      </div>
    </form>
  );
}
