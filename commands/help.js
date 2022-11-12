const config = require("../config.json");

module.exports.run = async (client, message, args) => {

    try {

        var prefix = config.prefix;

        var respone = "**__Bot commands__**\r\n\n";
        var general = "**__Mod commands__**\r\n";
        var fun = "**__Fun commands__**\r\n";
        var info = "\n**__Bilgi__**\r\n";

        client.commands.forEach(command => {
            
            switch (command.help.category){

                case "general": 
                general += `${prefix}${command.help.name} - ${command.help.description}\r\n`;
                    break;

                case "fun": 
                    info += `${prefix}${command.help.name} - ${command.help.description} \r\n`;
                    break;

                case "info": 
                info += `${prefix}${command.help.name} - ${command.help.description} \r\n`;
                    break;
            }

        });

        respone += general += fun + info;

        message.author.send(respone).then(() => {
            return message.reply("Tüm komutlari dmden bulabilirsin.");
        }).catch(() => {
            return message.reply("Dm kutunuz kapali, bu nedenle bir mesaj alamadiniz.");
        })

    }catch (error) {
        message.reply(`Bir şeyler yanliş gitti. hata: ${error}`);
    }

}

module.exports.help = {
    name: "help",
    category: "info",
    description: "Şu an kullandigin dm mesajini gönderir."
}