import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  name: String,
  plaintext: String,
  full_image: String,
  base_price: Number,
  total_price: Number,
  sell_price: Number,
  purchasable: Boolean,
  stats: {},
  tags: [String], 
  
})

export default mongoose.model('Item', itemSchema)
