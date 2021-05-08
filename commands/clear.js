module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(':no_entry_sign: Nemate permisiju za koristenje komande!');
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const amount = args.join(" ");

        if(!amount) return message.reply('Please input a vaild amount of messages.')

        if(amount > 1000) return message.reply(`You can't delete more that 1k messages.`)

        if(amount < 1) return message.reply(`Please delete 1 or more messages`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send(`Successfully deleted ${amount} messages.`)
    message.delete()

    }
}