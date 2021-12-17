const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  //if(db.get(`MarlboroOneri.${message.author.id}`)) return message.channel.send('Bekleyen bir önerin var zaten!')
  let baslık = args[0];
  let ıcerik = args.slice(1).join(" ");
  if (!baslık && !ıcerik)
    return message.channel.send(
      "Bir içerik veya başlık belirtmedin. Lütfen tekrar dene!"
    );
  db.set(`MarlboroOneri.${message.author.id}`, {
    sistembaslık: baslık,
    sistemicerik: ıcerik
  });
  db.add("MarlboroÖneriSıra.", 1);
  db.add("MarlboroKullanıcıSıra." + message.author.id + "", 1);
  message.delete();
  message.channel.send("💎 Önerin başarıyla alınmıştır!");

  let log = "";
  let veri = db.get(`MarlboroOneri.${message.author.id}`);
  client.channels.cache.get(log).send(
    new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Kullanıcı: ${message.author.tag} [${message.author.id}]`)
      .setAuthor(
        "Bir Öneri Belirdi",
        message.author.displayAvatarURL({ dynamic: true }),
        "https://discord.gg/hNdsTZs2kM"
      ).setDescription(`
Konu baslığı
\`\`\`cs
${veri.sistembaslık}
\`\`\`
Sıra
\`\`\`cs
${db.get("MarlboroÖneriSıra")}
\`\`\`
Öneri
\`\`\`cs
${veri.sistemicerik}
\`\`\`
`)
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "öneri"
};
