//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "255675233245";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFRUmdWWFhTeENyam5LQVZQOVl6QUFWdDVvTFhEUmRtLzViNWdiL1lIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5DSDNJQ2RHWWFpUGZBcVNIRDZ1N3JWQ2tyZ3NmZjZsSzM0NjVIQWpGbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnT2N3bzlPUkM4UXN1VUkrL3BWWUhZYzZDWUJjK01YOWNvdm43RU04ZTNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaTkpQaldwMlAyZkYxVDcyRncyTTlwR1dvS0MxdFlCVzNTYTBsYUdkSjFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJZWMzck1kMlB2Z3ZiY2w2ZGl6djhkUTdDM2p4dEcrR2JwQzJyWlpoMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpHT2ZuMTdhSlpzQkJiM0hjSEVRSzJ0a1BlNzN2WG9CVTUrRlNVell2Q3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktxQjJ6UHU2YnJ1Sk1sZ0MvdVQzRXh5N1MwRmwwalRia25lTDF3RXFrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzhmc0U5S2Y0ZlJUeGRkL21aamZEK05TWXdIYTdFbkxyRWZLMXJpTnlSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1lREN6MFMyaTR6bk5wUzVRK0puYnlvcFB2MHVCbE0rVHZzNzdRdnNYc1ROT28zcjMzZXRpY01xT0ZqcEVBRHpvd1AxSFFPd2JhcHVBTlBFL2RKQWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiI3bE44NVZwWEdaeVF5aXJIa25remdON0xkRk5acGtWL255OFpBaEZMSWFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0RFJxX25hZlJMT0ZnV2c2Y0VQZ2p3IiwicGhvbmVJZCI6ImRkMzFhZmY2LWRiNTEtNGRiYy1iNmUwLWYxODdmZWVhNTBkOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3cEo5RFFySW9veFlsNXpmNkZZR2FBUFVKcXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVFMZXJjaXlkTTFFVzB1L0gvTnZoNWFMTXhnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlETDJNVkVMIiwibWUiOnsiaWQiOiIyNTU2NzUyMzMyNDU6MzJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k3ZzJKb0dFUGJLbGJVR0dCTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRVdEJ5Nk03SXZnNjExbXU2cnBDbHN0RS90UkJWUGdIN0k5ZVM2US81ejQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklDQ2U1bzI4ZUpVRXcwOHZSVm01eFkzdTNrMjVoZm9mNFZ4YThncHNYK2VBZlJENTMxYjhLeXRLSDllUHZOSEVXL0lmL2ZzakxBNjVqSTRmTjhvQUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZVWNSMklJaWE4a1NXM1N6R0toS21LY1RyanVZN2FUeS9KZWUwY2NOM2lCbGk1ZjlZTmJFNzJsNys5bEcvbm40WTBYSWdZWEV6UEMxeE9pWWlDSHlodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY3NTIzMzI0NTozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiVkxRY3VqT3lMNE90ZFpydXE2UXBiTFJQN1VRVlQ0Qit5UFhrdWtQK2MrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTE1NDU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJidSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`DRAGON-V2™`",
  author: process.env.PACK_AUTHER || "DRAGON-V2",
  packname: process.env.PACK_NAME || "DRAGON",
  botname: process.env.BOT_NAME || "DRAGON😎😂-V2",
  ownername: process.env.OWNER_NAME || "DRAGON 😎",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
