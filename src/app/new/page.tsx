"use client";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { FC, useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

interface IProps {}

const Page: FC<IProps> = ({}) => {
  const { isSignedIn, user } = useUser();
  const mockedCategories = ["breakfast", "lunch", "dinner", "dessert", "snack"];

  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("all");

  const handleSubmit = () => {
    if (
      ingredients === "" ||
      description === "" ||
      title === "" ||
      image === ""
    ) {
      toast.error("Please fill all fields!");
      return;
    }
    const recipe = {
      title,
      ingredients,
      description,
      userId: user && user.id,
      userName: user && user.fullName,
      userImg: user && user.imageUrl,
    };

    fetch("/api/recipes/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
          return;
        }
        toast.success("Recipe created!");
        redirect(`/recipes/${data.id}`);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!");
      });
  };

  useEffect(() => {
    if (!isSignedIn) {
      toast.info("Please login first!");
      redirect("/login");
    }
  }, []);

  return (
    <main className="mx-5 my-10 flex flex-col items-center tracking-wider ">
      <h1 className="text-center text-4xl font-bold sm:text-5xl md:text-7xl ">
        New Recipe
      </h1>
      <div className="mt-10 grid w-full gap-5 rounded bg-gray-800 px-5 py-8 md:px-8 md:py-10 lg:w-4/6">
        <div>
          <Label className="text-white" htmlFor="title">
            Title
          </Label>
          <Input
            required
            id="title"
            type="text"
            placeholder="Delicious recipe title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <Label className="text-white" htmlFor="ingredients">
            Ingredients
          </Label>
          <Textarea
            required
            id="ingredients"
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Only the best ingredients..."
          />
        </div>
        <div>
          <Label className="text-white" htmlFor="description">
            Description
          </Label>
          <Textarea
            required
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description of top notch meal..."
          />
        </div>
        <div>
          <Label className="text-white" htmlFor="image">
            Image URL
          </Label>
          <Input
            required
            id="image"
            type="text"
            placeholder="Just an image URL!"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="category" className="text-white">
            Category:
          </Label>
          <Select onValueChange={(category) => setCategory(category)}>
            <SelectTrigger id="category" className="w-[150px] bg-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {mockedCategories.map((category, index) => {
                return (
                  <SelectItem key={index} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <Button className=" w-full" variant={"outline"} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </main>
  );
};

export default Page;
