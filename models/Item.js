import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
  name: String,
  plaintext: String,
  full_image: String,
  buy_price: String,
  sell_price: String,
  stats: {},
  tags: [String], 
  
})

export default mongoose.model('Item', itemSchema)
