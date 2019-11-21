const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjQ2NzU1NTg3Nzk5MTIxOTQw.XdWaPQ.ltxWGKiKBSc9vO5KRNh9O5uVPIA";

const prefix = ".";
const fs = require("fs");

bot.commands = new Discord.Collection();

bot.login(token);

fs.readdir("C:\Users\Luke PC\Desktop\Bot\cmds", (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop === "js");
    if (jsfiles.length <= 0) {
        console.log("no commands to load");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`C:\Users\Luke PC\Desktop\Bot\cmds${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', () =>{
    console.log("Bot Logged In!");
    console.log(bot.commands);
} )

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.message.content.split(/\s+/g);
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);
});


//client.on('message', msg => {
//    if (msg.content.toLowerCase() === 'pog')
//        msg.channel.send('POG!');
//    else if (msg.content === 'nigger') {
//        msg.delete();
//        msg.channel.send('no no no, not that word')
//    }
//    else if (msg.content === 'nigga') {
//        msg.delete();
//        msg.channel.send('no no no, not that word')
//    }
//    else if (msg.content === 'niger') {
//        msg.delete();
//        msg.channel.send('no no no, not that word')
//    }
//    else if (msg.content === 'niga') {
//        msg.delete();
//        msg.channel.send('no no no, not that word')
//    }
//    else if (msg.content === 'n1gger') {
//        msg.delete();
//        msg.channel.send('no no no, not that word')
//    }
//    else if (msg.content === 'n1gga') {
//        msg.delete();
//        msg.channel.send('no no no, not that word')
//    }
//    else if (msg.content.toLowerCase() === 'fuck that guy')
//        msg.channel.send('Yea fuck that guy am I right!');
//    else if (msg.content.toLowerCase() === 'bruh')
//        msg.channel.send('BRUH BRUH BRUH');
//    else if (msg.content.toLowerCase() === '?10man')
//        msg.channel.send('@everyone 10man happening message if you want in.');
//    else if (msg.)
//        msg.channel.send('BOT');
//});


function checkCommand(message, commandName) {
    return message.content.toLowerCase().startsWith("?" + commandName);
}