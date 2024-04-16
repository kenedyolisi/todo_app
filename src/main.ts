import App from "./components/app.svelte";
import { mount } from "svelte";

export default mount(App, {
  target: document.getElementById("app")!,
});
