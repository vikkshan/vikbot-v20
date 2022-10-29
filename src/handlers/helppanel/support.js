const Discord = require('discord.js');

module.exports = async (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isSelectMenu()) return;

        if (interaction.customId == "Vikky-helppanel") {
            if (interaction.values == "support-help") {
                interaction.deferUpdate();

                const row2 = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageSelectMenu()
                            .setCustomId('Vikky-helppanel')
                            .setPlaceholder('🍥┆Please make a slection')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Bot!`,
                                    emoji: "💻",
                                    value: "commands-help",
                                },
                                {
                                    label: `Invite`,
                                    description: `Invite Vikky to your server`,
                                    emoji: "📨",
                                    value: "invite-help",
                                },
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "❓",
                                    value: "support-help",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Show the bot changelogs`,
                                    emoji: "📃",
                                    value: "changelogs-help",
                                },
                            ]),
                    );

                let row = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                            .setLabel("Support server")
                            .setURL("hhttps://discord.gg/Dwnf3vQSz4")
                            .setStyle("LINK"),
                    );

                client.embed({
                    title: `❓・Support`,
                    desc: `Make your server even better with Bot!`,
                    url: "https://discord.com/api/oauth2/authorize?client_id=1009149789914546287&permissions=13744537140328&scope=applications.commands%20bot",
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

 