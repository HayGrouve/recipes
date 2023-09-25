"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Recipe } from "../../../lib/types";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const Page: FC = ({ params }: any) => {
  const [recipe, setRecipe] = useState<Recipe>();
  const { user } = useUser();

  const {
    userId,
    userName,
    userImg,
    ingredients,
    category,
    createdAt,
    description,
    id,
    img,
    title,
  } = recipe || {};

  useEffect(() => {
    fetch(`/api/recipe/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
      });
  }, [params.id]);

  return (
    <main className="mx-5 my-10 flex flex-col items-center tracking-wider">
      <h1 className="text-center text-4xl font-bold text-white sm:text-5xl md:text-7xl">
        {title}
        {user && user.id === userId && (
          <Link
            className="ml-5 text-2xl font-bold text-yellow-500"
            href={`/recipe/${id}/edit`}
          >
            Edit &#9998;
          </Link>
        )}
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-6 rounded bg-gray-800 text-white">
        <Image
          className="w-full max-w-4xl rounded-tl rounded-tr lg:rounded-bl lg:rounded-tr-none"
          priority={true}
          src={img ? img : "/recipe.jpg"}
          alt={title ? title : "Recipe"}
          width={1000}
          height={1000}
        />
        <section>
          <header>
            <h2 className="mb-2 mt-5 text-center text-2xl font-bold">
              Ingredients
            </h2>
          </header>
          <div className="mx-auto max-w-2xl">
            <div className="mx-5 sm:mx-0">
              <div
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html: ingredients ? ingredients : "",
                }}
              ></div>
              <h2 className="mb-2 mt-5 text-center text-2xl font-bold">
                Description
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: description ? description : "",
                }}
                className="text-justify"
              ></p>
              <div className="flex justify-between">
                <p className="mb-2 mt-5 text-center">Category: {category}</p>
                <p className="mb-2 mt-5 text-center">Author: {userName}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
