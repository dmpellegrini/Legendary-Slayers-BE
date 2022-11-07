import { promises as fsPromises } from "fs";
import axios from "axios";

const itemURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/item.json";


function makeItem(itemData) {
  const { name, plaintext, image, gold, stats } = itemData
  const imgURL = `https://ddragon.leagueoflegends.com/cdn/12.21.1/img/item/`
  const item = {
    name: name,
    plaintext: plaintext,
    full_image: imgURL + image.full,
    buy_price: gold.base,
    sell_price: gold.sell,
    stats: stats
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
