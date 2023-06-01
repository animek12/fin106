import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh: 083137550315|Kenzo-MD|Pacitan, 02-07-2023|Laki-Laki|Kuningan|02/02|Pakembangan|Mandiracan|Islam|Belum Kawin|Nonton Bokep dirumah|Jepang|Seumur Hidup|Jawa barat|Kuningan'
  m.reply('Tunggu Sebentar...')
  let res = `https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${response[0]}&nama=${response[1]}&ttl=${response[2]}&jk=${response[3]}&gd=abc&almt=${response[4]}&rtw=${response[5]}&kel=${response[6]}&kc=${response[7]}&agm=${response[8]}&st=${response[9]}&krj=${response[10]}&ngr=${response[11]}&blk=${response[12]}&prv=${response[13]}&kab=${response[14]}&picturl=https://telegra.ph/file/13d20b5f39f5e4cf1aaf2.jpg&apikey=`
    conn.sendFile(m.chat, res, 'ktp.jpg', `Nih kak\n${global.wm}`, m, false)
}
handler.help = ['ktp'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(ktp)$/i
handler.limit = false

export default handler