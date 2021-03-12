const { Client, Collection, MessageEmbed } = require('discord.js');
module.exports = (client) => {
    console.log(client.user.tag);
    client.user.setPresence({ activity : { name : 'moderate with MIR | Gollum1er#2227 / CaptainFalcon?help', types : 'PLAYING'}, status : 'dnd'});
    const ready = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`**ON**`);

        const readyChannel = client.channels.cache.get("818154131764019220");
        readyChannel.send(ready);
};
