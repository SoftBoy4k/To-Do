import { AppBar, Box, Toolbar, Typography } from "@mui/material"

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            To-Do
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header