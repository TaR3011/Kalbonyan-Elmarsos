import { type } from "@testing-library/user-event/dist/type";
import React, { ElementType, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<Props> = (props) => {
  // const todos = [new Todo("Learn React"), new Todo("Leran Typescript")];
  const [todosList, setTodosList] = useState<Todo[]>([]);

  const AddTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodosList((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodosList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todosList,
    addTodo: AddTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
