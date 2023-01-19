import server$ from "solid-start/server";
import { toggleTodo } from "~/db/utils";
import styles from "./todo.module.css";

export type Todo = {
  id: number;
  title: string;
  content: string;
  status: boolean;
};

const updateTodo = server$((id) => {
  toggleTodo(id);
});

export function truncText(text: string): string {
  let limit = 15;
  let split = text.split(" ");

  return split.length > limit + 1
    ? split.slice(0, limit).join(" ") + "..."
    : text;
}

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <div class="container">
      <div class={styles.tasktext}>
        <b class={styles.taskname}>{truncText(todo.title)}</b>
        <p class={styles.taskcontent}>{truncText(todo.content)}</p>
      </div>
      <input
        class={styles.completed}
        type="checkbox"
        checked={todo.status}
        onClick={(e) => updateTodo(todo.id)}
      ></input>
    </div>
  );
}
