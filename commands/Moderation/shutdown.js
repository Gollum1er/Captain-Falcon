const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, arguments) => {
    const delay = '5000';
    const ready = new MessageEmbed()
    .setColor("RED")
    .setTitle(`**OFF**`);

const readyChannel = client.channels.cache.get("818154131764019220");
readyChannel.send(ready);

setTimeout(() => {
    process.exit();
}, delay);

};

module.exports.help = {
    name: 'shutdown',
    description: `Eteint le BOT`,
    arguments: false,
    usage: "CaptainFalcon?shutdown",
    permission: 'ADMINISTRATOR',
    category: 'moderation'

}