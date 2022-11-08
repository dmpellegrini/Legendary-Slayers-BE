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

router.put("/name/:name", (req, res) => {
  User.findOneAndUpdate(
    {userName: req.params.name},req.body, {new: true})
    .then(user => res.json(user))
})

export default router
