const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

        label: "Valorant",
        value: "986065525819969638",
        emoji: "1️⃣"
        },
    {

        label: "PUBG",
        value: "986065400527732756",
        emoji: "2️⃣"
    },
    {

        label: `Counter Srike:Global Offensive`,
        value: "986065577376374814",
        emoji: "3️⃣"
    },
    {

        label: `Euro Truck Simulator 2`,
        value: "986065851264426014",
        emoji: "4️⃣"
    },
    {

        label: `league of legends`,
        value: "986065487278522478",
        emoji: "5️⃣"
    },
    {

        label: "Minecraft",
        value: "986065706581917737",
        emoji: "6️⃣"
    },
    {

        label: `Grand Theft Auto`,
        value: "986065742577426462",
        emoji: "7️⃣"
    },
    {

        label: `Mobile Legends`,
        value: "986065615494193202",
        emoji: "8️⃣"
    },
    {

        label: `Forza Horizon`,
        value: "986065763423125585",
        emoji: "9️⃣"
    },
    {

        label: "Gartic.io",
        value: "1000914562880639017",
        emoji: "1000913734069399562"
    },
    {

        label: "Codenames",
        value: "1000914549567926383",
        emoji: "1000913736602746930"
    },
    {

        label: `Among Us`,
        value: "1000914564042477678",
        emoji: "1000913739471663104"
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

    return message.channel.send({content: "**Aşağıdaki oyun rollerden kendinize oyun rolünüzü alabilirsiniz.**", components: [Row] });

}

module.exports.help = {
    name: "dropdown2",
    category: "general",
    description: "Anket"
}