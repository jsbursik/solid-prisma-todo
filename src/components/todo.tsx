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

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <div class={styles.container}>
      <div class={styles.tasktext}>
        <b class={styles.taskname}>{todo.title}</b>
        <p class={styles.taskcontent}>{todo.content}</p>
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
