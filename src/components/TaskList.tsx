import { List } from "@mui/material"
import Task from "./Task"

interface TaskListProps {
    tasks: string[],
}


const TaskList = ({tasks}: TaskListProps) => {
  return (
    <List>
        {tasks.map((content, i) => <Task key={i + Date.now().toString()} content={content}/>)}
    </List>
  )
}

export default TaskList