"use client";

import Pagination from "../components/pagination";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Card from "../components/card";
import { Recipe } from "../lib/types";
import CardSkeleton from "../components/card-skeleton";
import Filters from "../components/filters";

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

  const clearFilters = () => {
    setSearchValue("");
    setRecipes(dbRecipes.current);
  };

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
      <Filters
        searchValue={searchValue}
        onSearch={onSearch}
        selectCategories={selectCategories}
        onSelectCategory={onSelectCategory}
        selectUsers={selectUsers}
        onSelectAuthor={onSelectAuthor}
        clearFilters={clearFilters}
      />
      <div className="responsive-grid mt-6 justify-items-center px-5 sm:mt-10 sm:px-0">
        {isLoading &&
          new Array(4).fill(0).map((_, index) => {
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
