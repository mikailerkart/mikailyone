module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*clear yetkili rol */ return message.reply("Clear atmak için yetkin yok.")

    if(!args[0]) return message.reply("Ne kadar mesaj silmek istediğini sayı ile belirtmen lazim.")

    if(parseInt(args[0])){

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if(parseInt(args[0]) == 1) {
                message.channel.send("1 mesaj silindi.").then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 3000);
                });
            } else {
                message.channel.send(`${parseInt(args[0])} mesaj silindi.`).then(msg => {
                    setTimeout(() => {
                        msg.delete();
                    }, 3000);
                });

            }

        }).catch(err => {
            return message.reply("0'dan büyük bir sayı girin");
        });

    }else {
        return message.reply("Bir sayı yazman gerek.")
    }
}

module.exports.help = {
    name: "clear",
    category: "general",
    description: "Toplu bir şekilde mesaj silme"
    }