const Discord = require('discord.js')

module.exports = {
    name:"eprofile",
    description:'',

    async run(client, message, args){
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])) || message.author

        message.channel.send('Zao nam je, komanda trenutno nije dostupna.')
    }
}