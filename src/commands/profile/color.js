const Schema = require('../../database/models/profile');
const isHexcolor = require('is-hexcolor');

module.exports = async (client, interaction, args) => {

    const color = interaction.options.getString('color');

    Schema.findOne({ User: interaction.user.id }, async (err, data) => {
        if (data) {
            if (!isHexcolor(color)) return client.errNormal({ error: "You did not specify an hex color! Example: #ff0000. Copy this URL to see a list of all hex colors --> https://htmlcolorcodes.com/color-names", type: 'editreply' }, interaction);

            data.Color = color;
            data.save();

            client.succNormal({
                text: "Your favorite color is set",
                fields: [{
                    name: "🎨┆Color",
                    value: `\`\`\`${color}\`\`\``,
                    inline: true,
                }],
                type: 'editreply'
            }, interaction);
        }
        else {
            return client.errNormal({ text: "No profile found! Open a profile with createprofile", type: 'editreply' }, interaction);
        }
    })
}

 