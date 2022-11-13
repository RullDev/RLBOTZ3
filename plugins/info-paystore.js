let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '7'
let sn = '15'
let dn = '10'
//premium
let ph = '5'
let pn = '20'
let ppm = '70'
let info = `
╭━━━━「 *SEWA BOT* 」
┊⫹⫺ *Hemat:* _${sh}k/Grup (1 minggu)_
┊⫹⫺ *Normal:* _~${sn}k~ Diskon: ${dn}k/Grup (1 bulan)_                                                    
╰═┅═━––––––๑

╭━━━━「 *PREMIUM USER* 」
┊⫹⫺ *Hemat:* _${ph}k (1 minggu)_
┊⫹⫺ *Normal:* _${pn}k (1 bulan)_
┊⫹⫺ *Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa:* [${ppulsa}]
• *Gopay/Dana:* [${pdana}]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA BOT ✦-------`,
	rows: [
	    {title: "🔖 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Sewa Bot Grup', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa Bot Grup', description: '𝗣𝗿𝗶𝗰𝗲: ' + dn + 'k (1 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (1 bulan)' },
	{title: "🌟 𝗣𝗘𝗥𝗠𝗔𝗡𝗘𝗡𝗧", rowId: '.order *Paket:* PERMANENT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
