// See 👉 https://astro.build/db/config

import { column, defineDb, defineTable } from "astro:db";

const Tasks = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true }),
    title: column.text({ unique: true }),
    due: column.date({ optional: true }),
    priority: column.text({ optional: true }),
    completed: column.boolean({ default: false }),
    notes: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: { Tasks },
});
