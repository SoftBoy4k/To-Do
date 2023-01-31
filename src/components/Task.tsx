import { IconButton, ListItem, ListItemText } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface TaskProps {
    content: string
}

const Task = ({content}: TaskProps) => {
  return (
    <ListItem
        disableGutters
        sx={{border: "0.3px solid black", marginTop: "3%", padding: "2% 4%",}}
    >
        <ListItemText primary={content}/>
        
        <IconButton>
            <EditIcon/>
        </IconButton>

        <IconButton>
            <DeleteIcon/>
        </IconButton>
    </ListItem>

  )
}

export default Task

