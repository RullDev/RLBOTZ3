let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
Hai Kak Yuk Bantu Donasinya
Biar Bot Online Trus😉🙏

*Payment Gopay/Pulsa*
*Number:* 087753812675

Terimakasih Banyak Buat Kamu Yang Sudah Membantu Donasi Untuk Perkembangan Bot Ini><
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

handler.limit = false

export default handler
