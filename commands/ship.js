const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name:"ship",
    description:"",

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])

        let procenti = [
            ':heart: 10%',
            ':heart: 51%',
            ':heart: 29%',
            ':heart: 18%',
            ':heart: 73%',
            ':heart: 55%',
            ':heart: 9%',
            ':heart: 21%',
            ':heart: 1%',
            ':heart: 80%',
            ':heart: 45%',
            ':heart: 32%',
            ':heart: 70%',
            ':heart: 0%',
            ':heart: 4$',
            ':heart: 11%',
        ]

        let postotak = procenti[Math.floor(Math.random() * procenti.length - 1)];

        const ship_embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}\n ${postotak}\n ${member}`)
        .setColor('RED')

        message.channel.send(ship_embed)

    }
}