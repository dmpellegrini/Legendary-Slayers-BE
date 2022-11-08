import parser  from 'body-parser'
import express from 'express'
const app = express()
import connection from './db/connection.js'
import cors from 'cors'
import championRoutes from './routes/champions.js'
import itemRoutes from './routes/items.js'
import userRoutes from './routes/users.js'

const port = process.env.PORT || 3000

app.use(parser.json())
app.use(cors())
app.use("/champions", championRoutes)
app.use("/items", itemRoutes)
app.use("/users", userRoutes)

app.listen(port, () => console.log(`app listening on port ${port}`))

// Shows A Welcome Message and Directions To User
app.get("/", (req,res) => {
  res.send('Welcome To The Legendary Slayers Unofficial League Of Legends Rest API!')
})

