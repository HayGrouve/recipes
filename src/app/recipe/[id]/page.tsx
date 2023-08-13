import Image from "next/image";
import { FC } from "react";

interface IProps {}

const mockedData = {
  id: "1",
  title: "Ice cream",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
  img: "",
  category: "sweet",
  authorId: "123",
  ingredients: [
    "salt",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "paper",
    "sugar",
  ],
  authorName: "Cveti",
  authorImg:
    "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yUElNOUJQQXVyMWhFWVV4Qk9Wdm41dGVrWDkuanBlZyJ9",
  createdAt: new Date(),
};

const Page: FC<IProps> = ({}) => {
  const {
    authorId,
    authorImg,
    ingredients,
    authorName,
    category,
    createdAt,
    description,
    id,
    img,
    title,
  } = mockedData;
  return (
    <main className="mx-5 my-10 flex flex-col items-center tracking-wider">
      <h1 className="text-center text-4xl font-bold sm:text-5xl md:text-7xl ">
        {title}
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-6 bg-gray-800 text-white lg:grid-cols-2">
        <Image
          className="w-full max-w-xl"
          priority={true}
          src={img ? img : "/recipe.jpg"}
          alt={title}
          width={1000}
          height={1000}
        />
        <section>
          {/* <section className="flex flex-col items-center"> */}
          <h2 className="mb-2 mt-5 text-center text-2xl font-bold">
            Ingredients
          </h2>
          <div className="mx-auto max-w-md">
            <div className="mx-5 sm:mx-0">
              <ul className="list-decimal text-center">
                {ingredients.map((item, index) => {
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
                <p className="mb-2 mt-5 text-center">Author: {authorName}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
