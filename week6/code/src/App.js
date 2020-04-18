import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos([...(text ? [text] : []), ...todos]);
    setText("");
  }

  const deleteTodo = (index) =>
    setTodos(todos.filter((_, i) => i !== index));

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
