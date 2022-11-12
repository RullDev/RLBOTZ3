import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

let info = `RullBOT Disini (｡>_<｡) \nKetik .menu untuk menggunakan bot😉`



let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'


conn.reply(m.chat, info, m, { quoted: fakes },{ contextInfo: { externalAdReply: { showAdAttribution: true,
      mediaUrl: "https://Instagram.com/khoirul36_",
      mediaType: 2,
      description: "https://Instagram.com/khoirul36_", 
      title: global.titlebot,
      body: wm,
      thumbnail: thumb,
      sourceUrl: sig  }}})

}

handler.customPrefix = /^(tes|bot|rull|test|halo|hallo|Pp|Hai, saya mau confess ke dia|Halo|Hallo|mau confes|Mau confes|Hai mau confess)$/i

handler.command = new RegExp



export default handler
