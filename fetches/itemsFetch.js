import { promises as fsPromises } from "fs";
import axios from "axios";

const itemURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/item.json";


function makeItem(itemData) {
  const { name, plaintext, image, gold, stats, tags } = itemData
  const imgURL = `https://ddragon.leagueoflegends.com/cdn/12.21.1/img/item/`
  const item = {
    name: name,
    plaintext: plaintext,
    full_image: imgURL + image.full,
    base_price: gold.base,
    total_price: gold.total,
    sell_price: gold.sell,
    purchasable: gold.purchasable,
    stats: stats,
    tags: tags 
  }
  return item
}

async function fetchAllItems(url) {
  const items = []
  const response = await axios(url)
  const itemData = await response.data.data
  for (let item in itemData) {
    items.push(makeItem(itemData[item]))
  }
  fsPromises.writeFile("./jsonData/items.json", JSON.stringify(items))
  return items
}

fetchAllItems(itemURL)
