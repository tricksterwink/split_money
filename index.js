const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/index',(req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname + '/login_page.html'))
})

app.get('/new_split',(req, res) => {
    res.sendFile(path.join(__dirname + '/new_split.html'))
})

app.get('/add_expense',(req, res) => {
    res.sendFile(path.join(__dirname + '/add_expense.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})