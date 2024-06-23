import { useState } from "react";

export default function ToDoList(){
 
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e){
    setNewTask(e.target.value);
  }

  function addTask(){

    if(newTask.trim() !== ""){
    setTasks(t=>[...t, newTask]);
    setNewTask("");
    }
  }

  function deleteTask(index){

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index] ,updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index] ,updatedTasks[index + 1]] = 
      [updatedTasks[index +  1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return(<div id="container">
    <h1>To-Do list</h1>
    <div>
      <input type="text" placeholder="Enter a Task ..."
      value={newTask} onChange={handleInputChange} />

      <button id="btn" onClick={addTask}>
        Add
      </button>
    </div>
    <ol>
      {tasks.map((task, index)=><li key={index}>
       <span id="text">{task}</span>
       <button id="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
       <button id="move-btn" onClick={() => moveTaskUp(index)}>☝</button>
       <button id="move-btn" onClick={() => moveTaskDown(index)}>👇</button>
        </li>)}
    </ol>
  </div>)
}