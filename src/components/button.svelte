<script lang="ts">
  import type {HTMLButtonAttributes } from "svelte/elements";

  interface Props extends HTMLButtonAttributes {}

  let {children, class:classList, type = "button", ...attributes }: Props = $props();

</script>

<button class={`rounded-md bg-primary focus-within:ring-4 focus-within:ring-offset-2 ${classList}`} {type} {...attributes} >
{@render children()}
</button>
