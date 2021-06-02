import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";

function App() {
  const [allTodos, setallTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setallTodos(JSON.parse(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  const addTodos = async (todo) => {
    setallTodos([...allTodos, todo]);
  };
  const markComplete = (id) => {
    setallTodos(allTodos.filter((v) => v.id !== id));
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
      <div className=" p-5">
        <h1 className="display-4 mb-5 text-uppercase text-info">
          Todo with LocalStorage
        </h1>
        <TodoForm addTodos={addTodos} />
        <Todos todos={allTodos} markComplete={markComplete} />
      </div>
    </div>
  );
}

export default App;
