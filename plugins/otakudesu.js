import api from "hxz-api"

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Nama Anime!\n\nContoh: ${usedPrefix + command} hunter x hunter`
  var kenzo = await api.otakudesu(text)
  var hasil = `Creator: *${kenzo.message}*\nJudul: *${kenzo.judul}*\nJepang: *${kenzo.jepang}*\nRating: *${kenzo.rate}*\nProduser: *${kenzo.produser}*\nTipe: *${kenzo.tipe}*\nStatus: *${kenzo.status}*\nEpisode: *${kenzo.episode}*\nDurasi: *${kenzo.durasi}*\nRilis: *${kenzo.rilis}*\nStudio: *${kenzo.studio}*\nGenre: *${kenzo.genre}*\nDeskripsi: *${kenzo.desc}*\nBatch: *${kenzo.batch}*`
  await conn.sendFile(m.chat, kenzo.img, 'otakudesu.jpg', `${hasil}`, m)
}

handler.help = ['otakudesu']
handler.tags = ['internet']
handler.command = /^(otakudesu)$/i

export default handler

//Dann 
//Putramodz ✌️