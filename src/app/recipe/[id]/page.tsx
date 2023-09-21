"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Recipe } from "../../../lib/types";

const Page: FC = ({ params }: any) => {
  const [recipe, setRecipe] = useState<Recipe>();

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
      <h1 className="text-center text-4xl font-bold sm:text-5xl md:text-7xl ">
        {title}
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-6 rounded bg-gray-800 text-white lg:grid-cols-2">
        <Image
          className="w-full max-w-xl rounded-tl rounded-tr lg:rounded-bl lg:rounded-tr-none"
          priority={true}
          src={img ? img : "/recipe.jpg"}
          alt={title ? title : "Recipe"}
          width={1000}
          height={1000}
        />
        <section>
          <h2 className="mb-2 mt-5 text-center text-2xl font-bold">
            Ingredients
          </h2>
          <div className="mx-auto max-w-md">
            <div className="mx-5 sm:mx-0">
              <ul className="list-decimal text-center">
                {ingredients &&
                  ingredients.split(",").map((item, index) => {
                    return (
                      <li
                        className="mt-1 inline-block w-full lg:w-[50%]"
                        key={index}
                      >
                        {item}
                      </li>
                    );
                  })}
              </ul>
              <h2 className="mb-2 mt-5 text-center text-2xl font-bold">
                Description
              </h2>
              <p className="text-justify">{description}</p>
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
