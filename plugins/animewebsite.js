let handler = async m => m.reply(`
「 Website Anime 」

⫹⫺ Website: https://anoboy.ninja/
⫹⫺ Website2: -
⫹⫺ Website3: -
⫹⫺ *Website anime gratis tanpa iklan dan watermark*

`.trim()) // Tambah sendiri kalo mau
handler.help = ['websiteanime']
handler.tags = ['info']
handler.command = /^websiteanime$/i
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

export default handler 
