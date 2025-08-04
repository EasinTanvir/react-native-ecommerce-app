import prisma from "@/utils/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const user = await prisma.user.create({ data: body });
    return Response.json({ user });
  } catch (err) {
    return Response.json({ message: "User Creationfailed" }, { status: 500 });
  }
}
