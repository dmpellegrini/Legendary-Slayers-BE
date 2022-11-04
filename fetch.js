// This is the file that fetches data from the LOL API
import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'
import axios from 'axios'

const charsURL = 'http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json'

// Fetches Character Names and Images
async function fetchAllChars(url){
  const characters = []
  const response = await axios(url)
  const allChars = await response.data.data
  for (let char in allChars) {
    characters.push(await fetchCharacter(char))
  }
  console.log(characters)
  return characters  
}

// Fetches Individual Character data
async function fetchCharacter(charName) {
  const charURL = `http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${charName}.json`
  const response = await axios(charURL)
  const charData = response.data.data
  const { name, title, image, tags, partype, lore, blurb, spells, passive } = charData[charName]
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
  // console.log(character)
  return character
}

fetchAllChars(charsURL)

