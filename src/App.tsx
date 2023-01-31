import { Container } from "@mui/material"
import { useState } from "react"
import CreateTask from "./components/CreateTask";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";


export type Tasks = {
  id: number,
  text: string
} 

let idCreater: number = 0; 

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [taskValue, setTaskValue] = useState("");
  const [tasks, setTasks] = useState(Array<Tasks>);
  const [isTaskChange, setIsTaskChange] = useState(false);
  const [idChangeableTask, setIdChangeableTask] = useState(NaN);

  const creatingTask = (): void => {
    if (taskValue.trim() === "") return;
    setTasks([...tasks, 
      { 
        id: idCreater++, 
        text: taskValue.trim()
      }]);
      setTaskValue("");
  }

  const removingTask = (id: number): void => {
    const newTasks: Array<Tasks> = tasks.filter( el => el.id !== id );
    setTasks([...newTasks])
  }

  const editTask = (id: number): void => {
    const choiceTask: Array<Tasks> = tasks.filter( el => el.id === id );
    setTaskValue(choiceTask[0].text);
    setIsTaskChange(true);
    setIdChangeableTask(id)
  }

  const taskChange = (id: number): void => {
    const tasksWithEditTask: Array<Tasks> = tasks.map( el => el.id === id ? {id: el.id, text: taskValue} : el);
    setTasks(tasksWithEditTask);
    setTaskValue("");
    setIsTaskChange(false);
  }

  const getSearchTasks = () => {
    const value = searchValue.trim().toLowerCase()
		if (value.length > 0) {
			return tasks.filter(el => el.text.toLowerCase().includes(value))
		} else {
			return tasks
		}
  }

  return (
    <>
      <Header/>
      <Container maxWidth="sm">
        <SearchBar value={searchValue} setValue={setSearchValue}/>
        <CreateTask value={taskValue} setValue={setTaskValue} addTask={creatingTask} isTaskChange={isTaskChange} taskChange={taskChange} idChangeableTask={idChangeableTask}/>
        <TaskList tasks={getSearchTasks()} removingTask={removingTask} editTask={editTask}/>
      </Container>
    </>
  )
}

export default App
