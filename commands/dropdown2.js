const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*anket kurma yetkili rol */ return message.reply("Anket kurmak için yetkin yok.");

    const options = [
        {

            label: "Tabu",
            value: "1041089564309209088",
            emoji: "1041091454929469563"
        },
        {
    
            label: "Lol",
            value: "1041089601038733462",
            emoji: "1041091552010846218"
        },
        {
            label: "Valorant",
            value: "1041089605769891981",
            emoji: "1041091597393207356"
        },
        {
            label: "Terraria",
            value: "1041089703031623865",
            emoji: "1041091634848354334"
        },
        {
            label: "Rocket League",
            value: "1041089772124377208",
            emoji: "1041091685846892585"
        },
        {
            label: "PUBG",
            value: "1041089753312940133",
            emoji: "1041091732261052456"
        },
        {
            label: "Minecraft",
            value: "1041089928626458625",
            emoji: "1041091778452918323"
        },
        {
            label: "CSGO",
            value: "1041089973899759667",
            emoji: "1041091839480045628"
        },
        {
            label: "Gartic.io/phone",
            value: "1041090051762827264",
            emoji: "1041091880538079282"
        },
        {
            label: "Among us",
            value: "1041090102891384942",
            emoji: "1041091926633500813"
        },
        {
            label: "Vampir Köylü",
            value: "1041090175293472848",
            emoji: "1041091979058090094"
        },
        {
            label: "Doğruluk Cesaret",
            value: "1041090242024849478",
            emoji: "1041092040496271361"
        },
        {
            label: "Zula",
            value: "1041090299780399204",
            emoji: "1041092139473453136"
        },
        {
            label: "Gta V",
            value: "1041090347591282759",
            emoji: "1041092187322077224"
        },
        {
            label: "Town of Salem",
            value: "1041090387458138205",
            emoji: "1041092286689312849"
        }

    ];

    
    const Row = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageSelectMenu()
        .setCustomId("roles")
        .setMinValues(0)
        .setMaxValues(15)
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