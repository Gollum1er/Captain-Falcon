const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, arguments) => {
    const membre = message.mentions.members.first() || message.member;

    const embed = new MessageEmbed()
        .setThumbnail(membre.user.displayAvatarURL())
        .setTitle(`Informations de l'utilisateur **${membre.user.username}**`)
        .setColor("0xe43333")
        .addField("Tag :", membre.user.tag)
        .addField("ID :", membre.id)
        .addField("Créé le :", moment.utc(membre.user.createdAt).format("LL"))
        .addField("Jeu actuel :", membre.user.presence.game ? membre.user.presence.game.name : 'Aucun jeu')
        .addField("Rejoint le :", moment.utc(membre.joinedAt).format('LL'))
        .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

    message.channel.send(embed);

    const log = new MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(`**Userinfos**`)
        .addField("Executé par :", message.author.tag, true)
        .addField("Personne visée :", membre.user.tag, true)
        .addField("Date :", moment.utc(message).format('LL'), true)
        .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
        .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

    const logChannel = client.channels.cache.get("816638389558181908");
    logChannel.send(log);
};

module.exports.help = {
    name: 'userinfos',
    description: `Affiche les informations sur l'utilisateur mentionné`,
    arguments: true,
    usage: "CaptainFalcon?userinfos <@user#0000>",
    category: 'membres'

}