import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/Sad6:).opus') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.tags = ['songs']
handler.help = ['song6']
handler.command = /^(song6)$/i

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler
