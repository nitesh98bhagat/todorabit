import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { useTodo } from "../Contexts/TodoProvider";

function Settings() {
  const { categories, deleteCategory } = useTodo();
  return (
    <div className="flex flex-col mx-auto w-1/2 bg-neutral-800">
      <div className="p-3 bg-neutral-900/50 text-neutral-300">Settings</div>

      <div className="p-3">
        {categories.map((e, i) => (
          <div
            key={i}
            className="p-2 bg-neutral-800 text-neutral-300  my-1 rounded-md flex flex-row justify-between items-center"
          >
            <span className=" text-lg font-semibold mr-auto">{e}</span>

            <button
              className="bg-neutral-700 text-xs  text-neutral-400 rounded-full p-1 mx-2"
              // onClick={() => setShowEdit(e)}
            >
              <RiPencilFill size={20} />
            </button>

            <button
              className="bg-neutral-700 text-xs  text-neutral-400 rounded-full p-1"
              onClick={() => deleteCategory(e)}
            >
              <AiOutlineDelete size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;
