import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: String,
  password_digest: String,
  favItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "favItems" }],
  favCharacters: [
    { type: mongoose.Schema.Types.ObjectId, ref: "favCharacters" },
  ],
});

export default mongoose.model("User", userSchema);
