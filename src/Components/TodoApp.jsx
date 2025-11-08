import React, { useContext, useState } from "react";
import TodoList from "./TodoList";
import HeroContent from "./HeroContent";
import TodoContext from "../Context/todoContext";

const TodoApp = () => {
  const { todoList } = useContext(TodoContext);
  return todoList.length == 0 ? <HeroContent /> : <TodoList />;
};

export default TodoApp;
