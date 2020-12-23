module.exports = {
    name: 'say',
    description: 'Sal says something',
    execute(msg, { leftOvers }) {
        msg.channel.send(leftOvers);
        msg.delete();
    },
};
