import { useState } from 'react';
import Header from 'components/Header';
import Tasks from 'elements/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Learn Laravel 8',
      day: '1 Juni 2021 6:00 PM',
      reminder: true,
    },
    {
      id: 2,
      name: 'Learn React JS',
      day: '20 Juni 2021 8:00 PM',
      reminder: false,
    },
    {
      id: 3,
      name: 'Learn Vue JS 3',
      day: '6 July 2021 10:00 PM',
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
