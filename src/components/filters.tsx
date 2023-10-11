import { ChangeEvent, FC } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
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
  onSelectCategory: (category: string) => void;
  selectUsers: string[];
  onSelectAuthor: (author: string) => void;
};

const Filters: FC<IProps> = ({
  searchValue,
  onSearch,
  selectCategories,
  onSelectCategory,
  selectUsers,
  onSelectAuthor,
}) => {
  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-5 sm:mt-10 lg:flex-row">
      <Input
        value={searchValue}
        onChange={(e) => {
          onSearch(e);
        }}
        className="w-[150px]"
        placeholder="Search..."
      />
      <Label htmlFor="category" className="text-lg text-white">
        Category:
      </Label>
      <Select
        onValueChange={(category) => {
          onSelectCategory(category);
        }}
      >
        <SelectTrigger id="category" className="w-[150px] bg-white">
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
                  {`${category.at(0)?.toUpperCase()}${category.slice(1)}`}
                </SelectItem>
              );
            })}
        </SelectContent>
      </Select>
      <Label htmlFor="author" className="text-lg text-white">
        Author:
      </Label>
      <Select
        onValueChange={(userName) => {
          onSelectAuthor(userName);
        }}
      >
        <SelectTrigger id="author" className="w-[150px] bg-white">
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
  );
};

export default Filters;
