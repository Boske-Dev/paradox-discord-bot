const Discord = require('discord.js')

module.exports = {
    name:"kill",
    description:"",

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.author    



        message.channel.send(`${message.author} killed ${member}`)   

    }
}