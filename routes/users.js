import { Router } from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = Router();

// for development purposes
let SALT_ROUNDS = 11;
let TOKEN_KEY = "areallylonggoodkey";

// for production
// if (process.env.NODE_ENV === "production") {
//   SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
//   TOKEN_KEY = process.env.TOKEN_KEY;
// }

// for JWT expiration
const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 30);

router.post("/signUp", async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    const password_digest = await bcrypt.hash(passWord, SALT_ROUNDS);
    const user = new User({
      userName,
      password_digest,
      favItems: [],
      favCharacters: [],
    });

    await user.save();

    const payload = {
      id: user._id,
      userName: user.userName,
      favItems: user.favItems,
      favCharacters: user.favCharacters,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
});

router.post("/signIn", async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    const user = await User.findOne({ userName: userName }).select(
      "userName password_digest"
    );
    console.log(user);
    if (await bcrypt.compare(passWord, user.password_digest)) {
      const payload = {
        id: user._id,
        userName: user.userName,
        favCharacters: user.favCharacters,
        favItems: user.favItems,
        exp: parseInt(exp.getTime() / 1000),
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get("/", (req, res) => res.send("This is the Users Root"));

router.get("/all", (req, res) => {
  User.find({}).then((users) => res.json(users));
});

router.get("/name/:name", (req, res) => {
  User.find({ userName: req.params.name })
    .populate("favCharacters")
    .populate("favItems")
    .then((user) => res.json(user));
});

router.delete("/name/:name", (req, res) => {
  User.deleteOne({ userName: req.params.name }).then((user) => res.json(user));
});

router.put("/name/:name/champions/:id", (req, res) => {
  User.findOne({ userName: req.params.name }).then((user) => {
    if(user.favCharacters.includes(req.params.id)) {
      res.json(user);
    }else {
      user.favCharacters.push(req.params.id);
      user.save();
      res.json(user);
    }
  });
});

router.put("/name/:name/items/:id", (req, res) => {
  User.findOne({ userName: req.params.name }).then((user) => {
    if(user.favItems.includes(req.params.id)){
      res.json(user);
    } else {
      user.favItems.push(req.params.id);
      user.save();
      res.json(user);
    }
  });
});

router.put("/name/:name/champions/delete/:id", (req, res) => {
  User.findOne({ userName: req.params.name }).then((user) => {
    if(user.favCharacters.includes(req.params.id)) {
      const index = user.favCharacters.indexOf(req.params.id)
      user.favCharacters.splice(index, 1)
      user.save();
      res.json(user);
    }else {
      res.json(user);
    }
  });
});

router.put("/name/:name/items/delete/:id", (req, res) => {
  User.findOne({ userName: req.params.name }).then((user) => {
    if(user.favItems.includes(req.params.id)) {
      const index = user.favItems.indexOf(req.params.id)
      user.favItems.splice(index, 1)
      user.save();
      res.json(user);
    }else {
      res.json(user);
    }
  });
});

export default router;
