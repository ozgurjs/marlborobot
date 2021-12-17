const Discord = require("discord.js");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  let isim = args.slice(0).join(" ");
  if (!isim) return message.channel.send("💎 | **Lütfen İsmini yaz.**");
  message.channel.send("💎 | **İsmin Başarıyla ``" + isim + "`` olarak ayarlandı!**");
  db.set(`pisim_${message.author.id}`, isim);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "Profil"
};
 
exports.help = {
  name: "isim-ayarla",
  description: "",
  usage: "",
  kategori: "Profil"
};