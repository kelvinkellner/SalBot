const { random } = require('../../randomizer');

module.exports = {
  name: 'restart',
  description: 'Restart.',
  execute(msg, { client, token, setRandomActivity }) {
    client;
    msg.reply(random('affirm')).catch(error => msg.reply(`Sorry ${msg.author} I cannot be reset, because : ${error}`));
    client.destroy();
    client.login(token);
    setRandomActivity();
    msg.channel.send("I'm back!");
  },
};
