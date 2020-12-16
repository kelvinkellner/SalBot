const { random } = require("../../randomizer");

module.exports = {
    name: 'joke',
    description: 'Sal tells a joke',
    execute(msg, args) {
        // Grabs a random joke and sends it to the channel.
        const chance = Math.random();//random();

        if(chance >= 0.66) {
            // Tells an interactive joke
            const joke = random('knock-knock-joke');

            msg.channel.send('Knock knock');

            const filter = m => m.content.author == msg.author;
            // Errors: ['time'] treats ending because of the time limit as an error
            channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => console.log(collected.size))
                .catch(msg.channel.send('Man, you really don\'t want to hear my joke :( I\'ll just head out...'));

            msg.channel.send(joke[0]);

            channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => console.log(collected.size))
                .catch(msg.channel.send('Man, you really don\'t want to hear my joke :( I\'ll just head out...'));

            msg.channel.send(joke[1]);

        } else if(chance >= 0.33) {
            // Tells a knock-knock joke
            const joke = random('interactive-joke');

            msg.channel.send(joke[0]);

            channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => console.log(collected.size))
                .catch(msg.channel.send('Man, you really don\'t want to hear my joke :( I\'ll just head out...'));

            msg.channel.send(joke[1]);

        } else {
            // Tells a one-liner
            msg.channel.send(random('one-liner-joke'));
        }
    },
};