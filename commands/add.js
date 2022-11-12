const discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const categoryID = "1041017788346683482"; // ticket category

    if(!message.member.roles.cache.has('853553757261266954')) /*add yetkili rol */ return message.reply("ticket'e üye eklemek için yetkin yok.");

    if(message.channel.parentId !== categoryID) return message.reply("Bu bir ticket kanalı değil.");

    if (!args[0]) return message.reply("Kullanıcı belirtilmemiş.");

    var addUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.cache.get(args[0]).id);

    if (!addUser) return message.reply("Kullanıcı bulanamıyor.")

    var embed = new discord.MessageEmbed()
        .setTitle("User added")
        .setColor("RANDOM")
        .setTimestamp()
        .addField("Added person:", `${addUser}`, false)
        .addField("Person added by:", message.author.username);

    message.channel.permissionOverwrites.edit(addUser, {
        SEND_MESSAGES: true,
        CREATE_INSTANT_INVITE: false,
        READ_MESSAGE_HISTORY: true,
        ATTACH_FILES: true,
        ADD_REACTIONS: true,
        CONNECT: true,
        VIEW_CHANNEL: true
    });

    message.channel.send({embeds: [embed] }).then(msg =>{
        setTimeout(() => msg.delete(), 10000 )
    })

}


module.exports.help = {
    name: "add",
    category: "general",
    description: "Ticket'e üye ekler"
}