import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    const history = await prisma.paidHistory.create({
      data: reqBody,
    });

    return NextResponse.json({
      status: "success",
      data: history,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
