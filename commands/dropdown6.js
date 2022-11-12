const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Pembe",
        value: "990597657833652274",
        emoji: "1006855055334461471"
        },
    {

        label: "Turuncu",
        value: "990597660366995508",
        emoji: "🟠"
    },
    {

        label: `Koyu Somun`,
        value: "990597654679531590",
        emoji: "🟤"
    },
    {

        label: `Bulanık Mavi`,
        value: "990597636887298068",
        emoji: "🔵"
    },
    {
        label: `Koyu Menekşe`,
        value: "990597671997821029",
        emoji: "🟣"
    },
    {
        label: "Fildişi",
        value: "999805747548409896",
        emoji: "🟡"
    },
    {
        label: "Kırmızı",
        value: "999806024401817801",
        emoji: "🔴"
    },
    {
        label: "Lacivert",
        value: "999806023655227432",
        emoji: "🔵"
    },
    {
        label: "Gümüş",
        value: "999012148657262612",
        emoji: "⚪"
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

    return message.channel.send({content: "**İstediğiniz rengi tablodan seçebilirsin. Unutma sunucuda seçtiğin renk ile temsil edileceksin.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown6",
    category: "general",
    description: "Anket"
}