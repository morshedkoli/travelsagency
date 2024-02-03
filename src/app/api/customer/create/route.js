import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const headerList = headers();
  let userID = headerList.get("id");

  try {
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    const existingCustomer = await prisma.customer.findMany({
      where: { number: reqBody.number },
    });
    // const singleUser = await prisma.users.findMany({
    //   where:{username:reqBody.username}
    // })

    if (existingCustomer.length === 1) {
      return NextResponse.json({ status: "usermatch", data: existingCustomer });
    }

    // Create new customer with explicit userId
    const newCustomer = await prisma.customer.create({
      data: {
        ...reqBody,
        userId: userID, // Explicitly assign userId to establish relationship
      },
    });

    return NextResponse.json({ status: "success", data: newCustomer });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
