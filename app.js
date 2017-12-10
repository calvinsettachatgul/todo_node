const express = require('express')
const app = express()

let todos = require('./data/todos.js')

app.get('/', (req, res) => res.send(todos))
app.get('/welcome', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


