const { random } = require('../../randomizer');

module.exports = {
  name: 'joke',
  description: 'Sal tells a joke',
  execute(msg, args) {
    // Grabs a random joke and sends it to the channel.
    const chance = Math.random(); //random();

    if (chance >= 0.65) {
      // Tells an interactive joke
      const joke = random('knock-knock-joke');

      msg.channel.send('Knock knock');

      const filter = m => m.author == msg.author;
      const collector = msg.channel.createMessageCollector(filter, { time: 60000 });

      let count = 0;
      collector.on('collect', m => {
        if (count <= 1) {
          msg.channel.send(joke[count]);
          count++;
        } else {
          collector.stop();
        }
      });
    } else if (chance >= 0.35) {
      // Tells a knock-knock joke
      const joke = random('interactive-joke');

      msg.channel.send(joke[0]);

      const filter = m => m.author == msg.author;
      const collector = msg.channel.createMessageCollector(filter, { time: 60000 });

      collector.on('collect', m => {
        msg.channel.send(joke[1]);
        collector.stop();
      });
    } else {
      // Tells a one-liner
      msg.channel.send(random('one-liner-joke'));
    }
  },
};
