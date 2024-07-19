import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(null);
  let todos = useSelector((state) => state.todos);

  useEffect(() => {
    const localTodos = JSON.parse(window.localStorage.getItem("todos"));
    console.log(localTodos);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen w-full bg-black p-4 flex flex-col justify-start items-center">
      <h1 className="text-center text-white text-3xl py-4">Todo List</h1>
      <div className="border w-10/12 h-screen">
        <div className="m-4 flex flex-col justify-center items-center">
          <TodoForm
            isTodoEditable={isTodoEditable}
            setIsTodoEditable={setIsTodoEditable}
            todo={todo}
            setTodo={setTodo}
            id={id}
          />
        </div>

        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="m-4">
              <TodoItem
                todo={todo}
                setId={setId}
                setTodo={setTodo}
                isTodoEditable={isTodoEditable}
                setIsTodoEditable={setIsTodoEditable}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
