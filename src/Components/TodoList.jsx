"use client";
import React, { useContext, useState, useMemo } from "react";
import { Search, ListTodo, Sparkles } from "lucide-react";
import TodoCard from "./TodoCard";
import TodoContext from "../Context/todoContext";

const TodoList = () => {
  const { todoList, deleteTodo, completeTodo } = useContext(TodoContext);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered Tasks
  const filteredTodos = useMemo(() => {
    return todoList.filter(
      (todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        todo.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (todo.category &&
          todo.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [todoList, searchQuery]);

  return (
    <div className="min-h-screen w-full px-5 py-20 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-white overflow-hidden">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2 text-center">
        <div className="flex items-center gap-4">
          <ListTodo size={34} className="text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Manage Your <span className="text-primary">Tasks</span>
          </h1>
        </div>
        <p className="text-sm max-w-sm text-zinc-400">
          Stay organized and track your goals easily — search, manage, and
          complete tasks with a smooth interface.
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-md mt-5">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />
          <input
            type="text"
            placeholder="Search by title, description, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 
                       text-sm text-white placeholder:text-zinc-500 focus:outline-none 
                       focus:ring-1 focus:ring-primary/70 shadow-[0_0_15px_rgba(0,255,160,0.05)]
                       transition-all"
          />
        </div>
      </div>

      {/* Task List Section */}
      <div className="max-w-7xl mx-auto mt-16 relative">
        {filteredTodos.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <Sparkles size={42} className="text-zinc-700 mb-3" />
            {todoList.length === 0 ? (
              <>
                <h2 className="text-lg font-medium text-zinc-400">
                  No tasks yet
                </h2>
                <p className="text-sm text-zinc-500">
                  Start by adding your first task to stay productive 🌱
                </p>
              </>
            ) : (
              <>
                <h2 className="text-lg font-medium text-zinc-400">
                  No matches found
                </h2>
                <p className="text-sm text-zinc-500">
                  Try refining your search or add a new task.
                </p>
              </>
            )}
          </div>
        ) : (
          <div
            className="relative flex flex-wrap justify-center items-center gap-10 mt-10
                       before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 
                       before:h-[3px] before:bg-gradient-to-r from-primary/50 via-primary/10 to-transparent 
                       before:rounded-full before:-z-10 before:blur-[2px]"
          >
            {filteredTodos.map((task, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-80 group transition-all"
              >
                {/* ✨ Shining Connector Line to Next Card */}
                {index !== filteredTodos.length - 1 && (
                  <span
                    className="absolute right-[-45px] top-1/2 w-[50px] h-[3px] rounded-full 
               bg-gradient-to-r from-primary via-lime-500 to-primary
               animate-shine"
                  ></span>
                )}

                <TodoCard
                  Task={task}
                  CompleteTodo={completeTodo}
                  DeleteTodo={deleteTodo}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
