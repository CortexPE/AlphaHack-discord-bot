var Discord = require("discord.js");
var alphaBot = new Discord.Client();

alphaBot.on('ready', () => {
  console.log('Ready for usage.');
});

alphaBot.on('message', message => {
if(message.content === '/help'){
      message.reply('There is no help at the moment.');
  }
});

alphaBot.login("Bot token");
