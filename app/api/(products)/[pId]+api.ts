import prisma from "@/utils/prisma";

export async function GET(request: Request, { pId }: Record<string, string>) {
  try {
    try {
      const product = await prisma.product.findFirst({
        where: { id: pId },
        include: { category: true },
      });
      return Response.json(product, { status: 201 });
    } catch (err) {
      return Response.json({ error: "Product fetch failed" }, { status: 500 });
    }
  } catch (err) {
    return Response.json({ error: "Product fetch failed" }, { status: 500 });
  }
}
