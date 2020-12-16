const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./config.json");

// Access file containing random prompts, replies, and other conversational utilities
const randomizor = require("./randomizer");

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

    // Check for prefix
    if(message.startsWith(config.prefix)) {
        // if (message.content === 'ping') {
        //     message.reply('pong');
        // }
        message.reply(message.content);
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN); // BOT_TOKEN is the Client Secret
console.log(client);