import React from "react";
import EditPanel from "../components/EditPanel";
import TodoListComponent from "../components/TodoListComponent";
import { useTodo } from "../Contexts/TodoProvider";

function TodoPage() {
  const { showEdit } = useTodo();

  return (
    <div className="flex flex-row flex-1  bg-neutral-900 ">
      <TodoListComponent />
      {!(showEdit === null) && <EditPanel />}
    </div>
  );
}

export default TodoPage;
