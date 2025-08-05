import prisma from "@/utils/prisma";

export async function POST(request: Request) {
  const { title, description, price, image, categoryId } = await request.json();

  if (!title || !description || !price || !image || !categoryId) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const product = await prisma.product.create({
      data: { title, description, price, image, categoryId },
    });
    return Response.json(product, { status: 201 });
  } catch (err) {
    return Response.json({ error: "Product creation failed" }, { status: 500 });
  }
}
