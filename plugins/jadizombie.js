import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .jadizombie'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.zahwazein.xyz/photoeditor/jadizombie?url=${url}&apikey=e6acac24b9`)).buffer()
await conn.sendFile(m.chat, hasil, '', '2023 © Kenzo-MD', m)
	
}
handler.help = ['jadizombie']
handler.tags = ['maker']
handler.command = /^(jadizombie)$/i
handler.limit = true

export default handler