const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name:'ctest',
    description:'',

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.author    
        let test = [
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',

            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            'positive',
            'negative',
            
        ];
        
        let odgovor = test[Math.floor(Math.random() * test.length -1)];

        const embed = new Discord.MessageEmbed()
        .setDescription(`${member} je ${odgovor} na **COVID-19**`)
        .setColor('RANDOM')

        message.channel.send(embed)

    }
}