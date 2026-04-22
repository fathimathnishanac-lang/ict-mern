import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <h3>myapp</h3> &nbsp;&nbsp;
            <Link to="/login">
            <Button variant="contained" color="success">Login</Button>
            </Link>&nbsp;&nbsp;
            <Link to="/signup">
            <Button variant="contained" color="success">Signup</Button>
            </Link>&nbsp;&nbsp;
            <Link to="/state">
            <Button variant="contained" color="success">StateBasics</Button>
            </Link>&nbsp;&nbsp;
            <Link to="/name">
            <Button variant="contained" color="success">Name</Button>
            </Link>&nbsp;&nbsp;
            <Link to="/api">
            <Button variant="contained" color="success">API</Button>
            </Link>&nbsp;&nbsp;
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
