import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./media/Sad:).opus') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.customPrefix = /^(song1)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler
