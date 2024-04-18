/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Todo {
  name: string;
  id: number;
  dueDate: Date;
  priority: "high" | "medium" | "low";
  notes: string;
}
