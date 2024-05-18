import type { APIRoute } from "astro";
import { db, Task } from "astro:db";

export const GET: APIRoute = async () => {
  const tasks = await db.select().from(Task);

  return new Response(JSON.stringify(tasks), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
