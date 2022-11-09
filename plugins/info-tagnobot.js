let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let krizyn = 'https://telegra.ph/file/3eed967909e37d97d6a47.jpg'
await conn.send3ButtonImg(m.chat, krizyn, "=====『 TAG TERDETEKSI 』=====\n\nIya ada perlu apa dengan bot? ", '📮 Silahkan Pilih Button dibawah ini', 'Group', '.allgc', 'Menu', '.menu', 'Store', '.store', m)
                        
}
handler.customPrefix = /(@+62819095411460)/i
handler.command = new RegExp

module.exports = handler
