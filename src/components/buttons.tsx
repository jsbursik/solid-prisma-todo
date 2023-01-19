import { createSignal } from "solid-js";
import styles from "./buttons.module.css";

export default function Buttons() {
  const [formVis, setFormVis] = createSignal(false);

  return (
    <>
      <div class={styles.button_container}>
        <div class="button material-symbols-outlined">delete</div>
        <div class="button" onClick={() => setFormVis((prev) => !prev)}>
          +
        </div>
      </div>

      <div
        class={
          formVis() ? `container ${styles.show}` : `container ${styles.hide}`
        }
        style={{
          "z-index": "1 !important",
        }}
      >
        <form>
          <div class={styles.inputgroup}>
            <label for="task-title">Title</label>
            <input
              type="text"
              name="task-title"
              id="task-title"
              placeholder="Title goes here..."
            />
          </div>
          <div class={styles.inputgroup}>
            <label for="task-content">Content</label>
            <textarea
              id="task-content"
              name="task-content"
              placeholder="Content goes here..."
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
