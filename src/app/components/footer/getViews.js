async function getViews() {
  const prisma = new PrismaClient();

  async function main() {
    const views = await prisma.counter.findUnique({ where: { id: "ws" } });
    console.log(views);
    return views;
  }

  const views = main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return views;
}
