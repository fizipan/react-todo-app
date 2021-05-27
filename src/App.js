import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Tasks from 'elements/Tasks';
import AddTask from 'elements/AddTask';
import About from 'views/About';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTask();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)));
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header onAddShow={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
        <Route path="/" exact>
          {showAddTask && <AddTask onAdd={addTask} />}
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        </Route>
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
