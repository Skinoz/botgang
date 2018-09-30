const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");



bot.on('ready', () =>{
    bot.user.setPresence({ game: {name: 'Prépares les kalash', type: 0}});
    console.log("bot Pret");
});

bot.login('NDkxMzA1NTQ0MjM0MzAzNDk4.DoVujA.RKRuydj-8PZk5jhfo5zjlsyItSE')


bot.on('message', message => {
    // INFOS
    if(message.content === prefix + "infos") {
        var embed = new Discord.RichEmbed()
        .setDescription("INFOS DU DISCORD")
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le discord", message.guild.memberCount)
        .setColor("0x00FF00")
    message.channel.sendEmbed(embed)
    console.log("Message Infos")    
    }

    // SONDAGE 
    if (message.content.startsWith(prefix + "sondage")) {
        if(message.member.roles.find("name", "Protecteur du Quartier")){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
            .setDescription("SONDAGE")
            .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
            .setTimestamp()
            .setColor("0x00FF00")
            console.log("Message Infos")
        message.guild.channels.find("name", "🚩sondage-du-jour🚩").sendEmbed(embed)
        .then(function (message) {
            message.react ("✅")
            message.react ("❌")
        }).catch(function() {
        });
        }else{
            return message.reply("Tu n'as pas la permission.")                                                
}}})

// Message 
bot.on('message', message => {
    if (message.content === "bonjour"){
        message.reply("Wsh ça va ?");
        console.log('Message bonjours');
    }

    if (message.content === "ça va"){
        message.reply("Niquel 👍 tout le GANG te souhaite une bonne journée");
        console.log('Message çava');
}});

// Aléatoire
function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(5);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}

bot.on('message', message => {
    if (message.content === "ça va et toi"){
    random()
    if (randnum ==1){
        message.reply("Merci je vais bien :grinning:");
        console.log('Aléatoire 1');
    }
    if (randnum ==2){
        message.reply("Sa ne va pas fort en ce moment :pensive:");
        console.log('Aléatoire 2');
    }
    if (randnum ==3){
        message.reply("J'ai la rage :rage:");
        console.log('Aléatoire 3');
    }
    if (randnum ==4){
        message.reply("Je suis sans opinion :rolling_eyes:");
        console.log('Aléatoire 4');
    }
    if (randnum ==5){
        message.reply("Moi ça va merci :stuck_out_tongue_closed_eyes:");
        console.log('Aléatoire 5');
    }
}})


// https://discord.gg/Srk7gDg
bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🏁bienvenue🏁").send(`Salut ${member}, Bienvenue dans le GANG`, {
        file: "http://image.noelshack.com/fichiers/2018/39/5/1538157987-gang.png"})      
})
