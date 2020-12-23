const { random } = require('../../randomizer');

module.exports = {
    name: 'stop',
    description: 'Stop.',
    execute(msg, { client }) {
      msg.reply(random('goodbye'))
        .catch(error => msg.reply(`Sorry ${msg.author} I cannot be stopped, because : ${error}`));
      client.destroy();
    },
};