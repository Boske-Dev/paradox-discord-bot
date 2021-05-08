const Discord = require('discord.js');//importuje discord modul
const moment = require('moment');//importuje moment modul

module.exports = {
    name:"report",
    description:"",

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])

        const rlogs = member.guild.channels.cache.find(ch => ch.name === '「⛔」ʀᴇᴘᴏʀᴛᴏᴠɪ');

        if(!rlogs) return message.channel.send('Please create `「⛔」ʀᴇᴘᴏʀᴛᴏᴠɪ` channel.')

        const razlog = args.slice(1).join(" ");

        message.channel.send(`${member} has been successfully reported to server staff team.`)

        const reportembed = new Discord.MessageEmbed()
        .setTitle('Member has been successfully reported')
        .addField('Reported Member:', member)
        .addField('Reporter', message.author)
        .addField('Report Reason:', razlog)
        .addField('Time', moment().format('MMMM Do YYYY, h:mm A'))
        .setFooter('Paradox™')
        .setColor('RED')

        rlogs.send(reportembed)
    }
}