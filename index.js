const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Discord.Client();

const pf = process.env.PREFIX;

bot.on('message', (message)=>{
    const parts = message.content.split(' ');
    
    if(parts[0] === pf + "hello"){
        message.reply('Hi @' + message.author);
    }
});

bot.login(process.env.TOKEN);