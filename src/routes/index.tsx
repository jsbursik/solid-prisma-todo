import { For } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getTodos } from "~/db/utils";

import Todo from "~/components/todo";
import Buttons from "~/components/buttons";

export function routeData() {
  return createServerData$(getTodos);
}

export default function Home() {
  const tasks = useRouteData<typeof routeData>();

  return (
    <main>
      <For each={tasks()}>{(task, i) => <Todo todo={task} />}</For>
      <Buttons />
    </main>
  );
}
