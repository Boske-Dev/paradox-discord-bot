const Discord = require('discord.js')
const tacnarjesenja = require('../rjesenje.json')

module.exports = {
    name:"answer",
    description:"",

    async run(client, message, args){
        const rjesenje = args.slice(0).join(' ')

        if(!rjesenje) return message.channel.send('Molimo vas unesite vase rjesenje')
        if(rjesenje === tacnarjesenja.r1) return message.channel.send('Uneseno rjesenje je tacno.')
        if(rjesenje != 'test')return message.channel.send('Rijesenje nije tacno, pokusajte ponovno');
    }
}