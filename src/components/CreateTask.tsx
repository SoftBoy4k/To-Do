import { Button, TextField } from "@mui/material"

interface CreateTaskProps {
    value: string,
    setValue: (str: string) => void,
    addTask: () => void,
}

const CreateTask = ({value, setValue, addTask}: CreateTaskProps) => {
  return (
    <>
        <TextField
            label="New Task" 
            variant="outlined" 
            multiline 
            rows={5}
            fullWidth
            value={value}
            onChange={ e => setValue(e.target.value) }
            sx={{marginTop: "5%"}}
        />
        <Button
            variant="outlined"
            sx={{marginTop: "2%"}}
            onClick={() => addTask()}
        >
            Create
        </Button>
    </>
  )
}

export default CreateTask