const wait = require('node:timers/promises').setTimeout;

module.exports =
{
    name: 'nuke'
    ,description: 'nuke your friends :D'
    ,options: [{name: 'who', type: 'USER', description: 'who do you want to nuke?', required: true}]
    ,async run(interaction)
    {
        await interaction.reply('🧨⠀⠀⠀⠀⠀⠀⠀' + `<@${interaction.options.get('who').value}>`)
        await wait(1000)
        try
        {
            await interaction.editReply('⠀🧨⠀⠀⠀⠀⠀⠀' + `<@${interaction.options.get('who').value}>`)
            await wait(1000)
            await interaction.editReply('⠀⠀🧨⠀⠀⠀⠀⠀' + `<@${interaction.options.get('who').value}>`)
            await wait(1000)
            await interaction.editReply('⠀⠀⠀🧨⠀⠀⠀⠀' + `<@${interaction.options.get('who').value}>`)
            await wait(1000)
            await interaction.editReply('⠀⠀⠀⠀🧨⠀⠀⠀' + `<@${interaction.options.get('who').value}>`)
            await wait(1000)
            await interaction.editReply('⠀⠀⠀⠀⠀🧨⠀⠀' + `<@${interaction.options.get('who').value}>`)
            await wait(1000)
            await interaction.editReply('⠀⠀⠀⠀⠀⠀🧨⠀' + `<@${interaction.options.get('who').value}>`)
            await wait(1000)
            await interaction.editReply('⠀⠀⠀⠀⠀⠀⠀🧨' + `<@${interaction.options.get('who').value}>`)
            await wait(1000)
            await interaction.editReply('💥')
        } catch (err)
        {
            interaction.channel.send('houve um erro! talvez tenha acontecido porque você apagou minha mensagem... ```' + err + '```')
        }
    }
}