// This is the file that fetches data from the LOL API
import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'
import axios from 'axios'

const charURL = 'http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/Aatrox.json'

async function fetchChampion(charEndPoint) {
  const response = await axios(charURL)
  const charData = response.data.data
  const name = charData.Aatrox.name
  const title = charData.Aatrox.title
  const image_loading = charData.Aatrox.image.full
  // TODO const image_splash = '' 
  // TODO const image_square = ''
  const tags = charData.Aatrox.tags
  const partype = charData.Aatrox.partype
  const lore = charData.Aatrox.lore
  const blurb = charData.Aatrox.blurb
  const spells = [
    {
      id: charData.Aatrox.spells[0].id,
      name: charData.Aatrox.spells[0].name,
      description: charData.Aatrox.spells[0].description,
      image_sprite: charData.Aatrox.spells[0].image.sprite
    },
    {
      id: charData.Aatrox.spells[1].id,
      name: charData.Aatrox.spells[1].name,
      description: charData.Aatrox.spells[1].description,
      image_sprite: charData.Aatrox.spells[1].image.sprite
    },
    {
      id: charData.Aatrox.spells[2].id,
      name: charData.Aatrox.spells[2].name,
      description: charData.Aatrox.spells[2].description,
      image_sprite: charData.Aatrox.spells[2].image.sprite
    },
    {
      id: charData.Aatrox.spells[3].id,
      name: charData.Aatrox.spells[3].name,
      description: charData.Aatrox.spells[3].description,
      image_sprite: charData.Aatrox.spells[3].image.sprite
    }
  ]
  const passive = {
    name: charData.Aatrox.passive.name,
    description: charData.Aatrox.passive.description,
    image_sprite: charData.Aatrox.passive.image.sprite 
  }
  
  console.log(spells)

}

fetchChampion(charURL)
