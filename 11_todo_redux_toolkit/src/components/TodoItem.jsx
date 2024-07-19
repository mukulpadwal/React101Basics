import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../features/todo/TodoSlice";

function TodoItem({ todo, setId, setTodo, setIsTodoEditable, isTodoEditable }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center gap-4">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(completeTodo({ id: todo.id }))}
      />
      <input
        type="text"
        className="p-1 text-black w-1/4 rounded-lg"
        value={todo.todo}
        readOnly
      />
      <button
        className="text-white font-bold border p-1 rounded-lg"
        onClick={() => {
          setId(todo.id);
          setTodo(todo.todo);
          setIsTodoEditable((prev) => !prev);
        }}
        disabled={isTodoEditable}
      >
        EDIT
      </button>
      <button
        className="text-white font-bold border p-1 rounded-lg"
        onClick={() => dispatch(deleteTodo({ id: todo.id }))}
      >
        DELETE
      </button>
    </div>
  );
}

export default TodoItem;
