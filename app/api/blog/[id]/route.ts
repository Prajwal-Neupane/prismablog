import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "../../../../lib/prisma";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    await main();
    const post = await prisma.post.findFirst({
      where: { id },
    });
    if (!post) return NextResponse.json({ message: "Post not found" });
    return NextResponse.json({ message: "Success", post });
  } catch (error) {
    return NextResponse.json({ messaage: "Error", error });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    const { title, description } = await req.json();
    await main();
    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        description,
      },
    });
    if (!post) return NextResponse.json({ message: "Post not found" });
    return NextResponse.json({ message: "Success", post });
  } catch (error) {
    return NextResponse.json({ messaage: "Error", error });
  } finally {
    await prisma.$disconnect();
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    await main();
    const post = await prisma.post.delete({
      where: { id },
    });
    if (!post) return NextResponse.json({ message: "Post not found" });
    return NextResponse.json({ message: "Success", post });
  } catch (error) {
    return NextResponse.json({ messaage: "Error", error });
  } finally {
    await prisma.$disconnect();
  }
};
