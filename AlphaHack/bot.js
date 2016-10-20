try {
	var Discord = require("discord.js");
} catch (e){
	console.log(e.stack);
	console.log(process.version);
	console.log("Please run npm install and ensure it passes with no errors!");
	process.exit();
}
console.log("Starting DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);

const alphaBot = new Discord.Client();

alphaBot.on('ready', () => {
  console.log('Ready for usage.');
});

alphaBot.on('message', message => {
if(message.content === '/help'){
      message.reply('There is no help at the moment.');
  }
});

alphaBot.login("your token");
