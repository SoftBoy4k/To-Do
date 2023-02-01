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
  const [doneTasks, setDoneTasks] = useState(Array<Tasks>);


  const getNewTasks = (arr: Array<Tasks>, id: number): Array<Tasks> => {         
    return arr.filter( el => el.id !== id )                                     // return array without task by given id
  }

  const getChoiceTasks = (arr: Array<Tasks>, id: number): Array<Tasks> => {
    return arr.filter( el => el.id === id )
  }

  const creatingTask = (): void => {
    if (taskValue.trim() === "") return;
    setTasks([
      ...tasks, 
      { 
        id: idCreater++, 
        text: taskValue.trim()
      }
    ]);
    setTaskValue("");
  }

  const removingTask = (id: number, isDoneTask: boolean): void => {
    if (!isDoneTask) {
      const newTasks: Array<Tasks> = getNewTasks(tasks, id);
      setTasks([...newTasks]);
    } else {
      const newDoneTasks: Array<Tasks> = getNewTasks(doneTasks, id);
      setDoneTasks([...newDoneTasks]);
    }
    
  }

  const editTask = (id: number): void => {
    const choiceTask: Array<Tasks> = getChoiceTasks(tasks, id);
    setTaskValue(choiceTask[0].text);
    setIsTaskChange(true);
    setIdChangeableTask(id);
  }

  const taskChange = (id: number): void => {
    const tasksWithEditTask: Array<Tasks> = tasks.map( el => el.id === id ? { id: el.id, text: taskValue } : el);
    setTasks(tasksWithEditTask);
    setTaskValue("");
    setIsTaskChange(false);
  }

  const getSearchTasks = (): Array<Tasks[]> => {
    const value = searchValue.trim().toLowerCase();
		if (value.length > 0) {
      const filteredTasks: Array<Tasks> = tasks.filter(el => el.text.toLowerCase().includes(value));
      const filteredDoneTasks: Array<Tasks> = doneTasks.filter(el => el.text.toLowerCase().includes(value));
			return [filteredTasks, filteredDoneTasks];
		} else {
			return [tasks, doneTasks];
		}
  }

  const checkboxHandler = (checked: boolean, id: number): void => {
    if (checked) {
      const choiceTask: Array<Tasks> = getChoiceTasks(tasks, id);
      removingTask(id, false);
      setDoneTasks([...doneTasks, ...choiceTask]);
    } else {
      const newDoneTasks: Array<Tasks> = getNewTasks(doneTasks, id);
      const choiceTask: Array<Tasks> = getChoiceTasks(doneTasks, id);
      setDoneTasks([...newDoneTasks]);
      setTasks([...tasks, ...choiceTask])
    }
    

  }

  return (
    <>
      <Header/>
      <Container maxWidth="sm">
        <SearchBar value={searchValue} setValue={setSearchValue}/>
        <CreateTask value={taskValue} setValue={setTaskValue} addTask={creatingTask} isTaskChange={isTaskChange} taskChange={taskChange} idChangeableTask={idChangeableTask}/>
        <TaskList allTasks={getSearchTasks()} removingTask={removingTask} editTask={editTask} checkboxHandler={checkboxHandler}/>
      </Container>
    </>
  )
}

export default App
