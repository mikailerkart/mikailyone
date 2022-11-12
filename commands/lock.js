module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*lock yetkili rol */ return message.reply("Lock atmak için yetkin yok.")

    await message.channel.permissionOverwrites.set([

        {
            id: message.guild.roles.cache.find(r => r.name === "@everyone").id,
            deny: ["SEND_MESSAGES"]
        }

    ]);

    return message.channel.send("Kanal kilitlendi.");
}

module.exports.help = {
    name: "lock",
    category: "general",
    description: "Kanali kilitleme"
    }