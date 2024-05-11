<script lang="ts">
  import { intlFormat, intlFormatDistance, isPast } from "date-fns";
  import NewTaskForm from "./new_task_form.svelte";
  import TaskDetails from "./task_details.svelte";

  let promise: Promise<Task[]> = fetch(`${location.href}/api/tasks.json`).then(
    (response) => response.json()
  );

  let selectedTask: Task | undefined = $state();
  let prevSelected: Task | undefined = $state();
  let showTaskDetails = $state(false);
</script>

<main>
  <div class="flex gap-3">
    <div class="grow py-4 px-5">
      <h1 class="mb-3 name-3xl font-bold">Tasks</h1>
      <ul class="flex flex-col gap-2">
        {#await promise}
          <li>Loading tasks...</li>
        {:then tasks}
          {#each tasks as task, index (index)}
            <li class="rounded-md odd:bg-gray-200 hover:bg-gray-300">
              <button
                class="flex flex-col w-full p-3"
                onclick={(event) => {
                  if (prevSelected === task) {
                    showTaskDetails = !showTaskDetails;
                  } else {
                    showTaskDetails = true;
                    prevSelected = task;
                  }
                  selectedTask = task;
                }}
              >
                <label class="flex items-center gap-2">
                  <input
                    class="w-4 h-4"
                    type="checkbox"
                    bind:checked={task.completed}
                  />
                  {#if task.completed}
                    <s>{task.name}</s>
                  {:else}
                    {task.name}
                  {/if}
                </label>
                <div class="ms-6">
                  <small class="flex items-center gap-2">
                    <span class="icon icon-calendar"></span>
                    <span
                      class={` ${task?.dueDate && isPast(task?.dueDate) ? "text-red-500" : ""}`}
                      title={task?.dueDate && isPast(task.dueDate)
                        ? `Due ${intlFormatDistance(task?.dueDate, new Date())}`
                        : ""}
                      >Due {task &&
                        task.dueDate &&
                        intlFormat(new Date(task.dueDate), {
                          dateStyle: "full",
                        })}</span
                    >
                  </small>
                </div>
              </button>
            </li>
          {/each}
        {/await}
      </ul>

      <NewTaskForm />
    </div>

    {#if selectedTask}
      <TaskDetails task={selectedTask} showDetails={showTaskDetails} />
    {/if}
  </div>
</main>
