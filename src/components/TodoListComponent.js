import React, { useState } from "react";
import { useTodo } from "../Contexts/TodoProvider";
// import { IoIosAddCircle } from "react-icons/io";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import dateFormat from "dateformat";
import { RiPencilFill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";

function TodoListComponent() {
  const {
    addTodo,
    todoList,
    deleteItem,
    toggleTodo,
    setShowEdit,
    selectedCategory,
  } = useTodo();
  const [menuIndex, setMenuIndex] = useState(0);

  const [todo, setTodo] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.length > 0) {
      addTodo({
        id: todoList.length + 1,
        title: todo,
        date: Date(),
        category: selectedCategory,
        isCompleted: false,
      });
      setTodo("");
      setError("");
    } else {
      setError("Can't add empty text");
    }
  };

  return (
    <div className="min-h-screen w-2/3 mx-auto bg-gradient-to-b from-neutral-800 via-neutral-700/40   pt-2 ">
      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-800 text-neutral-300 flex flex-row items-center space-x-2 focus-within:ring-green-600 focus-within:ring-1  relative p-2 py-2"
      >
        <FaPencilAlt />
        <input
          type="text"
          className="bg-transparent outline-none  ring-0  text-white flex-1 caret-green-600"
          placeholder="Add Task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button
          className="p-1 bg-green-600 text-white font-semibold rounded-lg flex items-center"
          type="submit"
          onClick={handleSubmit}
        >
          {/* <IoIosAddCircle size={30} /> */}
          <AiOutlinePlus />
          Add Todo
        </button>
      </form>
      {error.length === 0 ? (
        <></>
      ) : (
        <div className="flex flex-row items-center  p-2 text-red-600 ">
          <p className=" mr-auto">{error}</p>
          <button onClick={() => setError("")}>
            <MdClear />
          </button>
        </div>
      )}

      {/* TabBar */}
      <div className="w-full flex space-x-3 text-neutral-500 border-b border-neutral-700 cursor-pointer text-sm px-3">
        {["All", "In-complete", "Completed"].map((e, i) => (
          <button
            key={e}
            className={`${
              menuIndex === i &&
              "text-green-600 border-b-2 border-green-700 py-2"
            }`}
            onClick={() => setMenuIndex(i)}
          >
            {e}
          </button>
        ))}
      </div>

      {/* Empty list placeholder */}
      {todoList.filter((e) => e.category === selectedCategory).length === 0 && (
        <div className="text-xl flex flex-col justify-center items-center text-neutral-700 my-20">
          <HiOutlineClipboardList size={105} />
          <h1 className="text-2xl font-bold">Empty Todo List</h1>
          <p className="text-xl">You do not have anything...</p>
        </div>
      )}

      {/* Body */}
      <div className="p-2">
        {todoList
          .filter((e) => e.category === selectedCategory)
          .filter((e) => {
            if (menuIndex === 1) {
              return e.isCompleted === false;
            }
            if (menuIndex === 2) {
              return e.isCompleted === true;
            }
            return true;
          })
          .map((e, i) => (
            <div
              key={i}
              className="p-2 bg-neutral-800 text-white  my-1 rounded-md flex flex-row justify-between items-center"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden mx-2">
                <input
                  checked={e.isCompleted}
                  onChange={() => toggleTodo(e)}
                  id="default-checkbox"
                  type="checkbox"
                  className=" accent-green-600  w-5 h-5"
                />
              </div>

              <div className="flex-col flex flex-1">
                <div className="flex text-[12px] text-neutral-500 space-x-3">
                  <span>{e.category}</span>
                  <span>{dateFormat(e.date, "dd mmm yyyy")}</span>
                </div>
                <span className=" text-sm">{e.title}</span>
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
          ))
          .reverse()}
      </div>
    </div>
  );
}

export default TodoListComponent;
