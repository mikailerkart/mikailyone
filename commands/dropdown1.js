const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Koç",
        value: "938780510270943272",
        emoji: "♈"
        },
    {

        label: "Boğa",
        value: "938780625748521060",
        emoji: "♉"
    },
    {

        label: "İkizler",
        value: "938780665674084452",
        emoji: "♊"
    },
    {

        label: "Yengeç",
        value: "938780698674868254",
        emoji: "♋"
    },
    {

        label: "Aslan",
        value: "938780758577926144",
        emoji: "♌"
    },
    {
        label: "Başak",
        value: "938780808196538400",
        emoji: "♍"
    },
    {
        label: "Terazi",
        value: "938780827955892254",
        emoji: "♎"
    },
    {
        label: "Akrep",
        value: "938780882490245150",
        emoji: "♏"
    },
    {
        label: "Yay",
        value: "938780925255360543",
        emoji: "♐"
    },
    {
        label: "Oğlak",
        value: "938780975121436762",
        emoji: "♑"
    },
    {
        label: "Kova",
        value: "938780992519422063",
        emoji: "♒"
    },
    {
        label: "Balık",
        value: "938781053689147433",
        emoji: "♓"
    }

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

    return message.channel.send({content: "**Aşağıdaki burç rollerden kendi burç rolünüzü alabilirsiniz.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown1",
    category: "general",
    description: "Anket"
}