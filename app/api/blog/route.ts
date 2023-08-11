import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export const main = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log("Database connection failed");
  }
};
export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ messaage: "Error", error });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { title, description } = await req.json();
    await main();
    const post = await prisma.post.create({
      data: {
        title,
        description,
      },
    });
    // return NextResponse.json({ message: "Success", post }, { status: 200 });
    return NextResponse.json({ message: "created post", post });
  } catch (error) {
    return NextResponse.json({ messaage: "Error", error });
  } finally {
    await prisma.$disconnect();
  }
};
