import server$ from "solid-start/server";
import styles from "./todo.module.css";
import { toggleTodo } from "~/db/utils";

export type Todo = {
  id: number;
  title: string;
  content: string;
  status: boolean;
};

const updateTodo = server$((id) => {
  toggleTodo(id);
});

export function truncText(text: string, limit: number): string {
  let split = text.split(" ");

  return split.length > limit + 1
    ? split.slice(0, limit).join(" ") + "..."
    : text;
}

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <div class="container">
      <div class={styles.tasktext}>
        <b class={styles.taskname}>{truncText(todo.title, 8)}</b>
        <p class={styles.taskcontent}>{truncText(todo.content, 20)}</p>
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
