const Discord = require('discord.js');
const client = new Discord.Client();

const randomizor = require("./randomizer");

const prefix = "Sal, ";

function setRandomActivity() {
    client.user.setActivity(randomizor.random('activity'));
}
  
client.on('ready', () => {
    console.log('I am ready!');
    setRandomActivity();
});

client.on('message', async message => {
    // Ignore messages from Sal and other bots
    if(message.author.bot) return;

    // Parse commands
    if(message.content.startsWith(prefix)) {
        message.reply(message.content);
    }
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); // BOT_TOKEN is the Client Secret
console.log(client);