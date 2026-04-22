
import { Button } from '@mui/material'
import React, { useState } from 'react'

const Name=() => {
var[a,seta]=useState() 

    const submit1=()=>{
    seta("REACT")
    }
    const submit2=()=>{
    seta("JAVASCRIPT")
    }
    const submit3=()=>{
    seta("HTML")
    }
    return (
      <div>
        <br/><br/>
        <h1>WELCOME TO {a}</h1>
        <Button variant="contained" color="error" onClick={submit1}>React</Button>&nbsp;&nbsp;
        <Button variant="contained" color="warning" onClick={submit2}>JavaScript</Button>&nbsp;&nbsp;
        <Button variant="contained" color="primary" onClick={submit3}>HTML</Button>&nbsp;&nbsp;
      </div>
    )
}

export default Name
