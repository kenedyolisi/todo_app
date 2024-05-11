import type { APIRoute } from "astro";
import { fetchTasks } from "db/actions";

const tasks = await fetchTasks();

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(tasks), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
