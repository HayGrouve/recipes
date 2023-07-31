import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
  const mockedRecipes = [
    {
      id: 1,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: Date.now(),
    },
    {
      id: 2,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: Date.now(),
    },
    {
      id: 3,
      title: "Recipe title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit non, eum molestias dolorem doloremque neque natus explicabo. Illo praesentium placeat et nihil doloremque perspiciatis suscipit laudantium molestiae? Animi id alias ad similique. Asperiores, ullam numquam debitis vero enim tenetur dicta voluptates at ipsam voluptatem inventore quibusdam ab. Reprehenderit, vitae nesciunt.",
      img: "url",
      author: { id: "userId", userName: "Author" },
      createdAt: Date.now(),
    },
  ];
  return (
    <main>
      <div className="responsive-grid mt-5 border-red-500">
        {mockedRecipes.map((recipe) => {
          return (
            <Card key={recipe.id} className="border-blue-500">
              <CardHeader>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="flex w-full items-center justify-between">
                  <p>{recipe.author.userName}</p>
                  <Link href={`/${recipe.id}`}>
                    <Button variant={"cardBtn"}>View Recipe</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
