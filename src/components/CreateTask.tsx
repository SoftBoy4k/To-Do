import { Button, TextField } from "@mui/material"


const CreateTask = () => {
  return (
    <>
        <TextField
            label="New Task" 
            variant="outlined" 
            multiline 
            rows={5}
            fullWidth
            sx={{marginTop: "5%"}}
        />
        <Button
            variant="outlined"
            sx={{marginTop: "2%"}}
        >
            Create
        </Button>
    </>
  )
}

export default CreateTask