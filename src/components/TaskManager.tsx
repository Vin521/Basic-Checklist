import { useState, ChangeEvent, KeyboardEvent } from "react";
import "../Styles/global.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (): void => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task.trim(), completed: false }]);
    setTask("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") addTask();
  };

  const toggleTaskCompletion = (id: number): void => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const updateTask = (id: number, newText: string): void => {
    if (!newText.trim()) return;
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, text: newText } : t
    ));
  };

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>

      {/* Input Section */}
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>+</button>
      </div>

      {/* Task List */}
      <div className="task-container">
        {/* Active Tasks */}
        <div className="task-column">
          <h2>Active Tasks</h2>
          <ul>
            {activeTasks.map(task => (
              <li key={task.id} className="task">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => updateTask(task.id, e.target.value)}
                />
                <button onClick={() => deleteTask(task.id)}>🗑</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Completed Tasks */}
        <div className="task-column completed">
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map(task => (
              <li key={task.id} className="task completed-task">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                />
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => updateTask(task.id, e.target.value)}
                  className="completed-text"
                />
                <button onClick={() => deleteTask(task.id)}>🗑</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
