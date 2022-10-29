const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello, I am Vik!')
})
app.listen(port, () => {
  console.log(`Vik is listening to http://localhost:${port}`)
})
const Discord = require('discord.js');
const chalk = require('chalk');
require('dotenv').config();

const webhook = require("./config/webhooks.json");
const config = require("./config/bot.js");

const startLogs = new Discord.WebhookClient({
    id: webhook.startLogs.id,
    token: webhook.startLogs.token,
});

const shardLogs = new Discord.WebhookClient({
    id: webhook.shardLogs.id,
    token: webhook.shardLogs.token,
});

const manager = new Discord.ShardingManager('./src/bot.js', {
    totalShards: 2,
    token: process.env.DISCORD_TOKEN,
    respawn: true
});

// const { AutoPoster } = require('topgg-autoposter');
// const poster = AutoPoster(process.env.TOPGG_TOKEN, manager);

let w = `C`+ `o`+`r`+`w`+`i`+`n`;
console.clear();
console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), (chalk.green(`Starting up`)), (chalk.white(`...`)))
console.log(`\u001b[0m`)
console.log(chalk.red(`© ${w} | 2021 - ${new Date().getFullYear()}`))
console.log(chalk.red(`All rights reserved`))
console.log(`\u001b[0m`)
console.log(`\u001b[0m`)
console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.red(`Version ${require(`${process.cwd()}/package.json`).version}`), (chalk.green(`loaded`)))
console.log(`\u001b[0m`);

manager.on('shardCreate', shard => {
    let embed = new Discord.MessageEmbed()
        .setTitle(`🆙・Launching shard`)
        .setDescription(`A shard has just been launched`)
        .addField("🆔┆ID", `${shard.id + 1}/${manager.totalShards}`, true)
        .addField(`📃┆State`, `Starting up...`, true)
        .setColor(config.colors.normal)
    startLogs.send({
        username: 'Vik Logs',
        embeds: [embed],
    });

    console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), (chalk.green(`Starting`)), chalk.red(`Shard #${shard.id + 1}`), (chalk.white(`...`)))
    console.log(`\u001b[0m`);

    shard.on("death", (process) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`🚨・Closing shard ${shard.id + 1}/${manager.totalShards} unexpectedly`)
            .addField("PID", `\`${process.pid}\``)
            .addField("Exit code", `\`${process.exitCode}\``)
            .setColor(config.colors.normal)
        shardLogs.send({
            username: 'Bot Logs',
            embeds: [embed]
        });

        if (process.exitCode === null) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`🚨・Shard ${shard.id + 1}/${manager.totalShards} exited with NULL error code!`)
                .addField("PID", `\`${process.pid}\``)
                .addField("Exit code", `\`${process.exitCode}\``)
                .setColor(config.colors.normal)
            shardLogs.send({
                username: 'Bot Logs',
                embeds: [embed]
            });
        }
    });

    shard.on("shardDisconnect", (event) => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`🚨・Shard ${shard.id + 1}/${manager.totalShards} disconnected`)
            .setDescription("Dumping socket close event...")
            .setColor(config.colors.normal)
        shardLogs.send({
            username: 'Vik Logs',
            embeds: [embed],
        });
    });

    shard.on("shardReconnecting", () => {
        const embed = new Discord.MessageEmbed()
            .setTitle(`🚨・Reconnecting shard ${shard.id + 1}/${manager.totalShards}`)
            .setColor(config.colors.normal)
        shardLogs.send({
            username: 'Vik Logs',
            embeds: [embed],
        });
    });
});


manager.spawn();

 