import prisma from "../../../../lib/prisma";

export async function Footer() {
  const views = await prisma.counter.findUnique({ where: { id: "ws" } });
  return <div className=" text-blue-500 ">{views.views}</div>;
}
