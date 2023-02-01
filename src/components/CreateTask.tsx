import { Button, TextField } from "@mui/material"

interface CreateTaskProps {
    value: string,
    setValue: (str: string) => void,
    addTask: () => void,
    isTaskChange: boolean,
    taskChange: (id: number) => void,
    idChangeableTask: number
}

const CreateTask = ({ value, setValue, addTask, isTaskChange, taskChange, idChangeableTask }: CreateTaskProps) => {
  return (
    <>
        <TextField
            label={ !isTaskChange ? "New Task" : "Edit Task" }
            variant="outlined" 
            multiline 
            rows={5}
            fullWidth
            value={ value }
            onChange={ e => setValue(e.target.value) }
            sx={{ marginTop: "5%" }}
        />
        <Button
            variant="outlined"
            sx={{ marginTop: "2%" }}
            onClick={ () => !isTaskChange ? addTask() : taskChange(idChangeableTask) }
        >
            { !isTaskChange ? "Create" : "Edit" }
        </Button>
    </>
  )
}

export default CreateTask