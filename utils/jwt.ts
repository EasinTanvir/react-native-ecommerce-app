import jwt from "jsonwebtoken";

export const generateToken = (payload: any) => {
  try {
    const token = jwt.sign(payload, process.env.TOKEN_KEY!, {
      expiresIn: "30d",
    });
    return token;
  } catch (err) {
    return null;
  }
};
