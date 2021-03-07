const { MessageEmbed } = require('discord.js');
const moment = require('moment');
module.exports.run = (client, message, arguments) => {
    let début = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Pong : **${Date.now() - début}**ms`));

    const log = new MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(`**Ping**`)
        .addField("Executé par :", message.author.tag, true)
        .addField("Date :", moment.utc(message).format('LL'), true)
        .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
        .setFooter("Captain Falcon#4446, bot de MIR | Gollum1er#2227");

    const logChannel = client.channels.cache.get("816638389558181908");
    logChannel.send(log);

};

module.exports.help = {
    name: 'ping',
    description: `Renvoie le délai de connexion de l'utilisateur`,
    arguments: false,
    usage: "CaptainFalcon?ping",
    category: 'membres'
};