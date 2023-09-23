"use client";
import { FC, useEffect, useState } from "react";
import { Recipe } from "../../../../lib/types";
import Image from "next/image";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { Button } from "../../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Label } from "../../../../components/ui/label";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

const Page: FC = ({ params }: any) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("all");
  const [dbCategory, setDbCategory] =
    useState<{ id: number; name: string }[]>();

  const handleSubmit = () => {
    if (
      title === "" ||
      ingredients === "" ||
      description === "" ||
      image === ""
    ) {
      toast.error("Please fill all fields!");
      return;
    }
    const recipe = {
      title,
      ingredients,
      description,
      category,
      image,
    };

    fetch(`/api/recipe/${params.id}/edit`, {
      method: "PUT",
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
        console.error(err);
        toast.error("Something went wrong!");
      });
  };

  useEffect(() => {
    fetch(`/api/recipe/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setIngredients(data.ingredients);
        setDescription(data.description);
        setImage(data.img);
        setCategory(data.category);
      });
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setDbCategory(data);
      });
  }, [params.id]);

  return (
    <main className="mx-5 my-10 flex flex-col items-center tracking-wider ">
      <h1 className="text-center text-4xl font-bold text-white sm:text-5xl md:text-7xl ">
        {`Edit ${title} recipe`}
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
            defaultValue={title}
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
            defaultValue={ingredients}
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
            defaultValue={description}
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
            defaultValue={image}
            placeholder="Just an image URL!"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="category" className="text-white">
            Category:
          </Label>
          <Select
            defaultValue={category.toLowerCase()}
            onValueChange={(category) => setCategory(category)}
          >
            <SelectTrigger id="category" className="w-[150px] bg-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {dbCategory &&
                dbCategory.map((category) => {
                  return (
                    <SelectItem
                      key={category.id}
                      value={category.name.toLowerCase()}
                    >
                      {category.name}
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
