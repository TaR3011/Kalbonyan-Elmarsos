import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
  // // const todos = [new Todo("Learn React"), new Todo("Leran Typescript")];
  // const [todosList, setTodosList] = useState<Todo[]>([]);

  // const AddTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText);

  //   setTodosList((prevState) => {
  //     return [...prevState, newTodo];
  //   });
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodosList((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== todoId);
  //   });
  // };

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
