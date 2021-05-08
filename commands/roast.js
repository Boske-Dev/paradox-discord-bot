const Discord = require('discord.js')

module.exports = {
    name:"roast",
    description:"",

    async run(client, message, args){
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0])) || message.author
        if(!member) return message.channel.send('Nemam koga da roastujem...')
        let roasts = [
            "Toliko si ružan da ti ni windows ne kaže welcome",
            'Baterija mog telefona traje duže od tvojih veza',
            'Šteta je što ne možeš photoshopirati svoju osobnost',
            'Kad se karma vrati da te udari u lice, želim biti tamo u slučaju da joj zatreba pomoć',
            'Imaš više lica nego Mount Rushmore',
            'Auuu, tako je slatko kad pokušavaš razgovarati o stvarima koje ne razumiješ',
            'Imam štikle više od tvojih standarda',
            'Tvoje je lice dobro, ali morat ćeš staviti torbu preko te osobnosti',
            'Tvoja mama kad prodje kraj telke prodje cijela mala navjesta',
            'Da krava nosi gaće, ti pičke u životu ne bi vidio'
        ];

        let odgovor = roasts[Math.floor(Math.random() * roasts.length - 1)];

        message.channel.send(`${member}, ${odgovor}`)
    }
}