import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();

    const prisma = new PrismaClient();

    const service = await prisma.serviceName.create({
      data: reqBody,
    });

    return NextResponse.json({
      status: "success",
      data: service,
    });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e.toString() });
  }
}
