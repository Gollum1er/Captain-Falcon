const { MessageEmbed } = require('discord.js');
const moment = require('moment');
module.exports.run = (client, message, arguments) => {
    message.channel.send(arguments.join(" "))
        .then(() => {
            message.delete({ timeout: 1000 });
        });

    const log = new MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(`**Say**`)
        .addField("Executé par :", message.author.tag, true)
        .addField("Message", arguments.join(" "), false)
        .addField("Date :", moment.utc(message).format('LL'), true)
        .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
        .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

    const logChannel = client.channels.cache.get("816638389558181908");
    logChannel.send(log);
};

module.exports.help = {
    name: 'say',
    description: 'Recopie le message envoyé',
    arguments: true,
    usage: "CaptainFalcon?say <message>",
    category: 'membres'

};