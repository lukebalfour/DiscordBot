const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NjQ2NzU1NTg3Nzk5MTIxOTQw.XdayQw.nZJosw8pryggtbL_7En6jDjZ2sA";

const prefix = ".";
const fs = require("fs");

bot.commands = new Discord.Collection();

bot.login(token);

//bot connecting
bot.on('ready', () => {
    bot.user.setActivity('twitch.tv/look_', { type: 'WATCHING' });
    console.log("Bot Logged In!");
});


bot.on('message', msg => {
    //normal text responses
    if (msg.content.toLowerCase() === 'pog') {
        msg.channel.send('POG!');
    }
    else if (msg.content.toLowerCase() === 'nigger') {
        msg.delete();
        msg.channel.send('no no no, not that word')
    }
    else if (msg.content.toLowerCase() === 'nigga') {
        msg.delete();
        msg.channel.send('no no no, not that word')
    }
    else if (msg.content.toLowerCase() === 'niger') {
        msg.delete();
        msg.channel.send('no no no, not that word')
    }
    else if (msg.content.toLowerCase() === 'niga') {
        msg.delete();
        msg.channel.send('no no no, not that word')
    }
    else if (msg.content.toLowerCase() === 'n1gger') {
        msg.delete();
        msg.channel.send('no no no, not that word')
    }
    else if (msg.content.toLowerCase() === 'n1gga') {
        msg.delete();
        msg.channel.send('no no no, not that word')
    }
    else if (msg.content.toLowerCase() === 'fuck that guy') {
        msg.channel.send('Yea fuck that guy am I right!');
    }
    else if (msg.content.toLowerCase() === 'bruh') {
        msg.channel.send('BRUH BRUH BRUH');
    }
    else if (msg.content.toLowerCase() === 'joe') {
        msg.channel.send('Joe who?');
    }
    else if (msg.content.toLowerCase() === '?') {
        msg.channel.send('??');
    }
    else if (msg.content.toLowerCase() === 'carbonara') {
        msg.channel.send('carbonara?');
    }
    else if (msg.content.toLowerCase() === 'fortnite') {
        msg.channel.send('WE LOVE FORTNITE');
    }
    else if (msg.content.toLowerCase() === 'joe mama') {
        msg.channel.send('FUCK');
    }

    //auto person responses
    else if (msg.author.id === '335387205386371075') {
        msg.channel.send('BOT');
    }
    else if (msg.author.id === '254627144729100288') {
        msg.channel.send('Who are you?');
    }
    else if (msg.author.id === '444612036543119360') {
        msg.channel.send('STEVEN!');
    }
    else if (msg.author.id === '503720029456695306') {
        msg.channel.send('Fuck off Dad.');
    }
    else if (msg.author.id === '279321020052013066') {
        msg.channel.send('Fuck you Pussy');
    }

        //mention messages
    else if (msg.mentions.users === "161140743249854464") {
        msg.channel.sens('Stop talking to the boomer');
    }
    else if (msg.mentions.users === "181011485936451584") {
        msg.channel.sens('Do not anger Mr. Gesmashsmash');
    }
    else if (msg.mentions.users === "247360217673760769") {
        msg.channel.sens('Temour cannot play right now as there is a cement truck in the way. Try again later.');
    }
    else if (msg.mentions.users === "323192589337755648") {
        msg.channel.sens('Make sure your are being respectful when talking to a Co-Super Admin!');
    }
    else if (msg.mentions.users === "335386836128104449") {
        msg.channel.sens('Make sure your are being respectful when talking to a Co-Super Admin!');
    }

    //commands
    else if (msg.content.toLowerCase() === '.10man') {
        msg.channel.send('@everyone 10 man happening message if you want in')
    }
    else if (msg.content.toLowerCase() === '.ira') {
        msg.channel.send('We do not associate')
    }
    else if (msg.content.toLowerCase() === '.superadmin') {
        msg.channel.send('Luke & Adam are currently Co-Super Admins')
    }
    else if (msg.content.toLowerCase() === '.twitch') {
        msg.channel.send('https://www.twitch.tv/look_');
        msg.channel.send('https://www.twitch.tv/iamcg');
        msg.channel.send('https://www.twitch.tv/goyathlay_towy');
        msg.channel.send('https://www.twitch.tv/jnicog');
    }
    else if (msg.content.toLowerCase() === '.commands') {
        msg.channel.send('.10man, .ira, .superadmin, .twitch')
    }
});

// cameron thomp ID - 335387205386371075
// my id - 335386836128104449
