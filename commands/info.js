const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setAuthor("Mikailyone")
        .setColor("#0099FF")
        .addFields(
            {name: "Version", value: "1.0.0"},
            {name: "Creator", value: "Edwins#1025"},
            {name: "Mikailyone", value: "https://discord.gg/uwcxG9fx8d"},
            {name: "Underworld", value: "https://discord.gg/SNXdvsstGR"}
        )
        .setTimestamp();

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "info",
    category: "info",
    description: "Bot bilgilerini açar"
}