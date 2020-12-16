module.exports = {
    name: 'stop',
    description: 'Stop.',
    execute(msg, args) {
      msg.reply(randomizor.random('goodbye'))
        .catch(error => message.reply(`Sorry ${msg.author} I cannot be stopped, because : ${error}`));
      client.destroy();
    },
};