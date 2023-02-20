import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { useTodo } from "../Contexts/TodoProvider";

function EditPanel() {
  const { showEdit, setShowEdit, updateTodo } = useTodo();
  const [todo, setTodo] = useState(showEdit.title);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateTodo(showEdit, todo);
    setShowEdit(null);
  };

  return (
    <div className="flex  flex-col w-2/5 items-center ">
      <div className="w-full  p-3 flex flex-col  border border-neutral-800/60 ">
        <h1 className="font-bold text-white pb-3">Edit Todo</h1>

        {/* form */}
        <form onSubmit={handleSubmit} className=" flex flex-col space-y-2">
          <input
            type="text"
            className="bg-neutral-800 outline-none ring-0 p-3 text-white flex-1 caret-green-600"
            placeholder="Add Task"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button
            className="p-2 text-white bg-green-600 flex flex-row justify-center items-center "
            type="submit"
          >
            <BsCheck2 size={20} />
            <span>Save</span>
          </button>
          <button
            onClick={() => setShowEdit(null)}
            className="p-2 text-white"
            type="submit"
          >
            Cancel
          </button>
        </form>
      </div>
      <p className="text-sm text-neutral-700 p-2">A Website by Nitesh Bhagat</p>
    </div>
  );
}

export default EditPanel;
