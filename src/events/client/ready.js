const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = async (client) => {
  const activities = [
        { name: `You Were there for me`, type: 2 }, // LISTENING
    { name: `with Arianna ♥️`, type: 0 }, // PLAYING
    { name: `${client.users.cache.size} aliens`, type: 2 }, // LISTENING
        { name: `in ${client.guilds.cache.size} Servers!!`, type: 0 }, // PLAYING
        { name: `love with Ari`, type: 3 }, // WATCHING
    {name: `in ${client.channels.cache.size} Channels`, type: 0 }, //PLAYING
    ];
    const status = [
        'online',
        'dnd',
        'idle'
    ];
    let i = 0;
    setInterval(() => {
        if(i >= activities.length) i = 0
        client.user.setActivity(activities[i])
        i++;
    }, 5000);
  
    let s = 0;
    setInterval(() => {
        if(s >= activities.length) s = 0
        client.user.setStatus(status[s])
        s++;
    }, 30000);

    client.player.init(client.user.id);    
  console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.red(`${client.user.username}`), chalk.green(`is ready!`))
}

 