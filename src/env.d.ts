/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vitest" />
/// <reference types="svelte" />

interface Task {
  name: string;
  id: number;
  dueDate?: Date;
  priority?: "high" | "medium" | "low";
  completed: boolean;
  notes?: string;
}
