import { createHash } from 'crypto'
import fetch from 'node-fetch'

let cap = `*OPEN JADIBOT BOT WA*
    
Terutama Terimakasih Teruntuk Developer:
➸ @${'6287753812675'.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
➸ 0@s.whatsapp.net

─────────────────────
     *Mau Order Jadibot Ke Developer?*
     *Sung Cek My Website*
⫹⫺ https://www.khoirull.my.id/
 *Atau Bisa Juga Langsung Chat Saya*
 wa.me/6287753812675
 
 Harga Dijamin Murah
 30k Per Bulan + Bisa Ganti Nama Bot,dll!
─────────────────────`
  let buttonMessage= {
'document':{'url':'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'},
'mimetype':global.ddocx,
'fileName':'「 Jadibot」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw',
'mediaType':2,
'previewType':'pdf',
'title':`namebot`,
'body':`RulZy`,
'thumbnail':await(await fetch('https://telegra.ph/file/6ab4daac226292a112540.jpg')).buffer(),
'sourceUrl':'https://youtube.com/channel/UC1oSMQCd3XKVxYwSh4RE2Nw'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Untuk Orang Yang Telah Berpatisipasi

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'🍀Menu'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'📰Hallo'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['info']

handler.command = /^(jdibot)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
