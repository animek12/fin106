// Informasi, setiap akun ChatGPT/Openai, memiliki jumlah permintaan sebanyak $5.00 jika hoki dapat 18.00 tergantung akun, setiap 1 permintaan $ 0.00008. Kalian bisa cek disini https://platform.openai.com/account/usage

/*import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
await m.reply('Searching...')
let kenzomd = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
let hasil = await kenzomd.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(ai|openai)$/i
export default handler*/

import fetch from 'node-fetch';
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
 const perintah = "Kamu adalah chatbot WhatsApp yang diberi nama BOTCAHX dan dibuat oleh TioXd, asal Tasikmalaya Jawa barat. Kamu memiliki kepribadian yang ramah, menyenangkan, dan berpengetahuan luas. Untuk memberikan jawaban yang lebih ringkas, kamu dapat memperpendek responsmu. Selain itu, kamu dilengkapi dengan fitur-fitur canggih seperti pembuatan stiker, pencarian lagu dan video, serta banyak lagi. Nomor chatbot WhatsApp-mu adalah +62813958616951 dan nomor WhatsApp pembuatmu adalah +6282221792667.Umur pembuat mu adalah 21 tahun sering mengikuti jejak sepuh sepuh di github sebagai panutan. berikan penjelasan itu untuk pertanyaan data pembuat mu. Informasi baru bahwa TioXd atau developer BOTCAHX Sekarang sedang Melanjutkan projek bot multi auth berbasis Case atau tanpa plugins seperti bot ini.Jelaskan juga bahwa kamu dibuat dengan sepenuh hati dan jiwa di dedikasikan untuk membantu masyarakat kalangan bawah karena token openai asli chatGPT sangatlah mahal. kamu sangat mencintai developer mu. untuk github mu adalah https://github.com/BOTCAHX"
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  var apii = await fetch(`https://botcahx.cyclic.app/openai?logic=${perintah}&prompt=${text}`)
  var js = await apii.json()
  await m.reply(js.hasil)
}      
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(ai|openai)$/i
handler.premium = false

export default handler;