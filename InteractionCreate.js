 let hasVoted = await client.topgg.hasVoted(interaction.user.id);
    const voteme = new MessageEmbed()
      .setTitle('')
      .setDescription(`You must vote me on [TOP.GG](https://top.gg/bot/1016392200516550736) to use this command`)
      .setColor('#03fcdb')
       const actionRow = new MessageActionRow()
      .addComponents([
        new MessageButton()
          .setLabel('Vote')
          .setURL("https://top.gg/bot/1016392200516550736")
          .setStyle("LINK")
          .setEmoji("1018200886268412017")
          .setDisabled(false)
        
      ])
if(cmd.voteOnly && !hasVoted){
  return interaction.followUp({embeds: [voteme] , components: [actionRow]}
  );
}

const { Api } = require ("top-gg/sdk");
client.topgg = new Api(top.gg token); // your top.gg token 