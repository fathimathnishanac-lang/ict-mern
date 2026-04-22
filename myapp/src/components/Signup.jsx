import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <TextField id="outlined-basic" label="Username" variant="outlined" /><br/><br/>
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" /><br/><br/>
      <TextField id="outlined-basic" label="Email ID" variant="outlined" /><br/><br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" /><br/><br/>
      <Button variant="contained">Sign Up</Button>
    </div>
  )
}

export default Signup
