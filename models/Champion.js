import mongoose from 'mongoose'

const champSchema = new mongoose.Schema({
  name: String,
  title: String,
  image_loading: String,
  image_splash: String,
  image_square: String,
  tags: [String],
  partype: String,
  lore: String,
  blurb: String,
  skins: [{}],
  spells: [
    {
      id: String,
      name: String,
      description: String,
      image_sprite: String,
      video: String,
    },
    {
      id: String,
      name: String,
      description: String,
      image_sprite: String,
      video: String,
    },
    {
      id: String,
      name: String,
      description: String,
      image_sprite: String,
      video: String,
    },
    {
      id: String,
      name: String,
      description: String,
      image_sprite: String,
      video: String,
    },
  ],
  passive: {
    name: String,
    description: String,
    image_sprite: String,
    video: String,
  },
})

export default mongoose.model('Champion', champSchema)
