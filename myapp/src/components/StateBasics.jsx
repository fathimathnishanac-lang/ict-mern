import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
var[name,setname]=useState("Nishana")
var[a,seta]=useState()

const inputHandler=(e)=>{
    console.log(e.target.value)
    setname(e.target.value)
}
const submit=(b)=>{
    seta(name)
}
    return (
    <div>
      <br/><br/>
      <h1>WELCOME {a}</h1>
      <TextField variant='outlined' onChange={inputHandler}/>
      <Button variant="contained" onClick={submit}>add</Button>
    </div>
  )
}

export default StateBasics
