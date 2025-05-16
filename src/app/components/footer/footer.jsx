import prisma from "../../../../lib/prisma";

export async function Footer() {
  //Showing view count
  const views = await prisma.counter.findUnique({ where: { id: "ws" } });
  console.log(views);

  //Updating view count
  const updateCounter = await prisma.counter.update({
    where: {
      id: "ws",
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });
  console.log(updateCounter);

  return <div className=" text-blue-500 ">{views.views}</div>;
}
