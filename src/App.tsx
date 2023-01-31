import { Container } from "@mui/material"
import { useState } from "react"
import CreateTask from "./components/CreateTask";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";



function App() {

  const [searchValue, setSearchValue] = useState("");
  const [createTaskValue, setCreateTaskValue] = useState("");
  const [tasks, setTasks] = useState(Array<string>);

  const creatingTask = (): void => {
    if (createTaskValue.trim() === "") return;
    setTasks([...tasks, createTaskValue.trim()]);
    setCreateTaskValue("");
  }

  return (
    <>
      <Header/>
      <Container maxWidth="sm">
        <SearchBar value={searchValue} setValue={setSearchValue}/>
        <CreateTask value={createTaskValue} setValue={setCreateTaskValue} addTask={creatingTask}/>
        <TaskList tasks={tasks}/>
      </Container>
    </>
  )
}

export default App
