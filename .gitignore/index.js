const Discord = require("discord.js");

var bot = new Discord.Client();
var prefix = ("!");



bot.on('ready', () =>{
    bot.user.setPresence({ game: {name: 'GANG / Marché Noir Pala', type: 0}});
    console.log("bot Pret");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    // INFOS
    if(message.content === prefix + "infos") {
        message.delete (1000);
        var embed = new Discord.RichEmbed()
        .setDescription("INFOS DU DISCORD")
        .addField("Nom du Discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateurs sur le discord", message.guild.memberCount)
        .addField("Envoyée par" ,message.author)
        .setColor("0x00FF00")
    message.channel.send(embed)
    console.log("Message Infos")    
    }

    // SONDAGE 
    if (message.content.startsWith(prefix + "sondage")) {
        if(message.member.roles.find("name", "📢Sondage📢")){
            message.delete (1000);
            let args = message.content.split(" ").slice(1);
            let lemessage = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("SONDAGE")
                .addField(lemessage, "Répondre avec :white_check_mark: ou :x:")
                .setTimestamp()
                .setColor("0x00FF00")
                console.log("Message Sondage")
            message.channel.send(embed)
            .then(function (message) {
                message.react ("✅")
                message.react ("❌")
        }).catch(function() {
        });
        }else{
            return message.reply("Tu n'as pas les permissions / Crée le role 📢Sondage📢 pour accéder a ce role") 

                    
}}})

// Message 
bot.on('message', message => {
    if (message.content === "bonjour"){
        message.delete (1000);
        message.reply("Wsh ça va ?");
        console.log('Message bonjours');
    }

    if (message.content === "ça va"){
        message.delete (1000);
        message.reply("Niquel 👍 tout le GANG te souhaite une bonne journée");
        console.log('Message çava');
    }
    
    if (message.content === "MESSAGE"){
            var channel = bot.channels.find('name','NOM DU CHANNEL');
            let role = message.guild.roles.find('name', 'NOM DU ROLE') 
            message.delete (1000);       
            channel.send("RÉPONSE");
            message.member.addRole(role)
    }

    
})


// Aléatoire
function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(5);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}

bot.on('message', message => {
    if (message.content === "ça va et toi"){
        message.delete (1000);
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
    let channel = member.guild.channels.find('name','🏁bienvenue🏁');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor ('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: /',`Pseudo: ${member}`)
        .addField(':microphone2: /',`Bienvenue dans le GANG ${member}`)
        .addField(':triangular_flag_on_post: /',`Merci de lire le règlement pour accéder au Discord`)
        channel.sendEmbed(embed);    
});

bot.on('message', message => {
    if (message.content.startsWith( '/' + "Trade")) {
        if(message.member.roles.find("name", "💰Trader💰")){
            message.delete (1000);
            let args = message.content.split(" ").slice(1);
            let lemessage = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Nouveau Trade")
                .addField(lemessage, " ✅: Intéressé / ❌: Pas Intéressé")
                .addField("Envoyée par" ,message.author)
                .setColor("0x00FF00")
                console.log("Message Trade")
            message.guild.channels.find("name", "💰marché💰").sendEmbed(embed)
            .then(function (message) {
                message.react ("✅")
                message.react ("❌")
        }).catch(function() {
        });
        }else{
            message.delete (1000);
            return message.author.send("Tu n'as pas accès.");

}}});

bot.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === "✅")
        user.createDM().then(channel => {
        return channel.send("Envoye un DM à l'auteur du message pour plus d'information");
    }).catch(console.error);

});
