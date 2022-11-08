import { Router } from "express"
import Champion from "../models/Champion.js"

const router = Router()

// Root of Champions
router.get("/", (req, res) => res.send("This is the Champion Root"))

// Fetches All Champions
router.get("/all", (req,res) => {
  Champion.find({})
    .then(champions => res.json(champions))
})

// Fetches Champion Based On Name
router.get("/name/:name", (req,res) => {
  Champion.find({name: req.params.name})
    .then(champion => res.json(champion))
})

router.get("/id/:id", (req,res) => {
  Champion.find({_id: req.params.id})
  .then(champion => res.json(champion))
})

// Fetches Champion Based On Title
router.get("/title/:title", (req,res) => {
  Champion.find({title: req.params.title})
    .then(champion => res.json(champion))
})

// Fetches Champions Based on 1 Tag
router.get("/tag/:tag", (req,res) => {
  Champion.find({tags: req.params.tag})
    .then(champion => res.json(champion))
})

// Fetches Champions Based on 2 Tags
router.get("/tag/:tag1/:tag2", (req,res) => {
  Champion.find({tags: {$all: [ req.params.tag1, req.params.tag2]}})
    .then(champion => res.json(champion))
})

// Fetches Champions Based on Partype
router.get("/partype/:partype", (req,res) => {
  Champion.find({partype: req.params.partype})
    .then(champion => res.json(champion))
})



export default router
