// See 👉 https://astro.build/db/config

import { column, defineDb, defineTable } from "astro:db";

const tasks = defineTable({
  columns: {
    name: column.text({ unique: true }),
    id: column.number({ primaryKey: true, unique: true }),
    due: column.date({ optional: true }),
    priority: column.text({ optional: true }),
    completed: column.boolean({ default: false }),
    notes: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: { tasks },
});
