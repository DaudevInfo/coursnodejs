

const express = require("express")
const app = express()
const userRouter = require("./router/router")

app.use(express.json())
app.use(userRouter)

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()






app.listen(3000, () => {
      // const newUser =  prisma.user.create({
      //       data: {
      //             name: "Alice",
      //             age :10
      //       },}).then((result) => {
      //             console.log(result)})
      //       console.log ("couccou")
    console.log("Server running on port 3000")
  })

  