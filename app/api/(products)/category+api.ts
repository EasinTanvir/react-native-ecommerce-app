import prisma from "@/utils/prisma";

export async function POST(request: Request) {
  const { name, image } = await request.json();

  if (!name || !image) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const category = await prisma.category.create({
      data: { name, image },
    });
    return Response.json(category, { status: 201 });
  } catch (err) {
    return Response.json(
      { error: "Category creation failed" },
      { status: 500 }
    );
  }
}
