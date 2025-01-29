import React from 'react';
import TodoList from './todo/TodoList'; // Импортируем компонент

function App() {
  return (
    <div className="App">
      <TodoList /> {/* Добавляем компонент на страницу */}
    </div>
  );
}

export default App;
