import { prisma } from "../../../prismaClient";

export const POST = async (req: Request) => {
  const body = await req.json();
  const recipe = await prisma.recipe.create({
    data: {
      title: body.title,
      ingredients: body.ingredients,
      description: body.description,
      userId: body.userId,
      userName: body.userName,
      userImg: body.userImg,
    },
  });
  return new Response(JSON.stringify(recipe));
};
