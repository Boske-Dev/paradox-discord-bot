const Discord = require('discord.js')

module.exports = {
    name:"simp",

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0]) || message.author    
        let test = [
            '15%',
            '100%',
            '10%',
            '20%',
            '31%',
            '50%',
            '89%',
            '99%',
            '75%',
            '56%',
            '45%',
            '13%',
            '42%',
            '80%',
            '83%',
        ];
        
        let odgovor = test[Math.floor(Math.random() * test.length -1)];

        const embed = new Discord.MessageEmbed()
        .setDescription(`${member}'s simprate: ${odgovor}`)
        .setColor('RANDOM')

        message.channel.send(embed)

    }
}