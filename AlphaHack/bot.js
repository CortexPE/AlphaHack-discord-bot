const Discord = require("discord.js");
const alphaBot = new Discord.Client();

alphaBot.on('ready', () => {
  console.log('AlphaBot Ready For Action!');
});

alphaBot.on('message', message => {
if(message.content === '/help'){
      message.reply('There is no mercy for you...');
  }
});

alphaBot.login("your token");
