import { Container } from "@mui/material"
import { useState } from "react"
import CreateTask from "./components/CreateTask";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";



function App() {

  const [searchValue, setSearchValue] = useState("");


  console.log(searchValue);

  return (
    <>
      <Header/>
      <Container maxWidth="sm">
        <SearchBar value={searchValue} setValue={setSearchValue}/>
        <CreateTask/>
        <TaskList/>
      </Container>
    </>
  )
}

export default App
