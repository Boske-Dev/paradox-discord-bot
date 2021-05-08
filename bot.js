const Discord = require('discord.js');
const client = new Discord.Client();
const { readdirSync } = require('fs');
const { join } = require('path');
const mongoose = require('mongoose')
const moment = require('moment');
const { type } = require('os'); 
const Levels = require('discord-xp')
const DisTube = require('distube')

client.commands= new Discord.Collection();

Levels.setURL('mongodb+srv://boskedev:boske123@cluster0.236pt.mongodb.net/test')

mongoose.connect('mongodb+srv://boskedev:boske123@cluster0.236pt.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.set('useFindAndModify', false);

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))

client.on("error", console.error);

client.on('ready', () => {
    console.log('Bot preman za upotrebu!');
    client.user.setActivity(`p!help`, {type:'WATCHING'})
});

let stats = {
    serverID: '<ID>',
    total: "<ID>",
    member: "<ID>",
    bots: "<ID>"
}


client.on('message', async message =>{
    if(message.content === 'p!help'){
        const helpembed1 = new Discord.MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setColor('GREEN')
        .addFields(
            { name: 'Welcome to Paradox Service (BETA VERSION)', value: 'Type p!botinfo to see bot informations :)' },
            { name: 'MODERATION', value: 'Type `p!moderation` to get list of moderation commands', inline: true },
            { name: 'WARNING SYSTEM(BETA)', value: 'Type `p!warning` to get list of warning commands', inline: true },
            { name: 'LEVELING(BETA)', value: 'Type `p!leveling` to get list of leveling commands', inline: true },
            { name: 'FUN', value: 'Type `p!fun` to get list of fun commands', inline: true },
            { name: 'LOVE', value: 'Type `p!love` to get list of love commands', inline: true },
            { name: 'CONFIGURATION', value: 'Comming soon....', inline: true },
            { name: 'REPORT', value: 'Type `p!report [member] [reason]` to report member', inline: true },
        )
        .setImage(`https://media.discordapp.net/attachments/790614683957854238/793900346871119882/paradox_gif.gif`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username} | `)
        message.channel.send(helpembed1)
    }
})


client.on('message', async message =>{
    if(message.content === 'p!moderation'){
        const moderationhelp = new Discord.MessageEmbed()
        .setTitle('MODERATION COMMANDS')
        .setDescription('**BAN** - type `p!ban [member] [reason]` to ban member\n **KICK** - type `p!kick [member] [reason]` to kick member\n **MUTE** -type `p!mute [member] [time] [reason]` to mute member\n **UNMUTE** -type `p!unmute [member] [reason]` to unmute member')
        .setColor('GREEN')
        .setImage(`https://media.discordapp.net/attachments/790614683957854238/793900346871119882/paradox_gif.gif`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username} | `)
        message.channel.send(moderationhelp)
    }
})

client.on('message', async message =>{
    if(message.content === 'p!warning'){
        const warninghelp = new Discord.MessageEmbed()
        .setTitle('WARNING COMMANDS (BETA)')
        .setImage(`https://media.discordapp.net/attachments/790614683957854238/793900346871119882/paradox_gif.gif`)
        .setDescription('**WARN** -type `p!warn [member] [reason]` to warn member\n **WARNS** -comming soon... \n **CLEARWARNS** -comming soon...')
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`)

        message.channel.send(warninghelp)
    }
})
client.on('message', async message =>{
    if(message.content === 'p!leveling'){
        const levelinghelp = new Discord.MessageEmbed()
        .setTitle('LEVELING COMMANDS (BETA)')
        .setImage(`https://media.discordapp.net/attachments/790614683957854238/793900346871119882/paradox_gif.gif`)
        .setDescription('**RANK** -type `p!rank` to see you rank\n **LEADERBOARD** -comming soon... \n **ADDXP** -comming soon...')
        .setTimestamp()
        .setColor('GREEN')
        .setFooter(`Requested by ${message.author.username}`)

        message.channel.send(levelinghelp)
    }
})
client.on('message', async message =>{
    if(message.content === 'p!fun'){
        const funhelp = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setImage(`https://media.discordapp.net/attachments/790614683957854238/793900346871119882/paradox_gif.gif`)
        .setTitle('FUN COMMANDS')
        .setDescription('**8BALL** -type `p!8ball [question]` to ask bot a question\n **GAY** -type `p!gay [member]` to get how much you are gay\n **MEME** -type `p!meme` to get meme from reddit\n **KILL** -type `p!kill [member]` to kill a member\n **ROAST** -type `p!roast [member]` to roast member\n **PP** -type `p!pp [member]` to see member pp')
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`)   
        
        message.channel.send(funhelp)
    }
})

client.on('message', async message =>{
    if(message.content === 'p!love'){
        const lovehelp = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('LOVE COMMANDS')
        .setDescription('**KISS** -type `p!kiss [member]` to kiss a member\n **SHIP** -type `p!ship [member]` to ship you with another member\n **HUG** -type `p!hug [member]` to hug a member\n **SLAP** -type `p!slap [member]` to slap a member')
        .setImage(`https://media.discordapp.net/attachments/790614683957854238/793900346871119882/paradox_gif.gif`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`)

        message.channel.send(lovehelp)
    }
})
client.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;


    const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`${message.author}leveled up to ${user.level}! Keep it going!`);
    }
      
    //Leaderboard
    if(message.content === "p!leaderboard" || message.content === "p!lb") {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

        const leaderboard = Levels.computeLeaderboard(client, rawLeaderboard); 

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

        message.channel.send(`${lb.join("\n\n")}}`)
    }
})

client.on("message", async message => {
    const prefixfile = require('./prefix')
    const prefix = (prefixfile.prefix)
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if(!client.commands.has(command)) return
        try {
            client.commands.get(command).run(client, message, args);
        } catch (error){
            console.error(error);
        }
    }
})



client.on("message", async message =>{
    if(message.content ===`p!botinfo`){
        const botinfo = new Discord.MessageEmbed()
        .setTitle(':robot: BOT INFORMATIONS')
        .addField('Bot Name:', 'Paradox')
        .addField('Bot Developer:', 'Boske')
        .addField('Prefix', '`p!`')
        .addField('Bot Help Command:', 'b!help')
        .addField('Bot Permissions', 'Administrator')
        .addField('Bot Created At:','09.01.2021.')
        .addField('Support Server:','https://discord.gg/HXTG4355QE')
        .setColor('RED')
        .setFooter(`Requested by: ${message.author.username} | ${moment().format('MMMM Do YYYY, h:mm A')}`, message.author.displayAvatarURL())

        message.channel.send(botinfo)
    }
})

client.login('NzgyMjI0MjcwODY0MTU0NjI1.X8JFHw.ktFWEEj6Q8dw47tUir7WEq88GWM');