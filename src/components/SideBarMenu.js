import React, { Fragment, useState } from "react";
import {
  BsFillBellFill,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "react-icons/bs";
import { GiRabbitHead } from "react-icons/gi";
import { TiThList } from "react-icons/ti";
import { AiFillSetting, AiOutlinePlus } from "react-icons/ai";
import { useTodo } from "../Contexts/TodoProvider";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
// import { authInstance } from "../config/firebaseConfig";
import { useUser } from "../Contexts/UserProvider";

function SideBarMenu() {
  const { user, isLoading } = useUser();
  const [menuIndex, setMenuIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const [category, setCategory] = useState("");
  const [showCategory, setShowCategory] = useState(true);

  const { categories, addCategory, setSelectedCategory, todoList } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.length > 2) {
      addCategory(category);
      setOpenDialog(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-1/6 sticky top-0   items-start  text-white bg-neutral-800 min-h-screen max-h-screen border-r border-neutral-700/30">
        {/* Header Logo */}
        <Link to="/">
          <h1 className=" text-white text-2xl font-bold  flex flex-row items-center p-2 py-4">
            <GiRabbitHead size={30} />
            Todo<span className="text-green-600">Rabit</span>{" "}
          </h1>
        </Link>
        {/* Settings */}
        <Link to={"/settings"}>
          <div className="flex flex-row  items-center space-x-2 text-neutral-400 font-semibold px-2  py-1 w-full">
            <BsFillBellFill size={18} />
            <span>Notifications</span>
          </div>
        </Link>
        {/* Settings */}
        <Link to={"/settings"}>
          <div className="flex flex-row  items-center space-x-2 text-neutral-400 font-semibold px-2  py-1 w-full">
            <AiFillSetting size={18} />
            <span>Settings</span>
          </div>
        </Link>

        {/* Categories Label */}
        <div
          onClick={() => setShowCategory(!showCategory)}
          className={`flex flex-row justify-start cursor-pointer hover:bg-neutral-900/30 items-center space-x-2 text-neutral-400 font-semibold px-2  py-1 w-full ${
            showCategory && "bg-neutral-900/30"
          }`}
        >
          <TiThList size={18} />
          <span className="flex-grow">Todo Lists</span>
          {showCategory ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
        </div>

        {/* Menu List */}
        {showCategory ? (
          <div className="flex-col  flex-1 bg-neutral-900/20 overflow-y-auto pl-2 w-full">
            {categories.map((e, i) => {
              let taskLength = todoList.filter(
                (todo) => todo.category === e
              ).length;

              return (
                <Link key={i} to={`/todo/${e}`}>
                  <button
                    onClick={() => {
                      setMenuIndex(i);
                      setSelectedCategory(categories[i]);
                    }}
                    className={`w-full flex space-x-2 text-sm text-left pl-5 pr-1 py-1 font-normal ${
                      menuIndex === i ? "text-green-600 " : "text-neutral-400"
                    }`}
                  >
                    <span>{i + 1}.</span> <span className="flex-1">{e}</span>
                    <span className="bg-neutral-900 px-1  text-xs rounded-full">
                      {taskLength}
                    </span>
                  </button>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="flex-col  flex-1 overflow-y-auto pl-2"></div>
        )}

        <div className="flex-col flex p-2 w-full">
          {/* Add New Category */}
          <button
            onClick={() => setOpenDialog(!openDialog)}
            className="text-sm p-2 my-2 flex flex-row items-center justify-center space-x-2 hover:bg-neutral-700 text-neutral-500 border border-neutral-700  w-full rounded-md outline-none focus:ring-1 focus:ring-green-600"
          >
            <AiOutlinePlus />
            <span>Add new category</span>
          </button>
          {/* Footer */}
          <Link to="/signin">
            <div className="flex p-2 border border-neutral-700/40 rounded-lg  items-center w-full">
              <div className="flex flex-col  text-neutral-400  text-xs mr-auto">
                <h1 className="">Signed in as</h1>
                <h1 className="font-bold">{!isLoading && user.displayName}</h1>
              </div>
              <img
                src={
                  !isLoading && user.photoURL
                  // "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
                }
                alt="user"
                className="rounded-full w-8 h-8 mx-2"
              />

              {/* <BsFillCaretDownFill /> */}
            </div>
          </Link>

          <div className="flex flex-wrap text-sm gap-3 p-2 text-neutral-500">
            <Link to={"/terms-of-use"}>Terms of use</Link>
            <Link to={"/privacy-policies"}>Privacy</Link>
            <Link to={"/terms-of-use"}>About</Link>
          </div>
          <span className="mx-auto text-neutral-600">&copy; Nitesh Bhagat</span>
        </div>
      </div>

      <Transition appear show={openDialog} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpenDialog(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-1 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-neutral-800 text-neutral-600 p-6 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 "
                  >
                    Add category
                  </Dialog.Title>

                  <form onSubmit={handleSubmit}>
                    <div className="mt-2">
                      <input
                        type="text"
                        onChange={(e) => setCategory(e.target.value)}
                        placeholder="College tasks, Bucket list etc"
                        className="w-full bg-neutral-700 py-1 px-2 text-neutral-300 ring-0 outline-none"
                      />
                      <p className="text-sm text-gray-500 py-2">
                        Add a category like College Tasks and assign todos into
                        it
                      </p>
                    </div>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default SideBarMenu;
