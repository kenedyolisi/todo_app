import { db, Tasks } from "astro:db";
import { addDays, subDays } from "date-fns";

/**
 * See 👉 https://astro.build/db/seed
 */
export default async function seed() {
  try {
    await db.insert(Tasks).values([
      {
        name: "Pay Electricity bills",
        due: new Date(),
        priority: "high",
        completed: true,
      },
      {
        name: "Mow lawn",
        due: subDays(new Date(), 1),
        priority: "low",
      },
      {
        name: "File tasks returns",
        due: addDays(new Date(), 2),
      },
      {
        name: "Visit grandpa",
      },
      {
        name: "Mark Computer Studies tests",
        due: addDays(new Date(), 1),
        priority: "low",
      },
    ]);
  } catch (error) {
    throw new Error("Failed to seed database!");
  }
}
