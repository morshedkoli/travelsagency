import { CreateToken } from "@/utility/JWTTokenHelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.user.findMany({
      where: reqBody, // Adjust the where clause based on the correct structure
    });
    // console.log(result)

    if (result.length === 0) {
      return NextResponse.json({ status: "fail", data: "no user found" });
    } else {
      const { email, id } = result[0];

      const token = await CreateToken({ email, id }); // Adjust CreateToken arguments

      const expirDuration = new Date(Date.now() + 24 * 60 * 60 * 1000);
      const cookieString = `token=${token}; expires=${expirDuration.toUTCString()}; path=/`;

      return NextResponse.json(
        { status: "success", data: token },
        { status: 200, headers: { "Set-Cookie": cookieString } }
      );
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}

export async function GET(req, res) {
  let expireDuration = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const response = NextResponse.redirect(new URL("/", req.url));
  response.cookies.set("token", "", { expires: expireDuration });
  return response;
}
