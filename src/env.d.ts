/// <reference path="../.astro/types.d.ts" />
/// <reference types="vitest" />
/// <reference types="svelte" />

type Task = typeof import("astro:db").Tasks.$inferInsert & {
  priority?: "high" | "medium" | "low";
};
