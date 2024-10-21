import { defineAction } from "astro:actions";
import { db, eq, not, Tasks } from "astro:db";
import { z } from "zod";

export const task = {
  create: defineAction({
    input: z.object({
      title: z.string({ message: "You must provide task title" }),
      priority: z.enum(["high", "medium", "low"]).default("low"),
      dueDate: z.date(),
    }),
    handler: async ({ dueDate, priority, title }, context) => {
      const task: Task = { due: dueDate, priority, title };

      await db.insert(Tasks).values(task);

      return "New task added!";
    },
  }),

  update: defineAction({
    input: z.object({ id: z.coerce.number(), title: z.string() }),
    handler: async ({ id, title }, context) => {
      const task: Task = { id, title };

      await db.update(Tasks).set(task).where(eq(Tasks.id, id));
    },
  }),
  toggleStatus: defineAction({
    input: z.object({
      id: z.coerce.number({ message: "You must provide task ID" }),
    }),
    handler: async ({ id }, context) => {
      await db
        .update(Tasks)
        .set({ completed: not(Tasks.completed) })
        .where(eq(Tasks.id, id));

      return "Status updated!";
    },
  }),
  delete: defineAction({
    input: z.object({
      id: z.coerce.number({ message: "You must provide tasks ID" }),
    }),
    handler: async ({ id }, context) => {
      await db.delete(Tasks).where(eq(Tasks.id, id));

      return "Task deleted!";
    },
  }),
};
