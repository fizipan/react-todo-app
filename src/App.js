import { useState } from 'react';
import Header from 'components/Header';
import Tasks from 'elements/Tasks';
import AddTask from 'elements/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Learn Laravel 8',
      day: '1 Juni 2021 6:00 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Learn React JS',
      day: '20 Juni 2021 8:00 PM',
      reminder: false,
    },
    {
      id: 3,
      text: 'Learn Vue JS 3',
      day: '6 July 2021 10:00 PM',
      reminder: false,
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className="container">
      <Header onAddShow={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
