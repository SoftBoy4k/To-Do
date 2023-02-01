import { List } from "@mui/material"
import Task from "./Task"
import { Tasks } from "../App"

interface TaskListProps {
    allTasks: Array<Tasks[]>,
    removingTask: (id: number, isDoneTask: boolean) => void,
    editTask: (id: number) => void,
    checkboxHandler: (checked: boolean, id: number) => void,
}


const TaskList = ({ allTasks, removingTask, editTask, checkboxHandler }: TaskListProps) => {
  return (
    <List>
        { allTasks.map((tasks, i) => tasks.map(content => <Task key={content.id} id={content.id} content={content.text} removingTask={removingTask} editTask={editTask} checkboxHandler={checkboxHandler} isDoneTask={i === 0 ? false : true}/> )) }
    </List>
  )
}

export default TaskList