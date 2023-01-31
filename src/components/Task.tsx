import { IconButton, ListItem, ListItemText } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface TaskProps {
    content: string,
    id: number,
    removingTask: (id: number) => void,
    editTask: (id: number) => void,
}

const Task = ({content, id, removingTask, editTask}: TaskProps) => {
  return (
    <ListItem
        disableGutters
        sx={{border: "0.3px solid black", marginTop: "3%", padding: "2% 4%",}}
        id={id.toString()}
    >
        <ListItemText primary={content}/>
        
        <IconButton onClick={(e) => {
            const currentId: number = Number(e.currentTarget.parentElement?.id);
            editTask(currentId);
        }}>
            <EditIcon/>
        </IconButton>

        <IconButton onClick={(e) => {
            const currentId: number = Number(e.currentTarget.parentElement?.id);
            removingTask(currentId);
        }}>
            <DeleteIcon/>
        </IconButton>
    </ListItem>

  )
}

export default Task

