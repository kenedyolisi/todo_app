import type { APIRoute } from "astro";
import { db, Task, eq } from "astro:db";

export const DELETE: APIRoute = async (context) => {
  await db.delete(Task).where(eq(Task.id, context.params.id));
  return new Response(null, { status: 204 });
};

export const GET: APIRoute = async (context) => {
  const task = await db
    .select()
    .from(Task)
    .where(eq(Task.id, context.params.id));
  return new Response(JSON.stringify(task), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
