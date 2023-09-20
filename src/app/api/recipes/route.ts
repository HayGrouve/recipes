import { prisma } from "../prismaClient";

const seedRecipes = async () => {
  const recipes = [
    {
      title: "Pasta",
      description: "Pasta with tomato sauce",
      ingredients: "Pasta, tomato sauce, salt, pepper, olive oil",
      userName: "John",
      userId: "1",
    },
    {
      title: "Pizza",
      description: "Pizza with tomato sauce",
      ingredients: "Pasta, tomato sauce, salt, pepper, olive oil",
      userName: "John",
      userId: "1",
    },
    {
      title: "Burger",
      description: "Burger with tomato sauce",
      ingredients: "Pasta, tomato sauce, salt, pepper, olive oil",
      userName: "Monica",
      userId: "2",
    },
  ];

  for (const recipe of recipes) {
    await prisma.recipe.create({
      data: recipe,
    });
  }
};

export const GET = async (req: Request) => {
  const recipes = await prisma.recipe.findMany();
  return new Response(JSON.stringify(recipes));
};
