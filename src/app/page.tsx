"use client";

import Link from "next/link";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import Pagination from "../components/pagination";
import { ChangeEvent, useState } from "react";
import { Label } from "../components/ui/label";
import Card from "../components/card";

export default function Home() {
  const mockedRecipes = [
    {
      id: 1,
      title: "Ice cream",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "",
      category: "sweet",
      authorId: "123",
      authorName: "Cveti",
      authorImg:
        "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yUElNOUJQQXVyMWhFWVV4Qk9Wdm41dGVrWDkuanBlZyJ9",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "",
      category: "breakfast",
      authorId: "123",
      authorName: "John Doe",
      authorImg: "",
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "",
      category: "breakfast",
      authorId: "123",
      authorName: "John Doe",
      authorImg: "",
      createdAt: new Date(),
    },
    {
      id: 4,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "",
      category: "lunch",
      authorId: "123",
      authorName: "John Doe",
      authorImg: "",
      createdAt: new Date(),
    },
    {
      id: 5,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "",
      category: "lunch",
      authorId: "123",
      authorName: "John Doe",
      authorImg: "",
      createdAt: new Date(),
    },
    {
      id: 6,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "",
      category: "lunch",
      authorId: "123",
      authorName: "John Doe",
      authorImg: "",
      createdAt: new Date(),
    },
    {
      id: 7,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "",
      category: "dinner",
      authorId: "123",
      authorName: "John Doe",
      authorImg: "",
      createdAt: new Date(),
    },
    {
      id: 8,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "",
      category: "dinner",
      authorId: "123",
      authorName: "John Doe",
      authorImg: "",
      createdAt: new Date(),
    },
    {
      id: 9,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "",
      category: "dinner",
      authorId: "123",
      authorName: "John Doe",
      authorImg: "",
      createdAt: new Date(),
    },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [recipes, setRecipes] = useState(mockedRecipes);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setRecipes(
      mockedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(e.target.value),
      ),
    );
  };

  const onSelectCategory = (category: string) => {
    if (category === "all") {
      setRecipes(mockedRecipes);
      return;
    }

    setRecipes(
      mockedRecipes.filter((recipe) => {
        if (recipe.category.toLowerCase() === category.toLowerCase()) {
          return recipe;
        }
      }),
    );
  };

  const onSelectAuthor = (author: string) => {
    if (author === "all") {
      setRecipes(mockedRecipes);
      return;
    }

    setRecipes(
      mockedRecipes.filter((recipe) => {
        if (recipe.authorName.toLowerCase() === author.toLowerCase()) {
          return recipe;
        }
      }),
    );
  };

  return (
    <main className="mx-2 mt-5 sm:mx-10 lg:mt-10">
      <h1 className=" text-center text-4xl font-bold tracking-wide sm:text-7xl ">
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
        <Label htmlFor="category" className="text-lg">
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
            {recipes.map((recipe, index) => {
              if (
                index !== 0 &&
                recipe.category === recipes[index - 1].category
              ) {
                return;
              }
              return (
                <SelectItem
                  key={recipe.id}
                  value={recipe.category.toLowerCase()}
                >
                  {`${recipe.category
                    .at(0)
                    ?.toUpperCase()}${recipe.category.slice(1)}`}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Label htmlFor="author" className="text-lg">
          Author:
        </Label>
        <Select
          onValueChange={(authorName) => {
            onSelectAuthor(authorName);
          }}
        >
          <SelectTrigger id="author" className="w-[150px] bg-white">
            <SelectValue placeholder="Author" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {recipes.map((recipe, index) => {
              if (
                index !== 0 &&
                recipe.authorName === recipes[index - 1].authorName
              ) {
                return;
              }
              return (
                <SelectItem
                  key={recipe.id}
                  value={recipe.authorName.toLowerCase()}
                >
                  {`${recipe.authorName
                    .at(0)
                    ?.toUpperCase()}${recipe.authorName.slice(1)}`}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="responsive-grid mt-2 justify-items-center sm:mt-10">
        {recipes.map((recipe) => {
          return (
            <Card
              key={recipe.id}
              id={recipe.id.toString()}
              authorImg={recipe.authorImg}
              authorName={recipe.authorName}
              createdAt={recipe.createdAt}
              title={recipe.title}
              description={recipe.description}
              img={recipe.img}
            />
          );
        })}
      </div>
      <Pagination />
    </main>
  );
}
