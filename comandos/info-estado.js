let handler = async (m, { conn }) => {
try {
let pp = imagen4
let img = imagen5
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╔═[ *@emx._xit* ]
║ *➤ 𝙷𝙾𝙻𝙰 ${taguser}*
║
║ *=➢ 🤖 TIEMPO ACTIVO:* ${uptime}
║ *=➢ 👑 CREADOR: Charlie*
║ *=➢ 🔗 PAGINA OFICIAL:* @emx._xit
╚════════════════`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: ' 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 ✅' }, type: 1 }]
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: 'PÁGINA OFICIAL', body: 'BY @DIEGO-OFC', thumbnail: img, sourceUrl: `https://dorrat-bot-oficial.ml/`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*🤖 TIEMPO ACTIVO:* ${uptime} ┃ 👑 BY Aleizn ┃ 🔗 PAGINA OFC: dorrar-bot-oficial.ml`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\n║ *=➢ ⏱️ ` + d, ' Día(s)* ', `\n║ *=➢ ⌚ ` + h, ' Hora(s)* ', `\n║ *=➢ 🕰️ ` + m, ' Minuto(s)* ', `\n║ *=➢ ⏲️ ` + s, ' Segundo(s)* '].map(v => v.toString().padStart(2, 0)).join('')}
