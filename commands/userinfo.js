const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
    var member = message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
    if (!member) member = message.member;
    
    var roles = member.roles.cache.size - 1;
    var roleNames = member.roles.cache.map(r => r).join(" ").replace("@everyone", "");
    if (roles == 0) roleNames = "Rolsüz";

    var botEmbed = new discord.MessageEmbed()
        .setColor("#0099FF")
        .setThumbnail(member.user.displayAvatarURL({ size: 4096 }))
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ size: 4096 }))
        .setTitle(`${member.user.tag}`)
        .addFields(
            {name: "ID:", value: `${member.user.id}`, inline: true},
            {name: "Joined at:", value: `${moment(member.joinedAt).format("LL")}`},
            {name: "Created at:", value: `${moment(member.user.createdAt).format("LL")}`},
            {name: `Roles [${roles}]`, value: `${roleNames}`}

            );

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "userinfo",
    category: "info",
    description: "Kişinin bilgilerini açar"
    
}