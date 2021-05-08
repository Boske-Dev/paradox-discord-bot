const Discord = require('discord.js')

module.exports = {
    name:"8ball",
    description:"Daje odgovore na pitanja",

    async run(client, message, args){
        let pitanje = args.join(" ")
        let odgovori = [
            'Yes',
            'No',
            'Maybe',
            'Of course',
            'Are you crazy?',
            'Are you sure?',
        ];
        let odgovor = odgovori[Math.floor(Math.random() * odgovori.length - 1)];
        const ball = new Discord.MessageEmbed()
        .addField('Question', pitanje)
        .addField('Answer', odgovor)
        .setColor('RANDOM')
        
        message.channel.send(ball)

    }
}