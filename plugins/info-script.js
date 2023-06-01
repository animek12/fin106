//Credits Jangan Dihapus
//Thanks To Papah-Chan
import fetch from 'node-fetch'
var handler = async(m, { conn, text, usedPrefix, command }) => {

    let str = `*https://youtube.com/@Putra_Modz_*\n\n~Tuh Sc Nya~\n\nSc Ori by : *https://github.com/ImYanXiao/Elaina-MultiDevice*`
    let waifu = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/waifu.txt')
    let chen = await waifu.text()
    let ran = chen.split('\n')
    let yae = ran[Math.floor(Math.random() * ran.length)]
    let thumb = await(await fetch(yae)).buffer()
    await conn.reply(m.chat, str, m, global.fakeig)
    conn.sendFile(m.chat, './mp3/yare.mp3', '', null, m, true, { type:       "audioMessage", ptt: true, fileLength: 88738 })
}
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
