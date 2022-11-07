import { promises as fsPromises } from "fs";
import axios from "axios";

const itemURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/item.json";

async function fetchAllItems(url) {
  const items = []
  const response = await axios(itemURL)
  const itemData = await response.data.data
  for (let item in itemData) {
      items.push(itemData[item])
    }
    console.log(items[0].plaintext)
  return items
}
fetchAllItems(itemURL)


