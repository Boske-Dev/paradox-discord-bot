const discord = require('discord.js')
const distube = require('distube')

module.exports = {
    name:"play",

    async run(client, message, args){

        const music = args.join(" ")
        client.distube.play(message, music)
    }
}
