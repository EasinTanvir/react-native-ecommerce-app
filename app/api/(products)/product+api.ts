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
export async function GET(request: Request) {
  try {
    const products = await prisma.product.findMany();
    return Response.json(products, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Product fetch failed" }, { status: 500 });
  }
}
