import React from "react";

function Task({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span onClick={toggleComplete}>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );https://github.com/jahnavisanjeevan/Task-Manager-Web-App-React-Local-Storage-/settings
}

export default Task;
