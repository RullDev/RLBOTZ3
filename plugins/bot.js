import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./media/Sad.opus') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.customPrefix = /^(musik|sabar|sad|nt|Nt|Ntcuy|haha|Nt)$/i
handler.command = new RegExp

handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler
