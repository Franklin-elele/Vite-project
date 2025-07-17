function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <button className="delete-btn" onClick={() => onDelete(index)}>
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
