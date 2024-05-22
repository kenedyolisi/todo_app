<script lang="ts">
  
  export let menuIsOpen: boolean;

  let text = "";
  let showCancelButton: boolean;
  $: showCancelButton = text.length > 0;
  

  let input: HTMLInputElement;

</script>

<form method="get">
  <label class="relative">
    <button
      class={`absolute top-1/2 leading-4 -translate-y-1/2 p-2 rounded-md ${
        menuIsOpen ? "" : "hover:bg-gray-300"
      }`}
      title={menuIsOpen ? "" : "Search"}
      type="button"
      on:click={() => {
        menuIsOpen = true;
      }}
    >
      <span class="icon icon-search size-6"></span>
    </button>

    <input
      class={`h-8 placeholder:italic pl-8 rounded-md ${menuIsOpen ? "" : "hidden"} `}
      type="text"
      placeholder="Search tasks..."
      bind:value={text}
      bind:this={input}
    />
    {#if showCancelButton}
      <button
        class="absolute top-1/2 -translate-y-1/2 right-1 leading-4 p-1 hover:bg-gray-200"
        type="reset"
        on:click={() => (text = "")}
      >
        <span class="icon icon-close"> </span>
      </button>
    {/if}
  </label>
</form>
