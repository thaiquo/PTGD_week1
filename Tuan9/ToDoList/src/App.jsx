import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Thêm todo mới
  const handleAdd = () => {
    if (input.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  // Xoá todo
  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle completed
  const handleToggle = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', textAlign: 'center' }}>
      <h1>To-do List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={handleAdd}>Thêm</button>

      <ul style={{ textAlign: 'left', marginTop: 20 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              marginBottom: 10,
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
            <button
              onClick={() => handleRemove(todo.id)}
              style={{ marginLeft: 10 }}
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
