import ToDoItem from "./ToDoItem";

const ToDoList = ({todos, removeTodo, updateTodo}) => {
  return (
    <div className="mt-8 rounded-t-md overflow-hidden bg-white [&>article]:p-4">
      {todos.map((todo) => (
        <ToDoItem 
        key={todo.id} 
        todo={todo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}>
        </ToDoItem>
      ))}
    </div>
  );
};
export default ToDoList;
