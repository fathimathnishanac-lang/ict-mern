import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import axios from 'axios';
import { Grid } from '@mui/material';

const Api = () => {
  var[data,setdata]=useState([])
  axios.get("https://fakestoreapi.com/products")
  .then((res)=>{
    console.log(res.data)
    setdata(res.data)
  })

  return (
    <div>
      <Grid container spacing={2}>
      {data.map((val)=>{
        return (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 450 }}
        image={val.image}
        title={val.title} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        )})}
        </Grid>
    </div>
  )
}

export default Api
