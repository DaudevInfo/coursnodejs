
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sebastiendaudey:F7NA2m3qJgjyEw7f@clustertest.uhyxy.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTest')
      .then( ()   => console.log("Connected to database")).catch( (err) => console.log("Not connected",err));


const express = require("express")
const app = express()
const userRouter = require("./router/router")

app.use(express.json())
app.use(userRouter)


app.listen(3000, () => {
    console.log("Server running on port 3000")
  })

  