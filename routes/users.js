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

router.post("/signUp", (req, res) => {
  User.create(req.body).then((user) => res.json(user));
});

router.post("/signIn", async (req, res) => {
  try {
    const { userName, passWord } = req.body;
    const user = await User.findOne({ userName: userName }).select(
      "username email password_digest"
    );
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
  User.find({ userName: req.params.name }).then((user) => res.json(user));
});

router.delete("/name/:name", (req, res) => {
  User.deleteOne({ userName: req.params.name }).then((user) => res.json(user));
});

router.put("/name/:name/champions/:id", (req, res) => {
  User.findOne({ userName: req.params.name }).then((user) => {
    user.favCharacters.push(req.params.id);
    user.save();
    res.json(user);
  });
});

router.put("/name/:name/items/:id", (req, res) => {
  User.findOne({ userName: req.params.name }).then((user) => {
    user.favItems.push(req.params.id);
    user.save();
    res.json(user);
  });
});

export default router;
