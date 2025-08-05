import prisma from "@/utils/prisma";

const categoryImages = [
  "https://images.unsplash.com/photo-1510552776732-01acc9a4e0c2",
  "https://images.unsplash.com/photo-1542751110-97427bbecf20",
  "https://images.unsplash.com/photo-1580894894512-1ea5f70925a3",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1570819178239-df1e76c05e0f",
  "https://images.unsplash.com/photo-1581091870622-3ba4c6a5b293",
  "https://images.unsplash.com/photo-1572057590670-99e631d4b5a3",
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c4",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
];

const productImages = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  "https://images.unsplash.com/photo-1549924231-f129b911e442",
  "https://images.unsplash.com/photo-1579547621706-1a9c79d5fa4c",
  "https://images.unsplash.com/photo-1503602642458-232111445657",
  "https://images.unsplash.com/photo-1593642532400-2682810df593",
  "https://images.unsplash.com/photo-1587837073080-426b1c0b6d4e",
  "https://images.unsplash.com/photo-1555617980-cbaffd776ac5",
  "https://images.unsplash.com/photo-1573164574396-9d63eaf4d389",
  "https://images.unsplash.com/photo-1587614295999-fc3a5c16dc5e",
];

export async function GET() {
  try {
    console.log("🌱 Seeding...");

    // Create 10 categories
    const categories = await Promise.all(
      categoryImages.map((img, index) =>
        prisma.category.create({
          data: {
            name: `Category ${index + 1}`,
            image: `${img}?auto=format&fit=crop&w=600&q=80`,
          },
        })
      )
    );

    // Create 20 products
    for (let i = 1; i <= 20; i++) {
      const randomImage = productImages[i % productImages.length];
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];

      await prisma.product.create({
        data: {
          title: `Product ${i}`,
          description: `This is the description of Product ${i}`,
          price: `${(Math.random() * 200 + 50).toFixed(2)}`,
          image: `${randomImage}?auto=format&fit=crop&w=600&q=80`,
          categoryId: randomCategory.id,
        },
      });
    }

    console.log("✅ Done seeding.");
    return Response.json({ message: "Seeding complete." }, { status: 200 });
  } catch (err) {
    console.error("Seeding failed:", err);
    return Response.json({ error: "Seeding failed." }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
