import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function GET() {
  return NextResponse.json({ username: "Sushant", password: "1234" });
}

export async function POST(req: NextRequest) {
  try {
    const response = await req.json();
    const { username, password } = response;

    const user = await client.user.create({
      data: {
        username,
        password,
      },
    });

    return NextResponse.json({
      message: "Signed up successfully.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Error",
      error: error,
    }, { status: 500 });
  }
}
