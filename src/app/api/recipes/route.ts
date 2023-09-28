import { prisma } from "../prismaClient";

export const GET = async (req: Request) => {
  console.log(req.url);
  const recipes = await prisma.recipe.findMany();
  return new Response(JSON.stringify(recipes));
};
