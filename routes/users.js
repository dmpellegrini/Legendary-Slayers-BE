import { Router } from "express"
import User from "../models/User.js"

const router = Router()

router.get("/", (req, res) => res.send("This is the Users Root"))

router.get("/all", (req, res) => {
  User.find({}) 
    .then(users => res.json(users))
})

router.get("/name/:name", (req, res) => {
  User.find({userName: req.params.name}) 
    .then(user => res.json(user))
})

router.post("/", (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
})

router.delete("/name/:name", (req, res) => {
  User.deleteOne({userName: req.params.name})
    .then(user => res.json(user))
})

router.put("/name/:name/champions/:id", (req, res) => {
  User.findOne({userName: req.params.name})
  .then(user => {
    user.favCharacters.push(req.params.id)
    user.save()
    res.json(user)
  })
})

router.put("/name/:name/items/:id", (req, res) => {
  User.findOne({userName: req.params.name})
  .then(user => {
    user.favItems.push(req.params.id)
    user.save()
    res.json(user)
  })
})

export default router
