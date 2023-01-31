import { Box, IconButton, ListItem, ListItemText } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Task = () => {
  return (
    <ListItem
        disableGutters
        sx={{border: "0.3px solid black", marginTop: "3%", padding: "2% 4%",}}
    >
        <ListItemText primary="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti sit ipsam doloribus eaque aspernatur perferendis voluptatum ad dignissimos deserunt assumenda est a, dolores at cumque quod eligendi ut alias harum."/>
        
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

