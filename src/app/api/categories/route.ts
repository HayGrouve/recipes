import { prisma } from "../prismaClient";

export const GET = async (req: Request) => {
  const categories = await prisma.category.findMany();
  return new Response(JSON.stringify(categories));
};
