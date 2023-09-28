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
    image,
    title,
  } = recipe || {};
  console.log("🚀 ~ file: page.tsx:24 ~ recipe:", recipe);

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
      <div className="mt-10 grid max-w-4xl grid-cols-1 gap-6 rounded bg-gray-800 text-white">
        <img
          className="aspect-video w-full  rounded-tl rounded-tr object-cover lg:rounded-bl lg:rounded-tr-none"
          src={image ? image : "/recipe.jpg"}
          alt={title ? title : "Recipe"}
        />
        <section>
          <header>
            <h2 className="mb-2 mt-5 text-center text-2xl font-bold">
              Ingredients
            </h2>
          </header>
          <div>
            <div className="mx-5 sm:mx-16">
              <div
                className="ingredients mb-5"
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
                <p className="mb-2 mt-5 text-center">
                  Category:{" "}
                  {`${category?.slice(0, 1).toUpperCase()}${category?.slice(
                    1,
                  )}`}
                </p>
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
