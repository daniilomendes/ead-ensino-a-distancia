const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const frontendCategory = await prisma.category.create({
      data: {
        name: "Front-end",
        slug: "frontend",
        imageUrl: "",
      },
    });

    const frontend = [
      {
        name: "Html 5",
        slug: "html5",
        description: "",
        imageUrl: "",
        categoryId: frontendCategory.id,
      },
    ];

    await prisma.product.createMany({
      data: frontend,
    });

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
