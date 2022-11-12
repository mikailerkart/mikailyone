const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require("node-fetch");
const discord = require("discord.js")

module.exports = {

    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('meme atar'),
        async execute(client, interaction){

            fetch(" https://www.reddit.com/r/memes/random/.json").then(resp =>
                resp.json()).then(respData => {

                    var permaLink = respData[0].data.children[0].data.permalink;
                    var memeUrl = `https://www.reddit.com${permaLink}`;
                    var memePhoto = respData[0].data.children[0].data.url;
                    var memeTitle = respData[0].data.children[0].data.title;

                    var embed = new discord.MessageEmbed()
                        .setTitle(`${memeTitle}`)
                        .setURL(`${memeUrl}`)
                        .setImage(`${memePhoto}`)
                        .setColor("RANDOM");
                    interaction.reply({ embeds: [embed]});

                }).catch("error", (err) => {
                    console.log("Bir hata oluştu" + err.message);
                });

        }

}