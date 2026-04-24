const express =require('express')  //import
require('./connection')
var stumodel=require("./model/student")
var cors = require('cors')

const app = express()  //initialize

app.use(express.json()) //middleware
app.use(cors())

app.get('/', (req, res) => {   //api
  res.send('Hello World')
})

app.get('/trial',(req,res)=>{  //trial
    res.send('This is trial api')
})

app.post('/add',(req,res)=>{
    stumodel(req.body).save() 
    res.send("Data added")
} )

app.get('/view',async(req,res)=>{
    var data=await stumodel.find()
    res.send(data)
})

app.put('/edit/:id',async(req,res)=>{
    await stumodel.findByIdAndUpdate(req.params.id,req.body) //update
    res.send("Data Updated")
})

app.delete('/remove/:id',async(req,res)=>{
    await stumodel.findByIdAndDelete(req.params.id)  //delete
    res.send("Data Delete")
})

app.listen(3000, () => {     //port setting
  console.log('Server is running on http://localhost:3000')
})