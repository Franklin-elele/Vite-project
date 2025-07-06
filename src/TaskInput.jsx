
function TaskInput ({ value, onChange, onAdd }) {
    return(
        <div style={{ marginBottom: "1rem", }}>
            <input 
            className="task-field"
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter a task"
            />
            <button className="add-btn" onClick={onAdd}>Add Task</button>
        </div>
    )
}

export default TaskInput;