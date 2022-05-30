const { MessageEmbed } = require('discord.js')

module.exports =
{
    run(waifu)
    {
        if (typeof waifu == 'string') waifu = require('./waifus/' + waifu)

        const embed = new MessageEmbed()
            .setColor('#4fe04a')
            .setTitle(waifu.name)
            .setDescription('\n⬛TBA')
            .setImage(waifu.image)
            .setFooter({ text: waifu.series + ' | ' + waifu.name})
        return embed;
    }
}