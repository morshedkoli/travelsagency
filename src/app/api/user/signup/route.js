import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    reqBody.otp = "0";

    const prisma = new PrismaClient();

    const exitingUser = await prisma.user.findMany({
      where: { email: reqBody.email },
    });

    // const singleUser = await prisma.users.findMany({
    //   where:{username:reqBody.username}
    // })

    if (exitingUser.length === 1) {
      return NextResponse.json({ status: "usermatch", data: exitingUser[0] });
    } else {
      const user = await prisma.user.create({
        data: reqBody,
      });

      return NextResponse.json({
        status: "success",
        data: { user },
      });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
