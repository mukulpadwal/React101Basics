import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "../features/todo/TodoSlice";

const store = configureStore({
  reducer: TodoReducer,
});

export default store;
