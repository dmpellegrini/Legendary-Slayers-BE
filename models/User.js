import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: String,
  password_digest: String,
  favItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
  favCharacters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Champion" }],
});

export default mongoose.model("User", userSchema);
