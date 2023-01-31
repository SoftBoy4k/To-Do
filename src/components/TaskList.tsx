import { List } from "@mui/material"
import Task from "./Task"
import { Tasks } from "../App"

interface TaskListProps {
    tasks: Array<Tasks>,
    removingTask: (id: number) => void,
    editTask: (id: number) => void,
}


const TaskList = ({tasks, removingTask, editTask}: TaskListProps) => {
  return (
    <List>
        {tasks.map((content) => <Task key={content.id} id={content.id} content={content.text} removingTask={removingTask} editTask={editTask}/>)}
    </List>
  )
}

export default TaskList