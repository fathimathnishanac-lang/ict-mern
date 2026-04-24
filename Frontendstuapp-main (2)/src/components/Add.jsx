import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  var navigate=useNavigate()
  const [student,setStudent]=useState({Name:"",Age:"",Dept:"",Mark:""})

  const inputHandler=(e)=>{
   setStudent({...student,[e.target.name]:e.target.value})
   console.log(student)
  }
  
  const adddata=()=>{
    axios.post("http://localhost:3000/add",student)
    .then((res)=>{
      alert(res.data)
      navigate('/')
    })
  }
  return (
    <div>
        <h1>Add Student</h1>

        <TextField label='Name' name='Name' value={student.Name} variant='outlined' onChange={inputHandler} /><br /><br />
        <TextField label='Age' name='Age' value={student.Age} variant='outlined' onChange={inputHandler} /><br /><br />
        <TextField label='Department'name='Dept' value={student.Dept} variant='outlined'onChange={inputHandler}  /><br /><br />
        <TextField label='Mark'name='Mark' value={student.Mark} variant='outlined' onChange={inputHandler} /><br /><br />
        
        <Button variant='contained' onClick={adddata}>Add Student</Button>
    </div>
  )
}

export default Add