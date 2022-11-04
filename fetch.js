// This is the file that fetches data from the LOL API
import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'
import axios from 'axios'

const charURL = 'http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/Aatrox.json'

async function fetchChampion(charEndPoint) {
  const response = await axios(charURL)
  const charData = response.data.data
  const { name, title, image, tags, partype, lore, blurb, spells, passive } = charData.Aatrox
  const character = {
    name: name,
    title: title,
    tags: tags,
    partype: partype,
    lore: lore,
    blurb: blurb,
    spells: [
      {
        id: spells[0].id,
        name: spells[0].name,
        description: spells[0].description,
        image_sprite: spells[0].image.sprite
      },
      {
        id: spells[1].id,
        name: spells[1].name,
        description: spells[1].description,
        image_sprite: spells[1].image.sprite
      },
      {
        id: spells[2].id,
        name: spells[2].name,
        description: spells[2].description,
        image_sprite: spells[2].image.sprite
      },
      {
        id: spells[3].id,
        name: spells[3].name,
        description: spells[3].description,
        image_sprite: spells[3].image.sprite
      }
    ],
    passive: {
      name: passive.name,
      description: passive.description,
      image_sprite: passive.image.sprite 
    }
  }
  console.log(character)
  return character
}

fetchChampion(charURL)
