module.exports.run = async (bot, message, args) => {

    return message.channel.send("merhaba");

}

module.exports.help = {
    name: "merhaba",
    category: "general",
    description: "Deneme komut"
}