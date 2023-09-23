import { prisma } from "../../../prismaClient";

export const DELETE = async (req: Request, context: any) => {
  const { params } = context;
  const recipe = await prisma.recipe.delete({
    where: { id: Number(params.id) },
  });
  return new Response(JSON.stringify(recipe));
};
