<script lang="ts">
  import { intlFormat, intlFormatDistance, isPast } from "date-fns";
  interface Props {
    task: Task | undefined;
    showDetails: boolean;
  }

  let { task, showDetails }: Props = $props();
</script>

<div
  class={`w-full xs:w-3/5 md:w-1/2 lg:w-1/3 h-dvh py-3 px-4 bg-gray-300 ${showDetails ? "flex" : "hidden"}`}
>
  <dl class="w-full space-y-2">
    <div class="flex items-center gap-2 py-2 px-3 rounded-md bg-gray-200">
      <dt class="flex items-center">
        <span class="icon icon-calendar"></span>
        <span class="sr-only">Due date</span>
      </dt>
      <dd
        class={` ${task?.dueDate && isPast(task?.dueDate) ? "text-red-500" : ""}`}
        title={task?.dueDate && isPast(task.dueDate)
          ? `Due ${intlFormatDistance(task?.dueDate, new Date())}`
          : ""}
      >
        Due {task?.dueDate
          ? intlFormat(task?.dueDate, {
              dateStyle: "medium",
            })
          : ""}
      </dd>
    </div>

    <div class="flex items-center gap-2 py-2 px-3 rounded-md bg-gray-200">
      <dt>
        <span class="sr-only">Priority</span>
        <span class="icon icon-priority"></span>
      </dt>
      <dd>{task?.priority}</dd>
    </div>
    <div class="flex items-center gap-2 py-2 px-3 rounded-md bg-gray-200">
      <dt class="flex items-center gap-2">
        <span class="icon icon-sticky-note"></span>
        <span class="">Notes</span>
      </dt>
      <dd>{task?.notes}</dd>
    </div>
  </dl>
</div>
