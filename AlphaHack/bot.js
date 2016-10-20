try {
	var Discord = require("discord.js");
} catch (e){
	console.log(e.stack);
	console.log(process.version);
	console.log("Please run npm install and ensure it passes with no errors!");
	process.exit();
}
console.log("Starting DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);
try {
	var msic = require("./music_plugin");
	var msic_plugin = new msic();
} catch(e){
	console.log("couldn't load YT/Music plugin!\n"+e.stack);
}
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
