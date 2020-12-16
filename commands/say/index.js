module.exports = {
    name: 'say',
    description: 'Sal says something',
    execute(msg, args) {
        msg.delete();
        msg.channel.send(args.join(' '));
    },
};