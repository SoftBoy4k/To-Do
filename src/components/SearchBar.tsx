import { TextField } from "@mui/material"

interface SearchBarProps {
    value: string,
    setValue: (str: string) => void
}

const SearchBar = ({ value, setValue }: SearchBarProps) => {
  return (
    <TextField 
        label="Search" 
        variant="standard" 
        value={ value } 
        fullWidth
        sx={{ marginTop: "5%" }} 
        onChange={ e => setValue(e.target.value) }
    />
  )
}

export default SearchBar