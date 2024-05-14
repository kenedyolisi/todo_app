<script lang="ts">
  import { intlFormat, intlFormatDistance, isPast } from "date-fns";
  import NewTaskForm from "@components/new_task_form.svelte";
  import TaskDetails from "@components/task_details.svelte";
  import TaskLabel from "@components/task_label.svelte";
  import Alert from "@components/alert.svelte";

  let promise: Promise<Task[]>|undefined = $state();

  promise = fetch(`/api/tasks`).then((response) => response.json());

  let selectedTask: Task | undefined = $state();
  let prevSelected: Task | undefined = $state();
  let showTaskDetails = $state(false);

  async function deleteTask(id: number) {
    await fetch(`/api/tasks/${id}`, { method: "delete" });
    promise = fetch(`api/tasks`).then((response) => response.json());
  }
</script>

<main>
  <div
    class="absolute top-5 z-10 w-5/6 max-w-lg left-1/2 -translate-x-1/2 space-y-3"
    id="alert"
  >
    <Alert message="alert 1" />
    <Alert message="alert 2" />
  </div>
  <div class="flex gap-3">
    <div class="grow py-4 px-8">
      <h1 class="mb-3 name-3xl font-bold">Tasks</h1>

      {#await promise}
        <p>Loading tasks...</p>
      {:then tasks}
        {#if tasks.length}
          <ul class="flex flex-col gap-2 my-4">
            {#each tasks as task (task.id)}
              <li
                class="group relative rounded-md odd:bg-gray-200 hover:bg-gray-300"
              >
                <button
                  class="flex flex-col w-full p-3"
                  onclick={() => {
                    if (prevSelected?.id === task.id) {
                      showTaskDetails = !showTaskDetails;
                    } else {
                      showTaskDetails = true;
                      prevSelected = task;
                    }
                    selectedTask = task;
                  }}
                >
                  <TaskLabel {task} />
                  <div class="ms-6">
                    <small class="flex items-center gap-2">
                      <span class="icon icon-calendar"></span>
                      <span
                        class={`${!task.completed && task?.dueDate && isPast(task?.dueDate) ? "text-red-500" : ""}`}
                        title={task?.dueDate && isPast(task.dueDate)
                          ? `Due ${intlFormatDistance(task?.dueDate, new Date())}`
                          : ""}
                        >Due {task &&
                          task.dueDate &&
                          intlFormat(new Date(task.dueDate), {
                            dateStyle: "full",
                          })}
                      </span>
                    </small>
                  </div>
                </button>

                <div
                  class="absolute right-3 top-1/2 -translate-y-1/2 invisible group-hover:visible"
                >
                  <button type="button">
                    <span class="icon icon-pencil"></span>
                  </button>
                  <button
                    class="hover:text-red-500 leading-4 p-1 border border-inherit rounded-md"
                    title="delete task"
                    type="button"
                    onclick={() => {
                      const OK = confirm(
                        "Are you sure you want to delete this task?"
                      );
                      if (OK) {
                        deleteTask(task.id);
                      }
                    }}
                  >
                    <span class="icon icon-trash"></span>
                  </button>
                </div>
              </li>
            {/each}
          </ul>
        {:else}
          <p>You have no tasks!</p>
        {/if}
      {:catch}
        <p class="text-red-500">Something went wrong! Could not load tasks.</p>
      {/await}

      <NewTaskForm />
    </div>

    {#if selectedTask}
      <TaskDetails task={selectedTask} showDetails={showTaskDetails} />
    {/if}
  </div>
</main>
