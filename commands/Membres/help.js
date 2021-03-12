const { MessageEmbed } = require('discord.js');
const { PREFIX } = require("../../config");
const moment = require('moment');
const { readdirSync } = require('fs');
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, arguments) => {
    if (!arguments.length) {

        const embed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("**Help**")
            .addField("Liste des commandes categorisées par utilisations", "Pour plus d'informations sur une commande spécifique veuillez taper : \`CaptainFalcon?help <nom_de_la_commande>\`")
            .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

        for (const category of categoryList) {
            embed.addField(`${category}`, `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`);
        };

        const log = new MessageEmbed()
            .setColor("PURPLE")
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`**Help**`)
            .addField("Executé par :", message.author.tag, true)
            .addField("Date :", moment.utc(message).format('LL'), true)
            .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
            .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

        const logChannel = client.channels.cache.get("816638389558181908");
        message.channel.send(embed);
        logChannel.send(log);

    } else {

        const command = client.commands.get(arguments[0]);

        const embed = new MessageEmbed()
            .setColor("PURPLE")
            .setTitle("**Help**")
            .addField('Commande désirée :', command.help.name)
            .addField('Description', `${command.help.description}`)
            .addField('Usage', `${command.help.usage}`)
            .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

        const log = new MessageEmbed()
            .setColor("PURPLE")
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`**Help**`)
            .addField("Executé par :", message.author.tag, true)
            .addField('Commande désirée :', command.help.name, true)
            .addField("Date :", moment.utc(message).format('LL'), true)
            .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
            .setFooter("Captain Falcon#2001, bot de MIR | Gollum1er#2227");

        const logChannel = client.channels.cache.get("816638389558181908");
        message.channel.send(embed);
        logChannel.send(log);
    };





};

module.exports.help = {
    name: 'help',
    description: 'Commande d\'aide',
    arguments: false,
    usage: "CaptainFalcon?help <command_name>",
    category: 'membres'

};