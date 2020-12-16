const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const clientCommands = require('./commands');

// Parse commands data from folder
Object.keys(clientCommands).map(key => {
    client.commands.set(clientCommands[key].name, clientCommands[key]);
});

// Randomizer util for generating random speech interactions
const randomizor = require("./randomizer");

// Prefixes
const prefixes = ["sal","hey sal","sally boy","mr montenegro","salbot","sal bot","sal montenegro"];

function setRandomActivity() {
    client.user.setActivity(randomizor.random('activity'));
}
  
client.on('ready', () => {
    console.log('Sal is ready.');
    setRandomActivity();
});

client.on('message', async msg => {
    // Ignore messages from Sal and other bots
    if(msg.author.bot) return;

    // Parse commands
    const start = msg.content.split(',').shift().replace(/(,|\.|!|\?)/g,"").toLowerCase();
    const args = msg.content.replace(/(,|\.|!|\?)/g,"").split(/ +/).slice(start.split(" ").length);
    args.forEach(function(value) { value = value.toLowerCase(); });
    console.log(args);
    if(prefixes.includes(start)) {
        const command = args.shift().toLowerCase();
        console.info(`Called command: ${command}`);

        if (!client.commands.has(command)) {
            msg.reply(random("unknown-command"));
        }
        else {
            try {
                client.commands.get(command).execute(msg, args);
            } catch (error) {
                console.error(error);
                msg.reply('My bad G, there was some kind of error while I was trying to do that for you.');
            }
        }
    }
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

const config = require('./config.json');
const { random } = require('./randomizer');

// THIS  MUST  BE  THIS  WAY
client.login(config.LOCAL_TOKEN); // BOT_TOKEN is the Client Secret      set to: process.env.BOT_TOKEN for Heroku deployment