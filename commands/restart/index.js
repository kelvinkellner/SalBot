const { random } = require('../../randomizer');

module.exports = {
    name: 'restart',
    description: 'Restart.',
    execute(msg, { client }) {
      client
      msg.reply(random('affirm'))
        .catch(error => msg.reply(`Sorry ${msg.author} I cannot be reset, because : ${error}`));
      client.destroy();
      client.login(token);
      randomActivity();
      msg.channel.send('I\'m back!');
    },
};