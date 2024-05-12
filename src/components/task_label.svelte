<script lang="ts">
  interface Props {
    task: Task;
  }
  let { task }: Props = $props();
</script>

<form>
  <label class="flex items-center gap-2">
    <input
      class="w-5 h-5"
      name="name"
      type="checkbox"
      bind:checked={task.completed}
    />
    {#if task.completed}
      <s> {task.name} </s>
    {:else}
      {task.name}
    {/if}
  </label>
</form>
