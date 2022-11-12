const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: "Single",
        value: "938787050382041118",
        emoji: "😈"
    },
    {

        label: "Lovers",
        value: "938787083097620500",
        emoji: "🥰"
    },

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(1)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({content: "**Aşağıdaki rollerden kendinize uygun ilişki rolü seçebilirsiniz**", components: [Row] });

}

module.exports.help = {
    name: "dropdown3",
    category: "general",
    description: "Anket"
}