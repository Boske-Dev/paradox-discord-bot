const Discord = require('discord.js')
const moment = require('moment')
const ms = require('ms')

module.exports = {
    name:'mute',
    description:'tempmute a member',

    async run (client, message, args){

        if(message.member.hasPermission('MANAGE_ROLES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.channel.send('Please mention the person you want to mute')


            let role = message.guild.roles.cache.find(r => r.name === "🔇・Paradox | Muted");

            if(!role) return message.channel.send('Please make `🔇・Paradox | Muted` role and set `SEND_MESSAGES` permission to **false**')

            let time = args[1];

            if(!time) return message.channel.send(':clock10: Please provide a time')

            let reason = args.slice(2).join(" ");
            if(!reason) return message.channel.send('Please provide a reason.')


           

            member.roles.add(role);
            const tempmute = new Discord.MessageEmbed()
            .setTitle('Member Muted')
            .addField('Member:', member)
            .addField('Admin/Mod:', message.author)
            .addField('Reason:', reason)
            .addField('Time:', ms(ms(time)))
            .setColor('RED')
            .setFooter(`Paradox™|${moment().format('MMMM Do YYYY, h:mm A')}`);
            message.channel.send(tempmute)

            setTimeout( function () {
                member.roles.remove(role);
                const tempmuteunmute = new Discord.MessageEmbed()
                .addField('Member Unmuted!', `${member} has been successfully unmuted` )
                .addField('Admin/Mod:', message.author)
                .setFooter(`Paradox™|${moment().format('MMMM Do YYYY, h:mm A')}`)
                .setColor('RANDOM');
                message.channel.send(tempmuteunmute)
            }, ms(time));

        } else {
            return message.channel.send('No permissions')
        }

    }
}