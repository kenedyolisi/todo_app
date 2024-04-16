<script lang="ts">
  interface Props {
    task: Todo | null;
    show: boolean;
  }

  let { task, show }: Props = $props();
</script>

<div
  class={`w-full xs:w-3/5 md:w-1/2 lg:w-1/3 h-dvh py-3 px-4 bg-gray-300 ${show ? "flex" : "hidden"}`}
>
  <dl class="w-full space-y-2">
    <div class="flex items-center gap-2 py-2 px-3 rounded-md bg-gray-200">
      <dt>
        <span class="icon icon-calendar"></span>
        <span class="sr-only">Due date</span>
      </dt>
      <dd>Due {task?.dueDate?.toDateString()}</dd>
    </div>
    
    <div class="flex items-center gap-2 py-2 px-3 rounded-md bg-gray-200">
      <dt>
        <span class="sr-only">Priority</span>
        <span class="icon icon-priority"></span>
      </dt>
      <dd>{task?.priority}</dd>
    </div>
    <div class="flex items-center gap-2 py-2 px-3 rounded-md bg-gray-200">
      <dt>
        <span class="sr-only">Notes</span>
      </dt>
      <dd>{task?.notes}</dd>
    </div>
  </dl>
</div>
