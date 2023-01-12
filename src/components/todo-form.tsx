import { createSignal } from "solid-js";
import styles from "./todo-form.module.css";

export default function TodoForm() {
  const [formVis, setFormVis] = createSignal(false);

  return (
    <>
      <div class={styles.button} onClick={() => setFormVis((prev) => !prev)}>
        +
      </div>
    </>
  );
}
