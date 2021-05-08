const Discord = require('discord.js');//importuje discord modul
const randomPuppy = require('random-puppy');//improtuje random puppy modul
const moment = require('moment')//importujemo moment modul


module.exports = {//pokrecemo modul
    name:"meme",//trigerujemo komandu
    description:"",

    async run(client, message, args){
        const subReddits = ["meme", "me_irl", "funny"];//stavljamo imena subredita sa kojih zelimo da salje slike i memove
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];//omogucava slanje random slika sa tih subredita
        const img = await randomPuppy(random);//salje tu random sliku
    
        const embed = new Discord.MessageEmbed()//pravi discord embed
        .setImage(img)//postavlja sliku embeda koja se salje
        .setTitle(`From /r/${random}`)//naslov embeda koji govori s kog subredita dolazi meme
        .setURL(`http://reddit.com/${random}`)//postavlja url a ovo random omogucava odabiranje random subredita i slike
        .setColor('RANDOM')//postavlja da svaki put bude drugacija bota
        .setFooter(`Requested by: ${message.author.username} | ${moment().format('MMMM Do YYYY, h:mm A')}`, message.author.displayAvatarURL())//ova linija koda nam omogucava da vidimo ko je trazio meme, kad je trazio, itd...
    
        message.channel.send(embed);//salje poruku u kanal gde je napisana komanda
    }
}

//pogledaj ti index sad, bot.js
// tu ti se nalazi help, command handler koji omogucava da se sve ove ostale komande pokrecu preko tog bot.js fajla