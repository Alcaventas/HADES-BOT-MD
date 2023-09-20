import fs from 'fs'
import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
'528142113343', '𝘼𝙇𝘾𝘼𝘽𝙊𝙏 ☄️', true],
  ['5212412377467', '𝙾𝙵𝙲 𝚈𝙾𝚅𝙰𝙽𝙸', true],
  ['5212411347465', '𝙾𝙵𝙲 𝚈𝙾𝚅𝙰𝙽𝙸', true],
]
global.suittag = ['5212411719888']
global.mods = []
global.prems = ['5212411719888'], 
global.prems = ['5212411347465'],
 
global.APIKeys = { 
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://anabotofc.herokuapp.com/': 'AnaBot'
}

global.packname = '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏ ✍'
global.author = '©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏ ✍'
global.vs = '1.10.90'
global.version = vs
global.gt = '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏ ✍'
global.hadesbot = gt
global.yt = 'https://youtu.be/aPu9wQi-z8U'
global.youtube = yt
global.ig = 'https://www.instagram'
global.hadesig = ig
global.md = 'https://github.com/OFC-YOVANI/HADES-BOT-MD.git'
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/CG5ZPcJ22fL7QjNRzjguD0'
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ'
global.nnngrupo = nnn
global.paypal = 'https://pay'
global.donar = paypal
global.rg = '*🍀 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗢 ✨*'
global.resultado = rg
global.ag = '*⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗘𝗡𝗖𝗜𝗔 ⚠️*'
global.advertencia = ag
global.iig = '*📌 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡* ✨'
global.informacion = iig
global.fg = '*❌ 𝗩𝗨𝗘𝗟𝗩𝗘 𝗔 𝗜𝗡𝗧𝗘𝗡𝗧𝗔𝗥 ❌*'
global.fallo = fg
global.mg = '*❗ 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗜𝗡𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗢*'
global.mal = mg
global.eeg = '*📩ˢᵁ ᴿᴱᴾᴼᴿᵀᴱ ᴴᴬ ˢᴵᴰᴼ ᴱᴺⱽᴵᴬᴰᴼ📩*'
global.envio = eeg
global.eg = '*🍀𝗘𝗡𝗩𝗜𝗔𝗡𝗗𝗢 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢✨*'
global.exito = eg

global.wm = '©ᴏғᴄ-ʏᴏᴠᴀɴɪ﹏ ✍\n⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍\n'
global.igfg = '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏ ✍'
global.wait = '⌛_Cargando..._\n▰▰▰▱▱▱▱▱▱'

global.imagen1 = fs.readFileSync('./src/Menu2.jpg')
