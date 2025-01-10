const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const clientCommands = require('./commands');

// Parse commands data from folder
Object.keys(clientCommands).map(key => {
  client.commands.set(clientCommands[key].name, clientCommands[key]);
});

const { random } = require('./randomizer'); // Randomizer util for generating random speech interactions
const config = require('./config.json'); // Comment out for Heroku deployment
const token = config.LOCAL_TOKEN; //set to: process.env.BOT_TOKEN for Heroku deployment, set to: config.LOCAL_TOKEN for local testing

// Prefixes
const prefixes = ['sal', 'hey sal', 'sally boy', 'mr montenegro', 'salbot', 'sal bot', 'sal montenegro'];

// Set user activity for SalBot
function setRandomActivity() {
  client.user.setActivity(random('activity'));
}

// Start SalBot
client.on('ready', () => {
  console.log('Sal is ready.');
  setRandomActivity();
});

client.on('messageCreate', async msg => {
  // Ignore messages from bots
  if (msg.author.bot) return;

  console.log(MessageChannel.content);

  // Parse commands
  const start = msg.content.split(',').shift(); //.replace(/(,|\.|!|\?)/g,"").toLowerCase();
  const leftOvers = msg.content.slice(0, start.length + 2);
  const args = msg.content
    .replace(/(,|\.|!|\?)/g, '')
    .split(/ +/)
    .slice(start.split(' ').length);
  args.forEach(function (value) {
    value = value.toLowerCase();
  });
  console.log(args);
  if (prefixes.includes(start.replace(/(,|\.|!|\?)/g, '').toLowerCase())) {
    const command = args.shift().toLowerCase();
    console.info(`Called command: ${command}`);

    if (!client.commands.has(command)) {
      msg.reply(random('unknown-command'));
    } else {
      try {
        client.commands.get(command).execute(msg, { args, leftOvers, client, token, setRandomActivity });
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

// THIS  MUST  BE  THIS  WAY
client.login(token); // BOT_TOKEN is the Client Secret
