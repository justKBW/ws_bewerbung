import { PrismaClient } from "@prisma/client";
import getViews from "./getViews";

export default async function updateView() {
  const prisma = new PrismaClient();

  async function main() {
    const updateCounter = await prisma.counter.update({
      where: {
        id: ws,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    console.log(updateCounter);
  }

  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
