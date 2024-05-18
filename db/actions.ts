import { db, Task } from "astro:db";

export async function addTask(task: Task) {
  try {
    await db.insert(Task).values([task]);
  } catch (error) {
    console.log("Database error", error);
  }
}

export async function updateTask() {}

export async function deleteTask() {}

export async function fetchTasks() {
  try {
    const tasks = await db.select().from(Task);
    return tasks;
  } catch (error) {
    console.error("Database error: ", error);
    throw new Error("Failed to fetch tasks from database.");
  }
}
