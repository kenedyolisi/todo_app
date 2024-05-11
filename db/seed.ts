import { db, Task } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  try {
    await db.insert(Task).values([
      {
        name: "Pay bills",
        dueDate: new Date(2024, 3, 13),
        priority: "low",
        completed: false,
      },
      {
        name: "Mow lawn",
        dueDate: new Date(),
        priority: "medium",
        completed: true,
      },
      {
        name: "Read book",
        priority: "high",
        completed: false,
      },
    ]);
  } catch (error) {
    console.log("Database error", error);
    throw new Error("Failed to seed database!");
  }
}
