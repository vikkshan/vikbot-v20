const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `I am your free friendly neighborhood bot with which you can run your entire server! With no less than 400+ commands. I would be glad if you helped me stay up by [buying me a coffee](https://ko-fi.com/vikbot)!`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
                name: "🐛┆Fixed Bugs!",
                value: 'Better music system\nBetter bot setups\nGiveaways fixed\nChannel logs bug fixed\nBetter error handling for commands',
                inline: false,
            },
                 {
                 name: "🍥┆Features!",
                   value: 'Bot completely in slash commands\nNew Activities\nNew server stats\nAuto setups\nA new invite tracker system\nScheduled Events logs\nMute command is now timeout command\nEmbed layout improvements\nAn advanced embed builder\nRemoved NSFW commands\nUnnecessary commands removed\nSome commands rearranged'
                 },
        ],
        type: 'editreply'
    }, interaction)
}

 