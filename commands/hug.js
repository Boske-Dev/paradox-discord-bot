const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name:"hug",
    description:"",

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])

        let procenti = [
            'https://media1.tenor.com/images/c4f200fb7a7ae5243c3af36c6ea64f40/tenor.gif?itemid=10004544',
            'https://media1.tenor.com/images/0ba7e0d8cd4ea0e6043119030f2b051f/tenor.gif?itemid=17968812',
            'https://media1.tenor.com/images/11b756289eec236b3cd8522986bc23dd/tenor.gif?itemid=10592083',
            'https://media1.tenor.com/images/fc736b55fae831da4936180364c67f53/tenor.gif?itemid=13804763',
        ]

        let postotak = procenti[Math.floor(Math.random() * procenti.length - 1)];

        const ship_embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}\n gave a hug to ${member}`)
        .setimate(postotak)
        .setColor('RED')

        message.channel.send(ship_embed)

    }
}