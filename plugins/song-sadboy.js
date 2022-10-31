let handler = async (m, { conn }) => {

–––––– *Sad Songs:)* ––––––
🗣️: Sad Mulu Min Nt Truss:)
💬: Dengerin Lagu Ni....

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} Pilih Lagu ✦-------`,
	rows: [
	    {title: "🎶 Lagu 1", rowId: '.song1', description: 'SADVIBES🥀' },
	    {title: "🎶 Lagu2", rowId: '.song2', description: 'Invalid' },
	{title: "🎶 Lagu3", rowId: '.song3', description: 'Invalid' },
	{title: "🎶 Lagu4", rowId: '.song4', description: 'Invalid' },
	{title: "🎶 Lagu5", rowId: '.song5', description: 'Invalid' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Pilih Menu ⎙!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['songs']
handler.tags = ['song']
handler.command = /^(lagu(sad)?|sadlist)$/i

export default handler
