const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
    const target = message.mentions.users.first() || message.author;


    let createdAt = moment(message.guild.createdAt);
    let dateFormated = createdAt.format('LL')+'( '+ createdAt.fromNow() +' )';

    var botEmbed = new discord.MessageEmbed()
        .setColor("#0099FF")
        .setThumbnail(message.author.displayAvatarURL({ size: 4096 }))
        .setTitle(`${message.guild.name}`)
        .addFields(
            {name: "ID:", value: `${message.guild.id}`},
            {name: "Owner:", value: `<@${message.guild.ownerId}>`, inline: true},
            {name: "Members:", value: message.guild.memberCount.toString()},
            {name: "Bots", value: `${message.guild.members.cache.filter(member => member.user.bot).size}`},
            {name: "Created at:", value: dateFormated, inline: false},
            {name: "Joined at:", value: message.member.joinedAt.toString()},
            {name: "Categories:", value: `${message.guild.channels.cache.filter(c => c.type === 'GUILD_CATEGORY').size}`, inline: true},
            {name: "Text channels:", value: `${message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size}`, inline: true},
            {name: "Voice channels:", value: `${message.guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size}`, inline: true},
            {name: "Roles", value: `${message.guild.roles.cache.size}`}

            );

    return message.channel.send({ embeds: [botEmbed] });

}

module.exports.help = {
    name: "serverinfo",
    category: "info",
    description: "Sunucu nun bilgilerini açar"
}