import { Checkbox, IconButton, ListItem, ListItemText, Box } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface TaskProps {
    content: string,
    id: number,
    removingTask: (id: number, isDoneTask: boolean) => void,
    editTask: (id: number) => void,
    checkboxHandler: (checked: boolean, id: number) => void,
    isDoneTask: boolean
}

const Task = ({ content, id, removingTask, editTask, checkboxHandler, isDoneTask }: TaskProps) => {
  return (
    <ListItem
        disableGutters
        sx={ !isDoneTask ? { marginTop: "3%" } : { marginTop: "3%", color: "GrayText" } }
        id={ id.toString() }
    >
        <Checkbox
            checked={ isDoneTask }
            onChange={ (e) => checkboxHandler(e.target.checked, id) }
        />

        <Box sx={{ border: "0.3px solid black", padding: "2% 4%", display: "flex", alignItems: "center", width: "100%" }}>
            <ListItemText primary={ content }/>
            
            { !isDoneTask ? 
                <IconButton onClick={ (e) => {
                    const currentId: number = Number(e.currentTarget.parentElement?.parentElement?.id);
                    editTask(currentId);
                }}>
                    <EditIcon/>
                </IconButton>
            : undefined
            }

            <IconButton onClick={ (e) => {
                const currentId: number = Number(e.currentTarget.parentElement?.parentElement?.id);
                removingTask(currentId, isDoneTask);
            }}>
                <DeleteIcon/>
            </IconButton>
        </Box>
    </ListItem>
  )
}

export default Task

