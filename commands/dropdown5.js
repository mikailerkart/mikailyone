const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: `Chat Etkinliği`,
        value: "1000917338234830848",
        emoji: "971470224954105876"
        },
    {

        label: `Çekiliş Katılımcısı`,
        value: "1000917661275914270",
        emoji: "971470224748605520"
    },
    {

        label: `Etkinlik Katılımcısı`,
        value: "1000917668888576010",
        emoji: "971470224991862814"
    }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(3)
        .setPlaceholder("Bir rol seç.")
        .addOptions(options)
    )

    return message.channel.send({content: "**Aşağıdaki bildirimlerini almak istediğiniz rolleri alabilirsiniz.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown5",
    category: "general",
    description: "Anket"
}