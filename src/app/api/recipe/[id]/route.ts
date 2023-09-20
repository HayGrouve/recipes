import { NextRequest } from "next/server";
import { prisma } from "../../prismaClient";

export const GET = async (req: NextRequest, context:any) => {
const { params } = context;
  const recipes = await prisma.recipe.findFirst({
    where: { id: Number(params.id) },
  });
  return new Response(JSON.stringify(recipes));
}
