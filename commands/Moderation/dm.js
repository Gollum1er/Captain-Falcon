const { MessageEmbed, DMChannel } = require('discord.js');
const moment = require('moment');
module.exports.run = (client, message, arguments) => {

    const membre = message.mentions.members.first() || message.member;
    arguments.shift();
    membre.send(arguments.join(" "))
        .then(() => {
            message.delete({ timeout: 1000 });
        });

    const log = new MessageEmbed()
        .setColor("BLUE")
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(`**DM**`)
        .addField("Executé par :", message.author.tag, true)
        .addField("Destinataire :", membre, true)
        .addField("Message", arguments.join(" "), false)
        .addField("Date :", moment.utc(message).format('LL'), true)
        .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
        .setFooter("Captain Falcon#4446, bot de MIR | Gollum1er#2227");

    const logChannel = client.channels.cache.get("816638389558181908");
    logChannel.send(log);
};

module.exports.help = {
    name: 'dm',
    description: 'Envoi le message en dm à la personne demandée',
    arguments: true,
    usage: "CaptainFalcon?dm <@user#0000> <message>",
    permission: "ADMINISTRATOR",
    category: 'moderation'

};