const discord = require('discord.js');



module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.has('853553757261266954')) /*ban yetkili rol */ return message.reply("Ban atmak için yetkin yok.")

    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("Ban atma yetkim yok, bana yetki ver önce.");

    if (!args[0]) return message.reply("Banlanacak kişiyi etiket atman gerekiyor.");

    if(!args[1]) return message.reply("Bir sebep belirtmen gerek.");

    var banUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id)

    if(!banUser) return message.reply("Kullanici bulunamadı.");

    if(banUser.roles.cache.has('938796175358845018')) return message.reply('Bu kişiyi atamiyorum.')

    var reason = args.slice(1).join(" ");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Lütfen 30 saniye içinde yanıt verin.")
        .setDescription(`${banUser} bu kişiyi ban atmak istiyor musun?`)

    var embed = new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`${banUser} ban atıldı. (${banUser.id})
        ${message.author} tarafindan ban atıldı.
        **Sebep:** ${reason}`)
        .setFooter(message.member.displayName)
        .setTimestamp();

        message.channel.send({ embeds: [embedPrompt] }).then(async msg => {
 
            let authorID = message.author.id;
            let time = 30;
            let reactions = ["✅", "❌"];
         
            // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
            time *= 1000;
         
            // We gaan iedere reactie meegegeven onder de reactie en deze daar plaatsen.
            for (const reaction of reactions) {
                await msg.react(reaction);
            }
         
            // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
            // dan kunnen we een bericht terug sturen.
            const filter = (reaction, user) => {
                return reactions.includes(reaction.emoji.name) && user.id === authorID;
            };
         
            // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
            // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
            msg.awaitReactions({ filter, max: 1, time: time }).then(collected => {
                var emojiDetails = collected.first();
                
                if(emojiDetails.emoji.name === "✅") {

                    msg.delete();

                    banUser.ban({reason: reason}).catch(err => {
                        if (err) return message.channel.send("Bir şeyler yanlış gitti.")
                    });
                    
                    message.channel.send({ embeds: [embed] })

                }else if (emojiDetails.emoji.name === "❌" ){

                    msg.delete();

                    message.channel.send("Ban iptal edildi.").then(msg => {
                        message.delete();
                        setTimeout(() => msg.delete(), 5000)
                    })

                }
                
            });
        });
}

module.exports.help = {
    name: "ban",
    category: "general",
    description: "Ban atmak"
    }