import { Router } from "express"
import Item from "../models/Item.js"

const router = Router()

router.get("/", (req, res) => res.send("This is the Item Root"))

router.get("/all", (req,res) => {
  Item.find({})
    .then(champions => res.json(champions))
})

router.get("/name/:name", (req,res) => {
  Item.find({name: req.params.name})
    .then(item => res.json(item))
})

router.get("/tags/:tag", (req,res) => {
  Item.find({tags: req.params.tag})
    .then(item => res.json(item))
})

router.get("/tags/:tag1/:tag2", (req,res) => {
  Item.find({tags: {$all: [req.params.tag1, req.params.tag2]}})
    .then(item => res.json(item))
})

router.get("/tags/:tag1/:tag2/:tag3", (req,res) => {
  Item.find({tags: {$all: [req.params.tag1, req.params.tag2, req.params.tag3]}})
    .then(item => res.json(item))
})

router.get("/tags/:tag1/:tag2/:tag3/:tag4", (req,res) => {
  Item.find({tags: {$all: [req.params.tag1, req.params.tag2, req.params.tag3, req.params.tag4]}})
    .then(item => res.json(item))
})

router.get("/tags/:tag1/:tag2/:tag3/:tag4/:tag5", (req,res) => {
  Item.find({tags: {$all: [req.params.tag1, req.params.tag2, req.params.tag3, req.params.tag4, req.params.tag5]}})
    .then(item => res.json(item))
})

router.get("/tags/:tag1/:tag2/:tag3/:tag4/:tag5/:tag6", (req,res) => {
  Item.find({tags: {$all: [req.params.tag1, req.params.tag2, req.params.tag3, req.params.tag4, req.params.tag5, req.params.tag6]}})
    .then(item => res.json(item))
})

router.get("/base_price/:price", (req,res) => {
  Item.find({buy_price: {$lt: parseInt(req.params.price)}})
    .then(item => res.json(item))
})

router.get("/total_price/:price", (req,res) => {
  Item.find({buy_price: {$lt: parseInt(req.params.price)}})
    .then(item => res.json(item))
})

router.get("/sell_price/:price", (req,res) => {
  Item.find({sell_price: {$gt: parseInt(req.params.price)}})
    .then(item => res.json(item))
})

export default router
