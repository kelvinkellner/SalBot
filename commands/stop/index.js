const { random } = require('../../randomizer');

module.exports = {
    name: 'stop',
    description: 'Stop.',
    execute(msg, { client }) {
      msg.reply(random('goodbye'));
      client.destroy();
    },
};