let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)

    let putra = `
*PRICELIST HARGA PANEL NANZ* :

══[「 *PANEL RUN BOT*」]══♽
⛁: RAM 2GB | CPU 70%
╰━━━☉ HARGA : 10.000
⛁: RAM 3GB | CPU 80%
╰━━━☉ HARGA : 15.000
⛁: RAM 4GB | CPU 90%
╰━━━☉ HARGA : 20.000
⛁: RAM 5GB | CPU 100%
╰━━━☉ HARGA : 25.000
⛁: RAM 6GB | CPU 110%
╰━━━☉ HARGA : 30.000
⛁: RAM UNLI | CPU UNLI
╰━━━☉ HARGA : 40.000
━━━━━━━━━━━━━━━⬣

══[「 *+ SLOT SERVER* 」]══♽
⛁: RAM 2GB | CPU 70%
╰━━━☉ HARGA : 15.000
⛁: RAM 3GB | CPU 80%
╰━━━☉ HARGA : 20.000
⛁: RAM 4GB | CPU 90%
╰━━━☉ HARGA : 25.000
⛁: RAM 5GB | CPU 100%
╰━━━☉ HARGA : 30.000

*+slot adalah bisa menambah server dalam 1 panel
━━━━━━━━━━━━━━━⬣

═══[「 *JASA RUN* 」]═══♽
⛁: RAM 2GB | CPU 80%
╰━━━☉ HARGA : 20.000
⛁: RAM 4GB | CPU 100%
╰━━━☉ HARGA : 40.000

*apa itu jasa run? Jasa ini adalah untuk menjalankan bot menggunakan nomor WhatsApp kalian yang ingin dijadikan bot,  
*tinggal scan aja* di WhatsApp yang ingin kalian jadikan bot. 
━━━━━━━━━━━━━━━⬣

═══[「 *UPGRADE* 」]═══♽
• *RAM/CPU 1-3* :  5K
• *RAM/CPU 4-7* : 10K
━━━━━━━━━━━━━━━⬣

==========================
INGAT JANGAN MAU DI IMING IMINGI PANEL MURAH UJUNG UJUNGNYA BUNTUNG ADA HARGA ADA KWALITASS 😇🙏

*KEUNTUNGAN?*
❐ TIDAK BOROS KOUTA & MEMORI
❐ BISA RUN 24 JAM
❐ WEBSITE DI CLOSE BOT TETAP JALAN
❐ FAST RESPON [SERVER BARU]

*MINAT? CHAT* : 6283863727401
*MINAT? CHAT* : 6283863727401

Jadilah Pembeli Yang Bijak
Pelanggan Senang Kami Ikut senang😅

Keep Calculations In Buying😊

Support Yt Owner:)
*https://youtube.com/@Putra_Modz_*`.trim()

conn.sendMessage(m.chat, {
text: putra,
contextInfo: {
externalAdReply: {
title: "Beli Dong Banh 😭",
body: uptimex,
thumbnailUrl: "https://telegra.ph/file/1f45fdb0f3b3e64a8e1cd.jpg",
sourceUrl: gclink,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak})
}
handler.help = ['listpanel']
handler.tags = ['main']
handler.customPrefix = /^(sewa|panel|sewapanel|listpanel|panelmurah|murah|needpanel|butuhpanel)$/i 
handler.command = new RegExp
handler.limit = false

export default handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}