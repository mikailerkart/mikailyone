const { Client, Intents, Collection, Interaction} = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const { REST } = require('@discordjs/rest');
const { Routes} = require('discord-api-types/v9');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});


client.commands = new Collection();
client.slashCommands = new Collection();
const slashCommands = [];

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

for(const file of commandFiles){

    const command = require(`./commands/${file}`);

    client.commands.set(command.help.name, command);
    
    console.log(`dosya ${command.help.name}.js yüklendi`);

}

const commandSlashFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith(".js"));

for(const fileSlash of commandSlashFiles){

    const commandSlash = require(`./slashCommands/${fileSlash}`);

    client.slashCommands.set(commandSlash.data.name, commandSlash);
    slashCommands.push(commandSlash.data.toJSON());

    console.log(`dosya ${commandSlash.data.name}.js yüklendi`);

}

client.once("ready", () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("Mikailyone <3", { type: "PLAYING"});

    const statusOptions = [
        "Mikailyone <3",
        "Creator: Edwins#1025"
    ]

    let counter = 0;

    let time = 1 * 60 * 1000; // 1 dakika

    const updateStatus = () => {

        client.user.setPresence({

            status: "online",
            activities: [
                {
                    name: statusOptions[counter]
                }
            ]
        });

        if(++counter >= statusOptions.length) counter = 0;

        setTimeout(updateStatus, time);

    }
    updateStatus();

    let guildId = "853318314147577906"; //sever id
    let clientId = "497853394225070091"; //bot id

    const rest = new REST({ version: '9'}).setToken(config.token);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: slashCommands },
        );

        console.log('Succesfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

   /* const guild = client.guilds.cache.get("830373478652969021") //server id

    let commands;
    
    if(guild){
        commands = guild.commands
    }else {
        commands = client.application.commands;
    }
    
    commands.create({
        name: "ping",
        description: "pong olarak geri cevap verir"

    })*/


});



client.on('interactionCreate', async interaction => {

   if (interaction.isSelectMenu()) {
    const { customId, values, member} = interaction;

    if (customId === 'roles'){
 
         const component = interaction.component;
 
         const removed = component.options.filter((option) => {
             return !values.includes(option.values)
         });
 
         for(var id of removed){
             member.roles.remove(id.value)
         }
         
         for(var id of values){
             member.roles.add(id)
         }
 
         interaction.reply({
             content: "Roller güncellendi.",
             ephemeral: true
         });
  
     }
   }else if (interaction.isCommand()) {

    const slashCommands = client.slashCommands.get(interaction.commandName);
    if(!slashCommands) return;

    try{

        await slashCommands.execute(client, interaction);

    }catch(err){
        await interaction.reply({content: "Slash komutta hata oluştu.", ephemeral: true});
    }


  /*  const {commandName, options} = interaction;

    if(commandName === 'ping') {

        interaction.reply({
            content: "pong",
            ephemeral: true
        })

    } */

   }else{
       return
   }
   
 
 });

/*
client.on("guildMemberAdd", async (member) => { // when user join server he gets a role + welcome message

    var role = member.guild.roles.cache.get("1019305166874357810") // unregister role

    if(!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get("1019296866724220971"); // welcome channel

    if (!channel) return;

    channel.send(`Sunucu'ya hoş geldin, ${member}`);

});

*/

client.on("messageCreate", async message => {
    if(message.author.bot) return;

    var prefix = config.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(command.slice(prefix.length));

    if (!commandData) return;

    var arguments = messageArray.slice(1);

    try{

        await commandData.run(client, message, arguments);

    }catch(error) {
       console.log(error);
       await message.reply("Bu komut yürütülürken bir sorun oluştu");
    }

    
});


client.login(config.token);