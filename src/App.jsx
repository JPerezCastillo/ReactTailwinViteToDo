import { useState } from "react";
import Header from "./Components/Header";
import ToDoComputed from "./Components/ToDoComputed";
import ToDoCreate from "./Components/ToDoCreate";
import ToDoFilter from "./Components/ToDoFilter";
import ToDoList from "./Components/ToDoList";

const initialStateTodos = [
  {id:1, title:"Go to the Gym", completed: true},
  {id:2, title:"Cook", completed: false},
  {id:3, title:"Go with the dog", completed: false},
  {id:4, title:"Make Yoga", completed: false},
  {id:5, title:"Complete Online Kurs", completed: false},
];

const App = () => {
  // Actung corchete
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filterTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div
      className="bg-cover min-h-screen bg-gray-300 
    bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-no-repeat dark:bg-gray-900 dark:bg-[url('./src/assets/images/bg-mobile-dark.jpg')]"
    >
      <Header></Header>
      <main className="container mx-auto mt-8 px-4">
        <ToDoCreate createTodo={createTodo}></ToDoCreate>
        
        <ToDoList
          todos={filterTodos(todos)}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        ></ToDoList>

        <ToDoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        ></ToDoComputed>
      </main>
      <ToDoFilter changeFilter={changeFilter} filter={filter}></ToDoFilter>

      <p className="mt-8 text-center dark:text-gray-400">Drag and drop</p>
    </div>
  );
};
export default App;