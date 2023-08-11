import { PrismaClient } from "@prisma/client";
import "../global.d.ts";

let prisma: PrismaClient;

if (process.env.NODE_ENV !== "production" && !global.prisma) {
  global.prisma = new PrismaClient();
}

prisma = global.prisma || new PrismaClient();

export default prisma;
