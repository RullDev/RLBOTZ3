// Source https://github.com/sadteams/bot-md
const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	conn.p[id] = [
	await conn.sendKontak(m.chat, global.owner, m, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
     }}
  })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `Hallo @${m.sender.split('@')[0]}, Ini Owner Saya,Jangan Spam Ya 🗿 \n Btw -1 Nya Dong Kack><`, mentions: [m.sender] }, { quoted: conn.p[id][0]
  })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler
