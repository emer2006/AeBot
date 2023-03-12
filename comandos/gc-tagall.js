let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*▪𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*⺀ACTIVENSE BOTS BOTAE LOS INVOCA ⺀*\n\n▪ ${oi}\n\n▪ *𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 𝐆𝐄𝐍𝐄𝐑𝐀𝐋:*\n`
for (let mem of participants) {
teks += `•⚜️ @${mem.id.split('@')[0]}\n`}
teks += `└@Com_ae`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
