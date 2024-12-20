const express = require('express')
let ejs = require('ejs')
const app = express()

const userRouter = require("./app/router/router")

app.use( express.json() )
app.use(userRouter)
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'app/views')


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use((req, res) => {
    res.status(404).json({ message: "Page not found !" })
  })
