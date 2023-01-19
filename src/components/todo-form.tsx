import { createSignal } from "solid-js";
import styles from "./todo-form.module.css";

export default function TodoForm() {
  const [formVis, setFormVis] = createSignal(false);

  return (
    <>
      <div class={styles.button} onClick={() => setFormVis((prev) => !prev)}>
        +
      </div>
      <div class="container">
        <form>
          <label for="task-title">Title</label>
          <input type="text" id="task-title" placeholder="Title goes here..." />
          <br />
          <label for="task-content">Content</label>
          <textarea id="task-content" placeholder="Content goes here..." />
        </form>
      </div>
    </>
  );
}
