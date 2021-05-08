const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name:"slap",
    description:"",

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        
        let slaps = [
            "https://media.tenor.com/images/02c9c90d08a72c54ef8018ad31dfee63/tenor.gif",
            'https://media.tenor.com/images/482b1c5415f3809d76153447ea2dedb5/tenor.gif',
            "https://media.tenor.com/images/e5351e4fc67ebdf3ed1e598ae24ef3b8/tenor.gif"
        ];

        const jej = slaps[Math.floor(Math.random() * slaps.length)];

        let slapembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} slapped ${member}`)
        .setImage(jej)
        .setColor('RED')

        message.channel.send(slapembed)
    }
}