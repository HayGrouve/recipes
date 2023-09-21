import { prisma } from "../../../prismaClient";

export const PUT = async (req: Request, context: any) => {
  const { params } = context;
  const body = await req.json();
  const recipe = await prisma.recipe.update({
    where: { id: Number(params.id) },
    data: {
      title: body.title,
      ingredients: body.ingredients,
      description: body.description,
      category: body.category,
      image: body.image,
    },
  });
  return new Response(JSON.stringify(recipe));
};
