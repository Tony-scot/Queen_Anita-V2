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
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@cluster0.z1koht7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUhJc0krYjR3MHdKM2VYZDdmU0tBYkdrRGxNZTdrVUlLU2c4VGRpQlJFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVStrWFdldEE1SkR4aGF0VWJSdWttZ2t0Wm1yM0MwSGZrUFI4a2JmaG1ROD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQkFZb0R5ZXUxVEhUaVlrRVRwdjN3NXNnZUN1a2RvWE5DWVZscUwvT0ZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T1V1c1ZseTk2ZEdHUmNuU01QcWJ6amxFRGlKUzRYMmJzUjdpcFR0dDM0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGZTZjR1FiYXlQVGRHNURMWEg1ck5wdmxwLzd5UzNMNDBvSGIvc1AvMGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJ2RUxEakVNS2JDWmtsY1FySEQ1SlNZTVpLTUhVbzU4TEorVmxTOHRWM0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1weWZ6ZkZiRENzcTJISFEwNWsvTXV2SW5UNzhIQmFneDg4bHF1SzdsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1Fvd28ramxHR3NrdG5RS3BKZ0tFVmQ5VzcrdzRBZzdrSEhDOGJjanNUMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9RcGIxU3lpUUl4Z1ZFTWZaUW9UdHBIdHg5V2VmMEFYdkc3NFlnWGU4aUdkR1lmN1pDUStpQU1mMndpeERCUk90T3UrY1dPb2hpcTREeUp5WVBEK2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzYsImFkdlNlY3JldEtleSI6ImVoYU1uUU5UdGVWektVSXFKZVJqSmRQWGExS3l1SWVBZ3dycFRrZHY1YkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhIWk14cnRpUzBHR2FqNUw4Q3o1clEiLCJwaG9uZUlkIjoiMjZiM2Q3OTgtYjU4MC00ZTEyLTkxOTEtMDZlODVkMjk0ZmViIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFZUHBwdFpna1U3Z0pRSGVyRzJYVkF0eGUyWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdnBrbkwwajhqUTZGcmx6Wi9SNWU4Y2NPT2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRTVaNFQ2RUwiLCJtZSI6eyJpZCI6IjI1NTY3NTIzMzI0NTozOEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTdnMkpvR0VLZWFuN1VHR0JvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidFV0Qnk2TTdJdmc2MTFtdTZycENsc3RFL3RSQlZQZ0g3STllUzZRLzV6ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ3ZTbXZSb1g3dVdVNmwydzBWcWpBdFVLUW5XY3BCRTFISE5OUGZ4Wk1CL2FWeThGVHpScjNiOVBscXNVTUFGV3EvRzdYMFJaN0dmYWVWMWtrZWExQlE9PSIsImRldmljZVNpZ25hdHVyZSI6InVCK2R3aWVCWlZBa2RkcGpSQmFha3Z0cElLRTVhVjA5VkNXUUNqN3A3N3hpU2dvUi9LcWVmV3JhTm53REZOcGVnK3RhVG9oRzZVU2EwSnd1ZVVZVGhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Njc1MjMzMjQ1OjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJWTFFjdWpPeUw0T3RkWnJ1cTZRcGJMUlA3VVFWVDRCK3lQWGt1a1ArYysifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIyNzMwNzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmJ1In0="
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
