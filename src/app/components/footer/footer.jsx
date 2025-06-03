import prisma from "../../../../lib/prisma";

export async function Footer() {
  const oldviews = await prisma.counter.findUnique({ where: { id: "ws" } });
  console.log("Old views", oldviews);

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
  console.log("New views", updateCounter);

  return (
    <div className=" absolute inset-x-0 bottom-0 text-xl text-blue-500 text-center ">
      <p>Besuche: {updateCounter.views}</p>
    </div>
  );
}
