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
  const [createTaskValue, setCreateTaskValue] = useState("");
  const [tasks, setTasks] = useState(Array<Tasks>);

  const creatingTask = (): void => {
    if (createTaskValue.trim() === "") return;
    setTasks([...tasks, 
      { 
        id: idCreater++, 
        text: createTaskValue.trim()
      }]);
    setCreateTaskValue("");
  }

  const removingTask = (text: string, id: number): void => {
    const newTasks: Array<Tasks> = tasks.filter( el => el.id !== id || el.text !== text );
    setTasks([...newTasks])
  }

  return (
    <>
      <Header/>
      <Container maxWidth="sm">
        <SearchBar value={searchValue} setValue={setSearchValue}/>
        <CreateTask value={createTaskValue} setValue={setCreateTaskValue} addTask={creatingTask}/>
        <TaskList tasks={tasks} removingTask={removingTask}/>
      </Container>
    </>
  )
}

export default App
