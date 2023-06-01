/*import * as bochil from '@bochilteam/scraper'
var handler = async (m, { args }) => {
    if (!args[0]) throw 'Input URL'
    try { 
    	let res = await bochil.instagramdlv2(args[0]) 
    let media = await res[0].url
    if (!res) throw 'Can\'t download the post'
    m.reply('_In progress, please wait..._')
    conn.sendMessage(m.chat, { video : { url : media }}, m) 
    } catch {
     try {
     	let res2 = await bochil.instagramdlv3(args[0]) 
   let media2 = res2.url
   let cap = res2.title
     return this.sendFile(m.chat, media, 'instagram.mp4', cap, m)
     } finally {
   }
  }
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler
*/

import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    const results = await instagramdl(args[0])
        .catch(async _ => await instagramdlv2(args[0]))
        .catch(async _ => await instagramdlv3(args[0]))
        .catch(async _ => await instagramdlv4(args[0]))
    for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `🔗 *Url:* ${url}`, m)
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler
