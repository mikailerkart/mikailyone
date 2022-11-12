const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const categoryID = "1041017788346683482";

    if(!message.member.roles.cache.has('853553757261266954')) /*remove yetkili rol */ return message.reply("ticket'e üye çıkartmak için yetkin yok.");

    if(message.channel.parentId !== categoryID) return message.reply("Bu bir ticket kanalı değil");

    if (!args[0]) return message.reply("Kullanıcı belirtilmemiş");

    var removeUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.cache.get(args[0]).id);

    if (!removeUser) return message.reply("Kullanıcı bulanamıyor.")

    var embed = new discord.MessageEmbed()
        .setTitle("User removed")
        .setColor("RANDOM")
        .setTimestamp()
        .addField("Removed person:", `${removeUser}`, false)
        .addField("Person removed by:", message.author.username);

    message.channel.permissionOverwrites.edit(removeUser, {
        SEND_MESSAGES: false,
        CREATE_INSTANT_INVITE: false,
        READ_MESSAGE_HISTORY: false,
        ATTACH_FILES: false,
        ADD_REACTIONS: false,
        CONNECT: false,
        VIEW_CHANNEL: false
    });

    message.channel.send({embeds: [embed] }).then(msg =>{
        setTimeout(() => msg.delete(), 10000 )
    })

}


module.exports.help = {
    name: "remove",
    category: "general",
    description: "Ticket'e üye çıkarır"
}