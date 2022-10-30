let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Website • Official 」
│ • WEBSITE OFFICIAL : https://bit.ly/3eggcxd
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6287753812675
│ _Hasil donasi akan digunakan buat server_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
│ _Klo Mau Tanpa Limit Bisa Ketik .sewa_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['website']
handler.tags = ['about']
handler.command = /^website$/i

module.exports = handler