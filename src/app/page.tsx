"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
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
import { useState } from "react";

export default function Home() {
  const { user } = useUser();
  const [searchValue, setSearchValue] = useState("");

  const mockedRecipes = [
    {
      id: 1,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: new Date(),
    },
    {
      id: 4,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: new Date(),
    },
    {
      id: 5,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: new Date(),
    },
    {
      id: 6,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: new Date(),
    },
    {
      id: 7,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: new Date(),
    },
    {
      id: 8,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: new Date(),
    },
    {
      id: 9,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: new Date(),
    },
  ];

  return (
    <main className="mx-2 mt-5 sm:mx-10 lg:mt-10">
      <h1 className=" text-center text-4xl font-bold tracking-wide sm:text-7xl ">
        Recipes
      </h1>
      <div className=" mt-2 flex items-center justify-center gap-5 sm:mt-10 md:justify-normal">
        <Input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="w-[150px]"
          placeholder="Search..."
        />
        <Select>
          <SelectTrigger className="w-[150px] bg-white">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="responsive-grid mt-2 justify-items-center  sm:mt-10">
        {mockedRecipes.map((recipe) => {
          return (
            <div
              key={recipe.id}
              className="max-w-sm shadow-xl lg:flex lg:max-w-full"
            >
              <div className="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none">
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
                    src={user?.imageUrl ? user.imageUrl : "./user.jpg"}
                    alt={`Avatar of ${user?.fullName}`}
                  />
                  <div className="text-sm">
                    <p className="leading-none text-gray-900">
                      {user?.fullName}
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
