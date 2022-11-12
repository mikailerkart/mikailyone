const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
    {

        label: "Üniversite",
        value: "972090167663931412",
        emoji: "👤"
    },
    {

        label: "Lise",
        value: "972090467871236166",
        emoji: "🙎‍♂️"
    },
    {

        label: "Mezun",
        value: "972090569327247370",
        emoji: "👨‍🎓"
    },
    {

        label: `Study Buddy`,
        value: "999815257348395091",
        emoji: "📚"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(4)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({content: "**Aşağıdaki rollerden kendinize uygun eğitim rolü seçebilirsiniz**\n*Study Buddy rolünü seçerek ders kanalları görebilirsiniz.*", components: [Row] });

}

module.exports.help = {
    name: "dropdown3",
    category: "general",
    description: "Anket"
}