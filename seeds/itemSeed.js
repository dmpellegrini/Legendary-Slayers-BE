// import mongoose from 'mongoose'
import connection from '../db/connection.js'
import data from '../jsonData/items.json' assert {type: 'json'}
import Item from '../models/Item.js'

const itemData = data.map(element => {
  const item = {}
  item.name = element.name 
  item.plaintext = element.plaintext
  item.full_image = element.full_image
  item.base_price = element.base_price
  item.total_price = element.total_price
  item.sell_price = element.sell_price
  item.purchasable = element.purchasable
  item.stats = element.stats
  item.tags = element.tags
  return item
})

Item
  .deleteMany({})
  .then(() => Item.insertMany(itemData))
  .then(() => connection.close())
  .then(() => console.log("Done!"))
  .catch(error => console.log("Error", error))
