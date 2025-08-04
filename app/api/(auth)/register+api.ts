import prisma from "@/utils/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { username, email, password } = await request.json();

  let existingUser, hashPass;
  try {
    existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  } catch (err) {
    return Response.json({ message: "find email failed" }, { status: 500 });
  }

  if (existingUser) {
    return Response.json(
      { email: "Sorry email already exist" },
      { status: 500 }
    );
  }

  try {
    hashPass = await bcrypt.hash(password, 10);
  } catch (err) {
    return Response.json(
      { message: "Password hashed failed" },
      { status: 500 }
    );
  }

  try {
    await prisma.user.create({ data: { username, email, password: hashPass } });
    return Response.json({ message: "Register Successfuk" }, { status: 201 });
  } catch (err) {
    return Response.json({ message: "User Creationfailed" }, { status: 500 });
  }
}
