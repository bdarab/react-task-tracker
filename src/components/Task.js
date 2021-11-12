import { FaTimes } from 'react-icons/fa'

// Destructure prop to its name "task"
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', curser: 'pointer' }}
          // States are passed down from App.js to Tasks.js & Task.js
          // Actions are passed up from Task.js to Tasks.js & App.js
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
