"use server";

export async function loginUser(formData) {
  // Tuna-import PrismaClient kwa njia ya kawaida ndani ya function
  const { PrismaClient } = require("@prisma/client");
  const prisma = new PrismaClient();

  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await prisma.user.create({
      data: { name, email, password },
    });
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "Kuna tatizo la connection!" };
  } finally {
    await prisma.$disconnect();
  }
}