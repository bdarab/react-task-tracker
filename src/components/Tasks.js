import Task from './Task'

// Setting task as a prop (see Task.js)
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks
