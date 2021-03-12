const { MessageEmbed } = require('discord.js');
const moment = require('moment');
module.exports.run = (client, message, arguments) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Vous n\'avez pas les permissions !'); }
    message.channel.bulkDelete(arguments[0])
        .then((messages) => {
            message.channel.send(`**${messages.size}** messages ont été supprimés !`);
        });

    const log = new MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(`**Clear**`)
        .addField("Exectué par :", message.author.tag, true)
        .addField("Nombre de messages supprimés", arguments[0], true)
        .addField("Date :", moment.utc(message).format('LL'), true)
        .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
        .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

    const logChannel = client.channels.cache.get("816638389558181908");
    logChannel.send(log);
};

module.exports.help = {
    name: 'clear',
    description: 'Enlève le nombre de messages demandés',
    arguments: true,
    usage: "CaptainFalcon?clear <number_of_messages_to_delete>",
    permission: "MANAGE_MESSAGES",
    category: 'moderation'
}