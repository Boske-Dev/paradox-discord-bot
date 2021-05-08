const canvacord = require('canvacord')
const Discord = require('discord.js')
const Levels = require('discord-xp')

module.exports = {
    name:"rank",

    async run(client, message, args){

        const target =  message.author 
        
        const user = await Levels.fetch(target.id, message.guild.id);

        const neededXp = Levels.xpFor(parseInt(user.level) + 1)

        if(!user) return message.channel.send('You dont have xp, try to send some messages.')

        const rank = new canvacord.Rank()
        .setAvatar(message.author.displayAvatarURL({dynamic:false, format:'png'}))
        .setCurrentXP(user.xp)
        .setRequiredXP(neededXp)
        .setLevel(user.level)
        .setBackground('IMAGE', 'https://prod-content-care-community-cdn.sprinklr.com/579ad3b6-f7b1-4c16-a256-99ed28ff7b58/Gradient2028lighter29_inline-7a38e6a2-486f-4ec5-876b-fc3373fe70ac-1638739960.jpg1339522396')
        .setProgressBar('GREEN', 'COLOR')
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator)
    rank.build()
    .then(data => {
        const atacment = new Discord.MessageAttachment(data, 'rank.png')
        message.channel.send(atacment)
    })
    }
}