import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([

    {
      id: 1,
      text: 'Grocery Shopping',
      day: 'November 4th at 10:00am',
      reminder: true,
    },
    {
      id: 2,
      text: 'School Meeting',
      day: 'November 5th at 4:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Town hall Election',
      day: 'November 8th at 9:00am',
      reminder: false,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task Function to be Passed as a Prop
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>
      task.id !== id
    ))
  }

  // Toggle Reminder Function to be Passed as a Prop
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}  />
      {showAddTask && <AddTask onAdd={addTask} />}
      {/* passing as props to Tasks.js & Task.js */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
