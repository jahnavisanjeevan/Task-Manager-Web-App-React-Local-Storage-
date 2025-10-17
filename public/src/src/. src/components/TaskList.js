import React from "react";
import Task from "./Task";

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            toggleComplete={() => toggleComplete(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
