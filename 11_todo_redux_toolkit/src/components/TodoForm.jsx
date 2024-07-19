import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/TodoSlice";

function TodoForm({ isTodoEditable, setIsTodoEditable, todo, setTodo, id }) {
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (isTodoEditable) {
          dispatch(updateTodo({ id: id, todo: todo }));
          setIsTodoEditable((prev) => !prev);
          setTodo("");
        } else {
          dispatch(addTodo({ todo: todo }));
          setTodo("");
        }
      }}
      className="flex flex-row justify-center items-center w-full"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="p-1 text-black w-1/4 rounded-l-lg"
      />
      <button
        type="submit"
        className="text-white font-bold border p-1 rounded-r-lg"
      >
        {!isTodoEditable ? "ADD" : "UPDATE"}
      </button>
    </form>
  );
}

export default TodoForm;
