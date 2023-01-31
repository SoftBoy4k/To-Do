import { List } from "@mui/material"
import Task from "./Task"
import { Tasks } from "../App"

interface TaskListProps {
    tasks: Array<Tasks>,
    removingTask: (text: string, id: number) => void,
}


const TaskList = ({tasks, removingTask}: TaskListProps) => {
  return (
    <List>
        {tasks.map((content) => <Task key={content.id} id={content.id} content={content.text} removingTask={removingTask}/>)}
    </List>
  )
}

export default TaskList