import { generateToken } from "@/utils/jwt";
import prisma from "@/utils/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  let user, hashPass;
  try {
    user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  } catch (err) {
    return Response.json({ message: "find email failed" }, { status: 500 });
  }

  if (!user) {
    return Response.json({ email: "No user found" }, { status: 500 });
  }

  try {
    hashPass = await bcrypt.compare(password, user.password!);
  } catch (err) {
    return Response.json(
      { message: "Password compared failed" },
      { status: 500 }
    );
  }

  if (!hashPass) {
    return Response.json({ password: "Invalid Password" }, { status: 401 });
  }

  const token = generateToken({ id: user.id });

  if (!token) {
    return Response.json({ message: "Token creation failed" }, { status: 500 });
  }

  return Response.json(
    { token, email: user.email, username: user.username },
    { status: 200 }
  );
}
