import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./media/song4.opus') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.tags = ['songs']
handler.help = ['song3']
handler.command = /^(song3)$/i

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler
