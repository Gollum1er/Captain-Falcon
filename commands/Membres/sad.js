const { MessageEmbed } = require('discord.js');
const moment = require('moment');
module.exports.run = (client, message, arguments) => {
    message.channel.send(`${message.author.tag} a le moral dans les chaussettes. https://tenor.com/view/sponge-bob-square-pants-sad-lonely-alone-hello-darkness-gif-16029856`)
        .then(() => {
            message.delete({ timeout: 1000 });
        });

    const log = new MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(`**Sad**`)
        .addField("Executé par :", message.author.tag, true)
        .addField("Date :", moment.utc(message).format('LL'), true)
        .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
        .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

    const logChannel = client.channels.cache.get("816638389558181908");
    logChannel.send(log);
};

module.exports.help = {
    name: 'sad',
    description: 'Envoi un gif pour dire qu\'on est triste',
    arguments: false,
    usage: "CaptainFalcon?sad",
    category: 'membres'

};