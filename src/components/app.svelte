<script lang="ts">
  import NewTask from "./new_task.svelte";
  import TaskDetails from "./task_details.svelte";
  import "/src/styles/app.css";
  import { intlFormat } from "date-fns";

  let tasks: Todo[] = $state([
    {
      name: "Pay bills",
      dueDate: new Date(2024, 3, 13),
      priority: "low",
      completed: false,
    },
    {
      name: "Mow lawn",
      dueDate: new Date(),
      priority: "medium",
      completed: true,
    },
    {
      name: "Read book",
      priority: "high",
      completed: false,
    },
  ]);

  let selectedTask: Todo | undefined = $state();
  let prevSelected: Todo | undefined = $state();
  let showTaskDetails = $state(false);

  function addTask(task: Todo) {
    tasks = [...tasks, task];
  }
</script>

<main class="">
  <div class="flex gap-3">
    <div class="grow py-4 px-5">
      <h1 class="mb-3 name-3xl font-bold">Tasks</h1>
      <ul class="flex flex-col gap-2">
        {#each tasks as task, index (index)}
          <li class="rounded-md odd:bg-gray-200 hover:bg-gray-300">
            <button
              class="flex flex-col w-full p-3"
              onclick={() => {
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
                    >Due {task &&
                      task.dueDate &&
                      intlFormat(new Date(task.dueDate), {
                        locale: navigator.language,
                      })}</span
                  >
                </small>
              </div>
            </button>
          </li>
        {/each}
        <li>
          <NewTask {addTask} />
        </li>
      </ul>
    </div>

    {#if selectedTask}
      <TaskDetails task={selectedTask} show={showTaskDetails} />
    {/if}
  </div>
</main>
