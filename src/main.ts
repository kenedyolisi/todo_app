import App from "./app.svelte";
import "./app.scss";

const app = new App({
  target: document.getElementById("app")!,
});

export default app;
