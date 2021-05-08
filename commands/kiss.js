const Discord = require('discord.js');
const moment = require('moment')


module.exports = {
    name:"kiss",
    description:"",

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author} je poljubio ${member}`)
        .setImage('https://tenor.com/view/kiss-love-gif-9097946')

        message.channel.send(embed)
    }
}