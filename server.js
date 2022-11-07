import parser  from 'body-parser'
import express from 'express'
const app = express()
import connection from './db/connection.js'
import Champion from './models/Champion.js'
import Item from './models/Item.js'
import cors from 'cors'

const port = process.env.PORT || 3000

app.use(parser.json())
app.use(cors())

app.listen(port, () => console.log(`app listening on port ${port}`))

// Shows A Welcome Message and Directions To User
app.get("/", (req,res) => {
  res.send('Welcome To The Legendary Slayers Unofficial League Of Legends Rest API!')
})

app.get("/Champions", (req,res) => {
  Champion.find({})
    .then(champions => res.json(champions))
})

app.get("/Champions/:name", (req,res) => {
  Champion.find({name: req.params.name})
    .then(champion => res.json(champion))
})

app.get("/Items", (req,res) => {
  Item.find({})
    .then(items => res.json(items))
})

app.get("/Items/:name", (req,res) => {
  Item.find({name: req.params.name})
    .then(item => res.json(item))
})
