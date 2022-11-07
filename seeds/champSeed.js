import mongoose from 'mongoose'
import connection from '../db/connection.js'
import data from '../jsonData/champs.json' assert {type: 'json'}
import Champion from '../models/Champion.js'

const champData = data.map(item => {
  const champion = {}
  champion.name = item.name
  champion.title = item.title
  champion.image_loading = item.image_loading
  champion.image_splash = item.image_splash
  champion.image_square = item.image_square
  champion.tags = item.tags
  champion.partype = item.partype
  champion.lore = item.lore
  champion.blurb = item.blurb
  champion.skins = item.skins
  champion.spells = [
    {
      id: item.spells[0].id,
      name: item.spells[0].name,
      description: item.spells[0].description,
      image_sprite: item.spells[0].image_sprite,
      video: item.spells[0].video
    },
    {
      id: item.spells[1].id,
      name: item.spells[1].name,
      description: item.spells[1].description,
      image_sprite: item.spells[1].image_sprite,
      video: item.spells[1].video
    },
    {
      id: item.spells[2].id,
      name: item.spells[2].name,
      description: item.spells[2].description,
      image_sprite: item.spells[2].image_sprite,
      video: item.spells[2].video
    },
    {
      id: item.spells[3].id,
      name: item.spells[3].name,
      description: item.spells[3].description,
      image_sprite: item.spells[3].image_sprite,
      video: item.spells[3].video
    }
  ]
  champion.passive = {
    name: item.passive.name,
    description: item.passive.description,
    image_sprite: item.passive.image_sprite,
    video: item.passive.video
  }
  return champion
})

Champion
  .deleteMany({})
  .then(() => Champion.insertMany(champData))
  .then(() => connection.close())
  .then(() => console.log("Done!"))
  .catch(error => console.log("Error", error))
