module.exports = {
    name: 'say',
    description: 'Sal says something',
    execute(msg, args) {
        msg.channel.send(args.join(' '));
        msg.delete();
    },
};
