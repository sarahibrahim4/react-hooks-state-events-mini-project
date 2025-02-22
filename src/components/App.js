import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks,setTasks] = useState(TASKS)
const [selectedCategory, setSelectedCategory] = useState("All");

function onTaskFormSubmit(newTasks){
setTasks([...tasks, newTasks])
}

function onDeleteTask(deletedTaskText){
setTasks(tasks.filter((task)=> task.text !== deletedTaskText))
}
//{if(selectedCategory === "All") return true;
//else{
  //return task.category === selectedCategory}}
const filteredTasks = tasks.filter((task)=>(selectedCategory === "All" || task.category === selectedCategory))

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES.filter((category)=> category !== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;
