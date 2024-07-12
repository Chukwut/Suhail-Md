const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349133843583";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_01_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDczLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NixcbiAgICAgICAgOTYsXG4gICAgICAgIDgwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MixcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZnTVhFR1Vlc3JMeGVpWlV4Q0k3aHhLNjNGeGpKbFJWUFNMVHluOWE3dDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIl9nUDZWalNwUXUyaURPX1lPM00yeGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDZlZmE2MDItMDdiMy00MGEyLWFiZmQtMTllNzgwMGQ5YjQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDE1MyxcbiAgICAgIDY5LFxuICAgICAgNjIsXG4gICAgICAyMDcsXG4gICAgICA2MSxcbiAgICAgIDE1OCxcbiAgICAgIDk0LFxuICAgICAgMjksXG4gICAgICAxNDUsXG4gICAgICAxMTYsXG4gICAgICAxMTQsXG4gICAgICAxMTgsXG4gICAgICAyMzcsXG4gICAgICAxNDUsXG4gICAgICAyNDAsXG4gICAgICAxMDYsXG4gICAgICAxOTMsXG4gICAgICA1OSxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDI0MixcbiAgICAgIDExNSxcbiAgICAgIDIxMixcbiAgICAgIDU1LFxuICAgICAgMTIwLFxuICAgICAgNDEsXG4gICAgICAxOTIsXG4gICAgICAzNSxcbiAgICAgIDE3OCxcbiAgICAgIDk2LFxuICAgICAgMTk0LFxuICAgICAgMTExLFxuICAgICAgNjMsXG4gICAgICAyMDMsXG4gICAgICAxMjksXG4gICAgICA3MCxcbiAgICAgIDg5LFxuICAgICAgMTc3LFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjUzOVpDUUhHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMzODQzNTgzOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ2h1a3d1dGVtXCIsXG4gICAgXCJsaWRcIjogXCIxMzYzNTI0Nzc3NjU3MTA6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHJrdFBFRkVPcmh3N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmaDYxZ0JpUnh2eG5EVlpueFlYcVd6bi9oamEySnFrU1BPZDkvb2IweHo0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5GSDhVZ3Z4aE13UDJDcWxQc3VXZS9BSTE5cjk2RTN1THYwT0JJbzAzMHNkcFRpa0k4UnRsNUtmeHpBbWJnQnJUcVJJTStzWGZUT0FjMEpYV0FtRUJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktVV3JaMTZobDl1ek9LU3lKRWw0US9ReEhIaHFTK0xqazJReTBCTnBVbWlPTE9nT3cxVWYwRWZWR2FUUlNXdmt3V0x0b3dXMm8xYWtxY2xQSy9qakRnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzM4NDM1ODM6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzc0ODk0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
