import type { APIRoute } from "astro";
import { addTask } from "db/actions";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name");
  const priority = data.get("priority");
  const dueDate = data.get("due-date");

  if (!name) {
    return new Response(
      JSON.stringify({ message: "Missing required field!" }),
      {
        status: 400,
      }
    );
  }

  const task: Task = { name, priority };

  try {
    await addTask(task);

    return new Response(
      JSON.stringify({ message: `New task "${name}" added!` }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), { status: 400 });
  }
};
