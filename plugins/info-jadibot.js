import fs from 'fs'
let handler = async (m, { conn }) => {
let teks = 'JadiBot'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren 👋
*MAAF KAK FITUR JADIBOT TIDAK ADA DI DALAM FITUR KAMI*
⟩» *Kalau kakak mau jadi bot silahkan jasa run aja kak*
   *Dijamin On 24 Jam + Fast Respon*
          
━━━〔 ıll *HARGA* llı 〕━━ꕥ
⬡ *1 MINGGU*: ~7.000~ Diskon 6.000
⬡ *1 BULAN*: 10.000 
⬡ *2 BULAN:* 30.000 
⬡ *PERMANEN:* 75.000 
⬡ *Kalo Mau Ganti Nama Bot+Owner Cuma 5 k*
   Selengkapnya Chat Admin!
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━━〔 ıll *PAYMENT* llı 〕━━ꕥ
⬡ *DANA:* ${dana}
⬡ *GOPAY:* ${gopay}
⬡ *PULSA:* ${pulsa}
┗━━━━━━━━━━━━━━━━━━ꕥ
┏━━〔 ıll *RULES* llı 〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
⬡ [❗] *Kalau akunmu ke banned bukan urusan saya*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!
⟩» *jangan lupa donasi kak* «⟨
Terimakasih yang sudah mendonasikan untuk bot
Contact person jasa run bot:
wa.me/${numberowner} (Owner)
*Subscribe Youtube Owner*`
}
handler.tags = ['info']
handler.help = ['jadibot']
handler.command = /^(jadibot)$/i

module.exports = handler
