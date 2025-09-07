
let handler = async(m, { conn, usedPrefix, command }) => {
	
  let pre = `*≡ SEWA BOT DAN PREMIUM*\n
▢ Grup / 15 Hari
  *10K*
_1 GB RAM, CPU 1 CORE
      
▢ Grup / 30 Hari
  *15K*
_1 GB RAM, CPU 1 CORE

▢ Grup / 30 Hari
  *20K*
_2 GB RAM, CPU 2 CORE

▢ NEED SC / PERMANENT
  *30K*
_LINK ON GITHUB ANYMOUS`
  let img = 'https://i.ibb.co/q0RXdYW/prem2.jpg'
     //conn.sendButton(m.chat, pre, msg.ig(), img, [['✆ Owner', `${usedPrefix}fgowner`]],m)
     conn.sendFile(m.chat, img, 'img.jpg', pre, m, null, rpl)
}
handler.help = ['premium']
handler.tags = ['main']
handler.command = ['alquiler', 'premium', 'alquilar']

export default handler
