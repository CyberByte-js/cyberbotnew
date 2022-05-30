const Discord = require('discord.js')
const fs = require('fs');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand() && !interaction.isButton()) return;
    
    if (interaction.isCommand())
    {
        for (file of fs.readdirSync('./commands/').filter(file => file.endsWith('.js')))
        {
            var command = require('./commands/' + file)
            if (interaction.commandName === command.name)
                command.run(interaction)
        }
    } else if (interaction.isButton())
    {
        require('./buttonHandler.js').run(interaction)
    }

});

client.once('ready', async () => 
{
    console.log('Bot on');

    var data = []
    for (file of fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))) {
        var command = require('./commands/' + file)
        data.push(command)
    }
    const commands = await client.application?.commands.set(data);
    console.log(commands)
})

client.login(require('./token.json').token)