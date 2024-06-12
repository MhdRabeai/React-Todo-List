import { useState, useRef } from "react";
import "./css/Todo.css";
import { useEffect } from "react";
import { TodoItems } from "./TodoItems";
let count = 0;
export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inptRef = useRef(null);
  function addTodo() {
    setTodos([
      ...todos,
      {
        id: count++,
        text: inptRef.current.value,
        display: "",
      },
    ]);
    inptRef.current.value = "";
    localStorage.setItem("todos_count", count);
  }
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem('todos_count');
  }, []);
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do List</div>
      <div className="todo-add">
        <input
          ref={inptRef}
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
        />
        <button className="todo-add-btn" onClick={addTodo}>
          Add
        </button>
      </div>
      <div className="todo-list">
        {todos.map((item, i) => {
          return (
            <TodoItems
              key={i}
              setTodos={setTodos}
              id={item.id}
              text={item.text}
              display={item.display}
            />
          );
        })}
      </div>
    </div>
  );
};
