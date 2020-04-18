import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await axios.get("/todos");
    setTodos(response.data);
  }

  const addTodo = async () => {
    await axios.post("/addTodo", { todo: text });
    fetchTodos();
    setText("");
  }

  const deleteTodo = async (index) => {
    await axios.post("/deleteTodo", { index });
    fetchTodos();
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <input
        placeholder="Enter a task"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") addTodo();
        }}
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((todo, i) => (
        <div className="todo" key={i}>
          {todo}
          <span onClick={() => deleteTodo(i)}>&#10005;</span>
        </div>
      ))}
    </div>
  );
}

export default App;
