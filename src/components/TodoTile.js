import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { useTodo } from "../Contexts/TodoProvider";

function TodoTile({ id, title, isCompleted, category }) {
  const {
    deleteItem,
    toggleTodo,

    setShowEdit,
  } = useTodo();

  const e = { id, title, isCompleted, category };

  console.log(e);

  return (
    <div className="p-2 bg-neutral-800 text-white  my-1 rounded-md flex flex-row justify-between items-center">
      <div className="w-5 h-5 rounded-full overflow-hidden mx-2">
        <input
          checked={isCompleted}
          onChange={() => toggleTodo(e)}
          id="default-checkbox"
          type="checkbox"
          className=" accent-green-600  w-5 h-5"
        />
      </div>

      <div className="flex-col flex flex-1">
        <span className="text-[12px] text-neutral-500">{category}</span>
        <span className=" text-sm">{title}</span>
      </div>

      <button
        className="bg-neutral-700 text-xs  text-neutral-400 rounded-full p-1 mx-2"
        onClick={() => setShowEdit(e)}
      >
        <RiPencilFill size={20} />
      </button>

      <button
        className="bg-neutral-700 text-xs  text-neutral-400 rounded-full p-1"
        onClick={() => deleteItem(e)}
      >
        <AiOutlineDelete size={20} />
      </button>
    </div>
  );
}

export default TodoTile;
