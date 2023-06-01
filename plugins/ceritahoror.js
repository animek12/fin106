import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  
let res = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=Fairlovely')
let json = await res.json()
let kenzo = `Judul: ${json.result.title}

Deskripsi: ${json.result.desc}
Cerita: ${json.result.story}`

await conn.sendFile(m.chat, json.result.thumbnail, 'ceritahoror.jpg', `${kenzo}`, m)
}
handler.help = ['ceritahoror']
handler.tags = ['internet','fun']
handler.command = /^ceritahoror$/i

export default handler

/*
  * DannTeam
  * ig: @jkt48.danzz
*/