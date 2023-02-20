import { createContext, useContext, useState } from "react";

const Todo = createContext();

const TodoProvider = ({ children }) => {
  // Doc: TODO LIST.
  const [todoList, setTodoList] = useState([]);

  // Doc: Category List.
  const [categories, setCategories] = useState(["Home"]);

  // Doc: Selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Doc: EDIT TODO.
  const [showEdit, setShowEdit] = useState(null);

  // Doc: Add a new todo in the TodoList.
  const addTodo = (item) => {
    console.log(item);
    setTodoList([...todoList, item]);
  };

  // Doc: Delete all Todos from the List.
  const deleteAll = () => {
    setTodoList([]);
  };

  // Doc: Delete a specific todo from the List.
  const deleteItem = (e) => {
    const itemIndex = todoList.indexOf(e);
    let newTodoList = [...todoList];

    if (itemIndex >= 0) {
      newTodoList.splice(itemIndex, 1);
    }
    setTodoList(newTodoList);
  };

  // Doc: Toggle isCompleted checkbox .
  const toggleTodo = (newItem) => {
    let newTodoList = [...todoList];

    let itemIndex = newTodoList.indexOf(newItem);

    let status = newTodoList[itemIndex].isCompleted;

    newTodoList[itemIndex] = {
      ...newTodoList[itemIndex],
      isCompleted: !status,
    };

    setTodoList(newTodoList);
  };

  // Doc: Update a specific todo.
  const updateTodo = (newItem2, todo) => {
    let newTodoList = [...todoList];

    let itemIndex = newTodoList.indexOf(newItem2);

    newTodoList[itemIndex] = { ...newTodoList[itemIndex], title: todo };
    setTodoList(newTodoList);
  };

  // Doc: Add a category
  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  // Doc: Delete a category
  const deleteCategory = (newCategory) => {
    let newTodoList = [...categories];
    const itemIndex = newTodoList.indexOf(newCategory);

    if (itemIndex >= 0) {
      newTodoList.splice(itemIndex, 1);
    }

    setCategories(newTodoList);
  };

  const properties = {
    todoList,
    addTodo,
    deleteAll,
    deleteItem,
    toggleTodo,
    showEdit,
    setShowEdit,
    updateTodo,
    categories,
    addCategory,
    selectedCategory,
    setSelectedCategory,
    deleteCategory,
  };

  return <Todo.Provider value={properties}>{children}</Todo.Provider>;
};

export default TodoProvider;

export const useTodo = () => useContext(Todo);
