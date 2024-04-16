/// <reference types="svelte" />
/// <reference types="vite/client" />

interface Todo {
  name: string;
  dueDate?: Date;
  priority?: "high" | "medium" | "low";
  completed?: boolean;
  notes?: string;
}
