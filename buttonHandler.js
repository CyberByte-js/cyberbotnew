const { MessageButton, MessageActionRow } = require("discord.js")
const storage = require('node-persist')

module.exports =
{
    async run(interaction)
    {
        if (interaction.customId.startsWith('w:'))
        {  
            var row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('claim')
                        .setLabel('Claim')
                        .setStyle('PRIMARY')
                        .setDisabled(true)
                );
            var waifuName = interaction.customId.substring(2)
            var embed = require('./waifuEmbedConstructor.js').run(waifuName).setColor('#bd0927')
            await interaction.update({ embeds: [embed], components: [row], })

            await storage.init()
            if (await storage.getItem(interaction.member.id)) 
            {
                var newUserObject = await storage.getItem(interaction.member.id)
                newUserObject.waifus.push(waifuName)
                await storage.setItem(interaction.member.id, newUserObject)
            }
            else
                await storage.setItem(interaction.member.id, { waifus: [waifuName] })

            await storage.setItem(waifuName, true)
        }
    }
}