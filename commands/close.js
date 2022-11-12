const discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const categoryID = "1041017788346683482"; // ticket category

    if(!message.member.roles.cache.has('853553757261266954')) /*close yetkili rol */ return message.reply("ticket kapatmak için yetkin yok.");

    if (message.channel.parentId == categoryID) {

        message.channel.delete();

        var embedTicket = new discord.MessageEmbed()
            .setTitle("Ticket, " + message.channel.name)
            .setDescription("Ticket **tamamlandı** olarak işaretlendi.")
            .setFooter("Ticket kapandı.")
            .setAuthor(`${message.author.tag}`)

        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name == "ticket-log") // ticket-log chat
        if(!ticketChannel) return message.reply("Kanal mevcut değil.")
        
        return ticketChannel.send({ embeds: [embedTicket] });
    
    } else {
        message.channel.send("Lütfen bu komutu bir ticket kanalında yapın.")
    }
}

module.exports.help = {
    name: "close",
    category: "general",
    description: "ticket kapatır"
}