module.exports.run = async (bot, message, args) => {

    var number = Math.ceil(Math.random()* 6);

    return message.channel.send(`🎲 ${number} numarayı attın`)

}

module.exports.help = {
    name: "zar",
    category: "fun",
    description: "Zar atar"
}