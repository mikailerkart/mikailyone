const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Tarih",
        value: "997285620059738122",
        emoji: "📅"
        },
    {

        label: "Sanat",
        value: "997285606520528967",
        emoji: "🎭"
    },
    {

        label: "Müzik",
        value: "997284892389941319",
        emoji: "🎵"
    },
    {

        label: "Astroloji̇",
        value: "997284195934146581",
        emoji: "🔮"
    },
    {

        label: `Di̇zi̇ - fi̇lm`,
        value: "997283905369550880",
        emoji: "🎬"
    },
    {

        label: "Gastronomi̇",
        value: "997283627895373905",
        emoji: "🔪"
    },
    {

        label: "Psi̇koloji̇",
        value: "997285158883430511",
        emoji: "🧠"
    },
    {

        label: "Yazılım",
        value: "997284619252682812",
        emoji: "💻"
    },
    {
        label: "Binbir-site",
        value: "999012158287392889",
        emoji: "🌐"
    },
    {
        label: "Kitap-tavsiye",
        value: "997283120703348846",
        emoji: "📚"
    },
    {
        label: "Tasarım",
        value: "999809439525781604",
        emoji: "📈"
    },
    {
        label: "Mimari",
        value: "1003780736853225652",
        emoji: "🛕"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(12)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({content: "**Aşağıdaki rollerden kendinize alanlar seçebilirsiniz**", components: [Row] });

}

module.exports.help = {
    name: "dropdown4",
    category: "general",
    description: "Anket"
}