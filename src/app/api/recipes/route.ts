import { prisma } from "../prismaClient";

export const GET = async (req: Request) => {
  const recipes = await prisma.recipe.findMany();
  return new Response(JSON.stringify(recipes));
};
