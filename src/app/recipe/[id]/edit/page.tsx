"use client";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
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
import RichTextEditor from "@mantine/rte";

const Page: FC = ({ params }: any) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("all");
  const [dbCategory, setDbCategory] =
    useState<{ id: number; name: string }[]>();

  const handleSubmit = () => {
    if (title === "" || ingredients === "" || description === "") {
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

    try {
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
          toast.success("Recipe edited!");
          router.push(`/recipe/${data.id}`);
        });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  const handleDelete = () => {
    const confirmed = confirm("Are you sure you want to delete this recipe?");
    if (!confirmed) return;
    try {
      fetch(`/api/recipe/${params.id}/delete`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
            return;
          }
          toast.success("Recipe deleted!");
          router.push("/");
        });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    fetch(`/api/recipe/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setIngredients(data.ingredients);
        setDescription(data.description);
        setImage(data.image);
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
          <RichTextEditor
            id="ingredients"
            value={ingredients}
            onChange={setIngredients}
            placeholder="Only the best ingredients..."
          />
        </div>
        <div>
          <Label className="text-white" htmlFor="description">
            Description
          </Label>
          <RichTextEditor
            id="description"
            value={description}
            onChange={setDescription}
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
            value={category.toLowerCase()}
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
        <Button
          className="w-full"
          variant={"destructive"}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </main>
  );
};

export default Page;
