import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const View = () => {
    const [student,setstudent]=useState([])
    axios.get("http://localhost:3000/view")
    .then((res)=>{
        setstudent(res.data)
    })
    const deletestudent=(id)=>{
    axios.delete("http://localhost:3000/remove/"+id)
    .then((res)=>{
        alert(res.data)
    })

}
  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Dept</TableCell>
                    <TableCell>Mark</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {student.map((val)=>{
                 return(
                <TableRow>
                    <TableCell>{val.Name}</TableCell>
                    <TableCell>{val.Age}</TableCell>
                    <TableCell>{val.Dept} </TableCell>
                    <TableCell>{val.Mark}</TableCell>
                    <Button variant='contained' color='error' onClick={()=>deletestudent(val._id)}>Delete</Button>
                </TableRow>
                )
            })}
            </TableBody>
        </Table>
    </div>
  )
}

export default View