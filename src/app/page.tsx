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
import { Separator } from "../components/ui/separator";
import { ChangeEvent, useState } from "react";
import { Label } from "../components/ui/label";

export default function Home() {
  const mockedRecipes = [
    {
      id: 1,
      title: "Ice cream",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
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
      img: "url",
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
      img: "url",
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
      img: "url",
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
      img: "url",
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
      img: "url",
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
      img: "url",
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
      img: "url",
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
      img: "url",
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
      <div className="responsive-grid mt-2 justify-items-center  sm:mt-10">
        {recipes.map((recipe) => {
          return (
            <div
              key={recipe.id}
              className="max-w-sm shadow-xl lg:flex lg:max-w-full"
            >
              <div className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-bl lg:rounded-tl">
                <Link href={`/${recipe.id}`}>
                  <img
                    className="h-full w-full object-cover"
                    src="https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg"
                    title={recipe.title}
                    alt={recipe.title}
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
                <div className="mb-8">
                  <Link href={`/${recipe.id}`}>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">
                      {recipe.title}
                    </h3>
                  </Link>
                  <p className="text-base text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <Separator className="mb-2" />
                <div className="flex items-center">
                  <img
                    className="mr-4 h-10 w-10 rounded-full"
                    src={recipe.authorImg ? recipe.authorImg : "./user.jpg"}
                    alt={`Avatar of ${recipe.authorName}`}
                  />
                  <div className="text-sm">
                    <p className="leading-none text-gray-900">
                      {recipe.authorName}
                    </p>
                    <p className="text-gray-600">
                      {`${recipe.createdAt.getDate()} ${recipe.createdAt
                        .toString()
                        .slice(4, 7)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination />
    </main>
  );
}
