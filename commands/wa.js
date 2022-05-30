const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const fs = require('fs')
const storage = require('node-persist')

module.exports =
{
    name: 'wa'
    ,description: 'roll a random animanga waifu',
    async run(interaction)
    {
        var waifus = []
        for (file of fs.readdirSync('D:/cyberbotremade/waifus/').filter(file => file.endsWith('.js'))) {
            var waifu = require('D:/cyberbotremade/waifus/' + file)
            waifus.push(waifu)
        }
        var waifu = waifus[Math.round(Math.random() * ((waifus.length - 1) - 0) + 0)]

        embed = require('../waifuEmbedConstructor.js').run(waifu)

        await storage.init()
        if (await storage.getItem(waifu.code) == null)
            await storage.setItem(waifu.code, false)
        else if (await storage.getItem(waifu.code))
            embed.setColor('#bd0927')

        var button =  new MessageButton()
            .setCustomId('w:' + waifu.code)
            .setLabel('Claim')
            .setStyle('PRIMARY')
            .setDisabled(await storage.getItem(waifu.code))

        const row = new MessageActionRow()
            .addComponents(button);

        interaction.reply({ embeds: [embed], components: [row] })
    }
}