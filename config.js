import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285362001424', '𝔪𝔥𝔡1890', true],
  ['6285362001424']
] // nomor owner

global.mods = ['6285362001424'] 
global.prems = ['6285362001424', '6285362001424']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  lann: 'https://api.betabotz.eu.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.betabotz.eu.org': 'R4DBKnOH'
}

// daftar di sini https://api.betabotz.eu.org
global.lann = 'R4DBKnOH'

// setting limit user
global.limit = 69

// Sticker WM
global.packname = 'Nezukoo' 
global.author = '@𝔪𝔥𝔡1890' 
//--info NS [ Nezukoo]
global.NSnama = '𝔑𝔢𝔷𝔲𝔨𝔬𝔬 𝔖𝔦𝔪𝔭𝔩𝔢 𝔅𝔬𝔱'
global.NSig = 'https://chat.whatsapp.com/LSTG2g4wN262DwZzdbeHkS' 
global.NSgc = 'https://chat.whatsapp.com/LSTG2g4wN262DwZzdbeHkS'
global.NSthumb = 'https://i.ibb.co/LvRYnRZ/BANNER-BOT.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.eror = 'Error, Kesalahan tidak terduga'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // max warning

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
