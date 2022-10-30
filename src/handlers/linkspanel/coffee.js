const Discord = require('discord.js');

module.exports = async (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "invite-linkspanel") {
                interaction.deferUpdate();

                const row2 = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageSelectMenu()
                            .setCustomId('Bot-linkspanel')
                            .setPlaceholder('🍥┆Please make a selection')
                            .addOptions([
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "❓",
                                    value: "support-linkspanel",
                                },
                                {
                                    label: `Invite Bot`,
                                    description: `Invite Bot to your server`,
                                    emoji: "📨",
                                    value: "invite-linkspanel",
                                },
                                {
                                    label: `Support Vikky`,
                                    description: `Share your love, buy me a coffee`,
                                    emoji: "🧞‍♂️",
                                    value: "coffee-linkspanel",
                                },
                                {
                                    label: `Community Server`,
                                    description: `Join the community server!`,
                                    emoji: "🌍",
                                    value: "community-linkspanel",
                                },
                                {
                                    label: `Top.gg`,
                                    description: `Show the top.gg link`,
                                    emoji: "📃",
                                    value: "top.gg-linkspanel",
                                },
                            ]),
                    );

                let row = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                            .setLabel("Buy me a coffee")
                            .setURL("https://ko-fi.com/vikbot")
                            .setStyle("LINK"),
                    );

                client.embed({
                    title: `🧞‍♂️・Support Vikky`,
                    desc: `Share your love, buy me a coffee`,
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
                    url: "https://ko-fi.com/vikbot",
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 