<script lang="ts">
  import { slide } from "svelte/transition";
  import Search from "@components/search.svelte";
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<nav
  class="flex flex-col items-start gap-2 h-screen px-4 py-3 space-y-3 bg-gray-200"
  transition:slide={{ axis: "y", duration: 300 }}
>
  <button
    class="p-2 leading-4 rounded-md hover:bg-gray-300"
    type="button"
    on:click={() => toggleMenu()}
    title={isOpen ? "" : "Menu"}
  >
    <span class="sr-only">Menu</span>
    <span class="icon icon-menu size-6"></span>
  </button>
  <Search menuIsOpen={isOpen} />
  <ul class="flex flex-col grow">
    <li>
      <a
        class="flex items-center gap-2 p-2 rounded-md hover:bg-gray-300"
        href="/"
        title={`${isOpen ? "" : "Tasks"}`}
      >
        <span class="icon icon-home size-6"></span>
        <span class={`${isOpen ? "inline" : "hidden"}`}>Tasks</span>
      </a>
    </li>
    <li>
      <a
        class="flex items-center gap-2 p-2 rounded-md hover:bg-gray-300"
        href="today"
        title={`${isOpen ? "" : "Today"}`}
      >
        <span class="icon icon-today size-6"></span>
        <span class={`${isOpen ? "inline" : "hidden"}`}>Today</span>
      </a>
    </li>
    <li>
      <a
        class="flex items-center gap-2 p-2 rounded-md hover:bg-gray-300"
        href="tomorrow"
        title={`${isOpen ? "" : "Tomorrow"}`}
      >
        <span class="icon icon-tomorrow size-6"></span>
        <span class={`${isOpen ? "inline" : "hidden"}`}>Tomorrow</span>
      </a>
    </li>
    <li class="">
      <a
        class="flex items-center gap-2 p-2 rounded-md hover:bg-gray-300"
        href="settings"
        title={`${isOpen ? "" : "Settings"}`}
      >
        <span class="icon icon-gear size-6"></span>
        <span class={`${isOpen ? "inline" : "hidden"}`}>Settings</span>
      </a>
    </li>
  </ul>
</nav>
