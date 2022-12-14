const Discord = require('discord.js');

const Schema = require('../../database/models/votecredits');

const webhookClientLogs = new Discord.WebhookClient({
    id: "1033757666377469952",
    token: "DuLLX2EkpWEimCe4u62LhcHpGozhOdwle0GG0czEstscxWECyeYkNTKxphOD3so3I78y",
});

module.exports = async (client, interaction, args) => {
    const type = interaction.options.getString('type');
    const user = interaction.options.getUser('user');
    const amount = interaction.options.getNumber('amount');

    if (type == "add") {
        Schema.findOne({ User: user.id }, async (err, data) => {
            if (data) {
                data.Credits += amount;
                data.save();
            }
            else {
                new Schema({
                    User: user.id,
                    Credits: amount
                }).save();
            }
        })

        client.succNormal({
            text: `Added **${amount} credits** to ${user}`,
            type: 'editreply'
        }, interaction);

        let embedLogs = new Discord.MessageEmbed()
            .setTitle(`🪙・Credits added`)
            .setDescription(`Added credits to ${user} (${user.id})`)
            .addField('👤┆Added By', `${interaction.user} (${interaction.user.tag})`, true)
            .addField(`🔢┆Amount`, `${amount}`, true)
            .setColor(client.config.colors.normal)
            .setTimestamp();
        webhookClientLogs.send({
            username: 'Bot Credits',
            embeds: [embedLogs],
        });
    }
    else if (type == "remove") {
        Schema.findOne({ User: user.id }, async (err, data) => {
            if (data) {
                data.Credits -= amount;
                data.save();
            }
        })

        client.succNormal({
            text: `Removed **${amount} credits** from ${user}`,
            type: 'editreply'
        }, interaction);

        let embedLogs = new Discord.MessageEmbed()
            .setTitle(`🪙・Credits removed`)
            .setDescription(`Removed credits from ${user} (${user.id})`)
            .addField('👤┆Removed By', `${interaction.user} (${interaction.user.tag})`, true)
            .addField(`🔢┆Amount`, `${amount}`, true)
            .setColor(client.config.colors.normal)
            .setTimestamp();
        webhookClientLogs.send({
            username: 'Bot Credits',
            embeds: [embedLogs],
        });
    }
}

 