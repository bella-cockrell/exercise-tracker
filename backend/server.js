const express = require('express') //lightwight web framework
const cors = require('cors') //allows AJAX requests to skip same-origin policy
const mongoose = require('mongoose') //middleman between node.js and MongoDB -- ORM

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true, //to avoid depreciated server discovery and monitoring engine
})
const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

app.get('/', (req, res) => {
  res.send('This is working')
})

const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/users')

// app.use('/exercises', exerciseRouter)
app.use('/users', userRouter) //routers are added as middleware

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
})
