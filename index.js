const fs = require('fs')
const moment = require('moment');
const { Client, Collection, MessageEmbed } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client();
client.commands = new Collection();
client.login(TOKEN);

client.on('ready', () => {
    client.user.setActivity("CaptainFalcon? | Bot de MIR | Gollum1er#2227");
});

//dir of commands
const loadCommands = (dir = "./commands/") => {
    fs.readdirSync(dir).forEach(dirs => {
        const commands = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
        }
    })
}; loadCommands();

//return commands
client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const arguments = message.content.slice(PREFIX.length).split(/ +/);
    const commandName = arguments.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    if (command.help.arguments && !arguments.length) {
        const log = new MessageEmbed()
            .setColor("RED")
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`**ERROR**`)
            .addField("Nom de la commande :", command.help.name, true)
            .addField("Exectué par :", message.author.tag, true)
            .addField("Raison :", "Invalid arguments", true)
            .addField("Date :", moment.utc(message).format('LL'), true)
            .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
            .setFooter("Captain Falcon#4446, bot de MIR | Gollum1er#2227");

        const logChannel = client.channels.cache.get("816638389558181908");
        logChannel.send(log);
        return message.channel.send(`${message.author}, utilisation de la commande : \`${command.help.usage}\``);
    };
    if (!message.guild.member(message.author).hasPermission(command.help.permission)) {
        const log = new MessageEmbed()
            .setColor("RED")
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle(`**ERROR**`)
            .addField("Nom de la commande :", command.help.name, true)
            .addField("Exectué par :", message.author.tag, true)
            .addField("Raison :", "Invalid permissions", true)
            .addField("Date :", moment.utc(message).format('LL'), true)
            .addField("Lieu :", `${message.guild} : ${message.channel}`, true)
            .setFooter("Captain Falcon#4446, bot de MIR | Gollum1er#2227");

        const logChannel = client.channels.cache.get("816638389558181908");
        logChannel.send(log);
        return message.channel.send(`${message.author}, vous n'avez pas la permission suffisante pour exécuter cette commande !`);
    };
    command.run(client, message, arguments);
});


