const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
    res.send("Welcome to the demo app")
})

app.listen(port, () => {
    console.log("Server is listening: ", port)
})