const Discord = require('discord.js');

module.exports = async (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isSelectMenu()) return;

        if (interaction.customId == "Bot-linkspanel") {
            if (interaction.values == "coffee-linkspanel") {
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
                            .setLabel("Bot Invite")
                            .setURL("https://discord.com/oauth2/authorize?&client_id=896842236002713673&scope=applications.commands+bot&permissions=8")
                            .setStyle("LINK"),
                    );

                client.embed({
                    title: `🧞‍♂️・Support Vikky`,
                    desc: `Share your love, buy me a coffee`,
                    image: "https://media.discordapp.net/attachments/843487478881976381/894709307784986684/Bot2_banner_invite.png?width=812&height=238",
                    url: client.config.discord.serverInvite,
                    components: [row2, row],
                    type: 'edit',
                    color: client.config.colors.error
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 