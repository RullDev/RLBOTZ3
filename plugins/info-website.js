let handler = async (m, { conn }) => {
let info = `

–––––– *📃 Kebijakan & Privasi* ––––––
🗣️: Kak, Data kita aman gak di bot?
💬: Aman Owner Gk Bakal Ngambil Crush Kamu

🗣️: Fiturnya Banyak Gak Kak?
💬: Banyak, Ada Fitur Menfess,Sticker,Tiktok,Dll

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} Website ✦-------`,
	rows: [
	    {title: "Website RullBOT🛰", rowId: '.website', description: 'Website Resmi Kami' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Open Web!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info']
handler.tags = ['main']
handler.command = /^(webs(ite)?|web)$/i

export default handler
