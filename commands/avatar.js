const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    var member = message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
    if (!member) member = message.member;

    var botEmbed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`${member.user.tag}\'s Avatar`)
        .setImage(member.user.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))

    return message.reply({ embeds: [botEmbed] });


}

module.exports.help = {
    name: "avatar",
    category: "general",
    description: "avatar açar"
}