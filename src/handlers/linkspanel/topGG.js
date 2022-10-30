const Discord = require('discord.js');

module.exports = async (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "top.gg-linkspanel") {
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
                                    label: `Vote Vikky`,
                                    description: `Help Vikky grow and vote on [Top.gg](https://top.gg/bot/1009149789914546287)`,
                                    emoji: "👍",
                                    value: "vote-linkspanel",
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
                            .setLabel("Vote Now")
                            .setURL("https://top.gg/bot/1009149789914546287/vote")
                            .setStyle("LINK"),
                    );

                client.embed({
                    title: `📃・Bot Vote`,
                    desc: `Vote for Bot on top.gg`,
                    image: "https://cdn.discordapp.com/attachments/843487478881976381/874694192755007509/Bot_banner_vote.jpg",
                    url: "https://top.gg/bot/798144456528363550/vote",
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 