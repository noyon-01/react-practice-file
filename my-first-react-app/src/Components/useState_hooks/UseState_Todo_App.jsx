import { useState } from "react";

export default function UseState_Todo_App() {
  const skills = [
    { id: 1, task: "JavaScript", done: true },
    { id: 2, task: "TypeScript", done: false },
    { id: 3, task: "React Js", done: true },
  ];

  const [todos, setTodos] = useState(skills);

  const handleAddTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      task: "Next Js",
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleTodoToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  return (
    <div className="card">
      <h1 style={{ fontSize: "50px", color: "gray", fontWeight: "bold" }}>
        UseState Todo App
      </h1>
      <div className="card">
        <h1>Todo App</h1>
        <button onClick={handleAddTodo}>Add Todo +</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{ textDecoration: todo.done ? "line-through" : "none" }}
              >
                {todo.task}
              </span>
              <button onClick={() => handleTodoToggle(todo.id)}>
                {todo.done ? "↩️" : "✅"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
