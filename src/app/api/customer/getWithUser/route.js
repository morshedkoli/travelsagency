import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const headerList = headers();
  let userID = headerList.get("id");

  try {
    const prisma = new PrismaClient();

    const customers = await prisma.customer.findMany({
      where: { userId: userID },
      include: { services: true },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ status: "success", data: customers });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
