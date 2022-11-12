const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Botun pingini verir.'),
        async execute(client, interaction){

            interaction.reply({content: `Ping **${client.ws.ping}** ms.`, ephemeral: true});

        }

}