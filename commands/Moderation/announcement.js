const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, arguments) => {
    const embed = new MessageEmbed()
        .setTitle(`Annonce`)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("RED")
        .setDescription(arguments.join(" "))
        .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

    const announcementChannel = client.channels.cache.get("816048786089967617");
    announcementChannel.send('@everyone');
    announcementChannel.send(embed);

    const log = new MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(`**Announcement**`)
        .addField("Executé par :", message.author.tag, true)
        .addField("Message :", arguments.join(" "), false)
        .addField("Date :", moment.utc(message).format('LL'), true)
        .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
        .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

    const logChannel = client.channels.cache.get("816638389558181908");
    logChannel.send(log);
};

module.exports.help = {
    name: 'announcement',
    description: `Envoi le message dans le salon annonce`,
    arguments: true,
    usage: "CaptainFalcon?announcement <message>",
    permission: 'ADMINISTRATOR',
    category: 'moderation'

}