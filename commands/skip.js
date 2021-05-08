const Discord = require('discord.js')
const distube = require('distube')

module.exports = {
    name:"skip",

    async run(client, message, args){
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);
    
        if(queue) {
            client.distube.skip(message)
    
            const skipembed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription('SONG SKIPPED')

            message.channel.send(skipembed)
        } else if (!queue) {
            return
        };
    }
    
}