<script lang="ts">
  import Todo from "@components/task.svelte";

  export let tasks: Task[];
</script>

{#if tasks.length}
  <ul>
    {#each tasks as task}
      <Todo {task} />
    {/each}
  </ul>
{:else}
  <p>You no tasks</p>
{/if}
