import { List } from "@mui/material"
import Task from "./Task"


const TaskList = () => {
  return (
    <List>
        {[1, 2, 3].map(() => <Task/>)}
    </List>
  )
}

export default TaskList