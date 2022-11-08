
// import mongoose from 'mongoose'
import connection from '../db/connection.js'
import User from '../models/User.js'

const userData = {
  userName: 'Slayer',
  passWord: 'SlaysAlot',
  favItems: [],
  favCharacters: []
}

User
  .deleteMany({})
  .then(() => User.create(userData))
  .then(() => connection.close())
  .then(() => console.log("Done!"))
  .catch(error => console.log("Error", error))

