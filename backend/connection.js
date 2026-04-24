const mongoose = require('mongoose'); 

mongoose.connect("mongodb+srv://fathimathnishanac:fathimathnishanac@cluster0.dzv4qaf.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log(err)
});