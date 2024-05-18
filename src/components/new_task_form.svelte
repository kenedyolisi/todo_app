<script lang="ts">
  import { Date } from "svelte/reactivity";

  let name = $state("");
  let dueDate: Date | undefined = $state();
  let priority: "high" | "medium" | "low" | undefined = $state();
  let notes = $state("");

  let dialogElement: HTMLDialogElement;
  let formElement: HTMLFormElement;

  async function submit(
    event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement }
  ) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch(location.href + "api/add_task", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    const responseMessage = data.message;
    console.log(responseMessage);
    formElement.reset();
    dialogElement.close();
  }
</script>

<button
  class="inline-flex items-center gap-1 py-3 px-4 rounded-md bg-slate-800 hover:bg-slate-900 text-gray-100"
  type="button"
  onclick={() => {
    dialogElement.showModal();
  }}
>
  <span class="icon icon-plus w-6 h-6"></span>
  Add task
</button>

<dialog
  class={`w-3/4 min-w-fit max-w-2xl p-4 backdrop:bg-black/40 rounded-lg transition-transform duration-400  scale-0 open:scale-100`}
  bind:this={dialogElement}
>
  <form
    class="space-y-3 z-10 backdrop:bg-slate-600"
    method="post"
    onsubmit={submit}
    autocomplete="off"
    bind:this={formElement}
  >
    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0"
    >
      <label class="w-2/5" for="new-task">New task:</label>
      <input
        class="block w-full py-2 px-4 border rounded-md border-gray-200 focus:outline-blue-500"
        name="name"
        bind:value={name}
        type="text"
        placeholder="Task"
        autocomplete="off"
        required
      />
    </div>

    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0"
    >
      <label class="w-2/5" for="due-date">Due date:</label>
      <input
        class="w-full py-2 px-4 border rounded-md border-gray-200 focus:outline-blue-500 focus:caret-blue-500"
        name="due-date"
        type="date"
        bind:value={dueDate}
      />
    </div>

    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0"
    >
      <span class="w-2/5">Priority:</span>
      <div class="flex w-full">
        <label class="w-2/5">
          <input
            class="checked:text-blue-500"
            name="priority"
            value="high"
            type="radio"
            bind:group={priority}
          />
          High
        </label>
        <label class="w-2/5">
          <input
            name="priority"
            value="medium"
            type="radio"
            bind:group={priority}
          />
          Medium
        </label>
        <label class="w-2/5">
          <input
            name="priority"
            value="low"
            type="radio"
            bind:group={priority}
          />
          <span class="peer-checked:text-blue-500">Low </span>
        </label>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0"
    >
      <label class="w-2/5" for="task-notes">Notes:</label>
      <textarea
        class="w-full py-2 px-4 border rounded-md border-gray-200 focus:outline-blue-500 focus:caret-blue-500"
        name="notes"
        bind:value={notes}
      ></textarea>
    </div>
    <div class="flex gap-4">
      <button
        class="w-full py-2 px-3 border border-red-600 rounded-md hover:bg-red-600 text-red-600 hover:text-white"
        type="reset"
        onclick={() => dialogElement.close("task not added")}
      >
        Cancel
      </button>
      <button
        class="w-full py-2 px-3 border rounded-md border-green-700 hover:bg-green-700 text-green-700 hover:text-gray-100"
        type="submit">Add</button
      >
    </div>
  </form>
</dialog>
