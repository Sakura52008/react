import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]); // Храним список задач в состоянии

  const addTask = (task) => {
    setTasks([...tasks, task]); // Добавляем новую задачу в список
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1); // Удаляем задачу по индексу
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>Список задач</h2>
      <input type="text" placeholder="Введите задачу" onKeyDown={(e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
          addTask(e.target.value);
          e.target.value = ''; // Очищаем поле ввода
        }
      }} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
