const fs = require('fs')
const moment = require('moment');
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
const client = new Client();
client.commands = new Collection();
client.login(TOKEN);


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

//dir of events
const loadEvents = (dir = "./events/") => {
    fs.readdirSync(dir).forEach(dirs => {
        const events = fs.readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
        for (const event of events) {
            const eventt = require(`${dir}/${dirs}/${event}`);
            const eventtName = event.split('.')[0];
            client.on(eventtName, eventt.bind(null, client));
        }

    })
}; loadEvents();




