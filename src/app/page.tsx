"use client";

import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Pagination from "../components/pagination";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Label } from "../components/ui/label";
import Card from "../components/card";
import { Recipe } from "../lib/types";
import CardSkeleton from "../components/card-skeleton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const dbRecipes = useRef<Recipe[]>(recipes);
  const selectCategories = dbRecipes.current.map((recipe) =>
    recipe.category.toLowerCase(),
  );
  const selectUsers = dbRecipes.current.map((recipe) =>
    recipe.userName.toLowerCase(),
  );

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setRecipes(
      dbRecipes.current.filter((recipe) =>
        recipe.title.toLowerCase().includes(e.target.value),
      ),
    );
  };

  const onSelectCategory = (category: string) => {
    if (category === "all") {
      setRecipes(dbRecipes.current);
      return;
    }

    setRecipes(
      dbRecipes.current.filter((recipe) => {
        if (recipe.category.toLowerCase() === category.toLowerCase()) {
          return recipe;
        }
      }),
    );
  };

  const onSelectAuthor = (author: string) => {
    if (author === "all") {
      setRecipes(dbRecipes.current);
      return;
    }

    setRecipes(
      dbRecipes.current.filter((recipe) => {
        if (recipe.userName.toLowerCase() === author.toLowerCase()) {
          return recipe;
        }
      }),
    );
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        dbRecipes.current = data;
        setRecipes(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="mx-2 mt-5 sm:mx-10 lg:mt-10">
      <h1 className="text-center text-4xl font-bold tracking-wide text-white sm:text-7xl">
        Recipes
      </h1>
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

      <div className="responsive-grid mt-6 justify-items-center px-5 sm:mt-10 sm:px-0">
        {isLoading &&
          new Array(8).fill(0).map((_, index) => {
            return <CardSkeleton key={index} />;
          })}
        {recipes.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id.toString()}
              userImg={recipe.userImg}
              userName={recipe.userName}
              createdAt={recipe.createdAt}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              category={recipe.category}
            />
          );
        })}
      </div>
      {/* <Pagination /> */}
    </main>
  );
}
