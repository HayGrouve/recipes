import { ChangeEvent, FC, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

type IProps = {
  searchValue: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  selectCategories: string[];
  onSelectCategory: (category: string) => void;
  selectUsers: string[];
  onSelectAuthor: (author: string) => void;
  clearFilters: () => void;
};

const Filters: FC<IProps> = ({
  searchValue,
  onSearch,
  selectCategories,
  onSelectCategory,
  selectUsers,
  onSelectAuthor,
  clearFilters,
}) => {
  const [isCleared, setIsCleared] = useState(false);
  const handleClear = () => {
    clearFilters();
    setIsCleared(true);
  };
  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-5 sm:mt-10 lg:flex-row">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Filters</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none ">
                Filters
                <Button
                  variant={"yellow"}
                  className="float-right h-8"
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </h4>
              <p className="text-sm text-muted-foreground">
                Filter the recipes.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="search" className="flex items-center gap-1">
                  Search <Search className="w-5" />
                </Label>
                <Input
                  id="search"
                  value={searchValue}
                  onChange={(e) => {
                    onSearch(e);
                  }}
                  className="col-span-2"
                  placeholder="Search..."
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="category">Category</Label>
                <Select
                  onValueChange={(category) => {
                    onSelectCategory(category);
                  }}
                  value={isCleared ? "all" : undefined}
                >
                  <SelectTrigger id="category" className="col-span-2">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {Array.from(new Set(selectCategories))
                      .filter((category) => category !== "all")
                      .sort()
                      .map((category) => {
                        return (
                          <SelectItem key={category} value={category}>
                            {`${category.at(0)?.toUpperCase()}${category.slice(
                              1,
                            )}`}
                          </SelectItem>
                        );
                      })}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="author">Author:</Label>
                <Select
                  onValueChange={(userName) => {
                    onSelectAuthor(userName);
                  }}
                  value={isCleared ? "all" : undefined}
                >
                  <SelectTrigger id="author" className="col-span-2">
                    <SelectValue placeholder="Author" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {Array.from(new Set(selectUsers))
                      .sort()
                      .map((user) => {
                        return (
                          <SelectItem key={user} value={user}>
                            {`${user.at(0)?.toUpperCase()}${user.slice(1)}`}
                          </SelectItem>
                        );
                      })}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Filters;
