const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId('Bot-linkspanel')
                .setPlaceholder('π₯βMake a selection')
                .addOptions([
                    {
                        label: `Support server`,
                        description: `Join the suppport server`,
                        emoji: "β",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Invite Vikky`,
                        description: `Invite Vikky to your server`,
                        emoji: "π¨",
                        value: "invite-linkspanel",
                    },
                    {
                        label: `Support Vikky`,
                        description: `Share your love, buy me a coffee`,
                        emoji: "π§ββοΈ",
                        value: "coffee-linkspanel",
                    },
                    {
                        label: `Community Server`,
                        description: `Join the community server!`,
                        emoji: "π",
                        value: "community-linkspanel",
                    },
                ]),
        );

    client.embed({
        title: `πγ»Links`,
        desc: `Get access to all of Vikky's links! Choose the link you need in the menu below`,
        image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 