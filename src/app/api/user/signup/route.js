import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    reqBody.otp = "0";
    reqBody.balance = 0;
    reqBody.credit_balance = 0;
    reqBody.userType = "user";
    reqBody.active = false;

    const prisma = new PrismaClient();

    const exitingUser = await prisma.users.findMany({
      where: { username: reqBody.username },
    });

    // const singleUser = await prisma.users.findMany({
    //   where:{username:reqBody.username}
    // })

    if (exitingUser.length === 1) {
      return NextResponse.json({ status: "usermatch", data: exitingUser[0] });
    } else {
      const exitingEmail = await prisma.users.findMany({
        where: { email: reqBody.email },
      });
      if (exitingEmail.length === 1) {
        return NextResponse.json({
          status: "emailmatch",
          data: exitingUser[0],
        });
      } else {
        const user = await prisma.users.create({
          data: reqBody,
        });
      }

      return NextResponse.json({
        status: "success",
        data: { username: user.username, name: user.name },
      });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
