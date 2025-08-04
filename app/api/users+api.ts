import prisma from "@/utils/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return Response.json({ users });
  } catch (err) {
    return Response.json({ message: "User Creationfailed" }, { status: 500 });
  }
}
