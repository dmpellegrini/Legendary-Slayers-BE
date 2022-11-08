import { Router } from "express"

const router = Router()

router.get("/", (req, res) => res.send("This is the Users Root"))

// app.get("/Champions", (req,res) => {
//
//
//   Champion.find({})
//     .then(champions => res.json(champions))
// })

// app.get("/Champions/:name", (req,res) => {
//   Champion.find({name: req.params.name})
//     .then(champion => res.json(champion))
// })

export default router
