import prisma from "@/utils/prisma";

export async function POST(request: Request) {
  try {
    const { cId } = await request.json();
    try {
      const product = await prisma.product.findMany({
        where: { categoryId: cId },
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
