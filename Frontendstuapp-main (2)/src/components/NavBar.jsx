import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <h3>Student App</h3>&nbsp;&nbsp;

                <Link to='/add' style={{color:'white'}}>
                    <Button color="warning" variant='contained'>Add Student</Button>
                </Link> &nbsp;&nbsp;

                <Link to='/' style={{color:'white'}}>
                    <Button color="warning" variant='contained'>View Students</Button>
                </Link>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar