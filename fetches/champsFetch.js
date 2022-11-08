// This is the file that fetches data from the LOL API
import {promises as fsPromises} from 'fs'
import axios from 'axios'

const charsURL = 'http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json'


// Fetches Individual Character data
async function fetchCharacter(charName) {
  const charURL = `http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${charName}.json`
  const imgLoadURL = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/`
  const imgSplashURL = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/`
  const imgSquareURL = `http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/`
  const imgPassiveURL = `http://ddragon.leagueoflegends.com/cdn/12.21.1/img/passive/`
  const imgSpellURL = `http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/`
  const abltyVidURL = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/` 
  const skinURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/` 
  const response = await axios(charURL)
  const charData = response.data.data
  const { name, key, title, tags, partype, lore, blurb, skins, spells, passive } = charData[charName]
  const vidKey = key.padStart(4,'0')
  const allSkins = skins.map((element) => {
    const skin = {}
    skin.name = element.name
    skin.image = skinURL + name + `_${element.num}.jpg` 
    return skin
  }) 
  const character = {
    name: name,
    title: title,
    image_loading: imgLoadURL + charName + `_0.jpg`,
    image_splash: imgSplashURL + charName + `_0.jpg`,
    image_square: imgSquareURL + charName + `.png`,
    tags: tags,
    partype: partype,
    lore: lore,
    blurb: blurb,
    skins: allSkins,
    spells: [
      {
        id: spells[0].id,
        name: spells[0].name,
        description: spells[0].description,
        image_sprite: imgSpellURL + spells[0].id + `.png`,
        video: abltyVidURL + vidKey + `/ability_` + vidKey + `_Q1.webm`
      },
      {
        id: spells[1].id,
        name: spells[1].name,
        description: spells[1].description,
        image_sprite: imgSpellURL + spells[1].id + `.png`,
        video: abltyVidURL + vidKey + `/ability_` + vidKey + `_W1.webm`
      },
      {
        id: spells[2].id,
        name: spells[2].name,
        description: spells[2].description,
        image_sprite: imgSpellURL + spells[2].id + `.png`,
        video: abltyVidURL + vidKey + `/ability_` + vidKey + `_E1.webm`
      },
      {
        id: spells[3].id,
        name: spells[3].name,
        description: spells[3].description,
        image_sprite: imgSpellURL + spells[3].id + `.png`,
        video: abltyVidURL + vidKey + `/ability_` + vidKey + `_R1.webm`
      }
    ],
    passive: {
      name: passive.name,
      description: passive.description,
      image_sprite: imgPassiveURL + name + `_Passive.png`,
      video: abltyVidURL + vidKey + `/ability_` + vidKey + `_P1.webm`
    }
  }
  return character
}


// Fetches All Character Data and Makes JSON File
async function fetchAllChars(url){
  const characters = []
  const response = await axios(url)
  const allChars = await response.data.data
  for (let char in allChars) {
    const character = await fetchCharacter(char)
    characters.push(character)
    console.log(`Retrieved ${character.name}`)
    console.log(character.skins)
  }
  await fsPromises.writeFile("./jsonData/champs.json", JSON.stringify(characters))
  return characters  
}

fetchAllChars(charsURL)
