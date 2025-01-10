module.exports = {
  random: function (set) {
    let list = null;
    switch (set) {
      case 'activity':
        list = activities;
        break;
      case 'goodbye':
        list = goodbye;
        break;
      case 'affirm':
        list = affirm;
        break;
      case 'unknown-command':
        list = unkownCommand;
        break;
      case 'yes':
        list = yes;
        break;
      case 'no':
        list = no;
        break;
      case 'knock-knock-joke':
        list = jokeKnockKnock;
        break;
      case 'interactive-joke':
        list = jokeInteractive;
        break;
      case 'one-liner-joke':
        list = jokeOneLiner;
        break;
      default:
        console.log('Error. Invalid randomizer code.');
        break;
    }

    let value = null;
    if (list !== null) value = list[Math.floor(Math.random() * list.length)];
    return value;
  },
};

activities = [
  'Minecraft: Pocket Edition',
  'Plants vs. Zombies',
  'Guitar Hero',
  'Call of Duty: Black Ops II',
  'Mario Kart: Double Dash',
  'Tetris',
  'Patty Cake',
  'Tic-Tac-Toe',
  'Checkers',
  'Chess',
  'The Piano',
  'The Guitar',
  'Soccer',
  'Rock Paper Scissors',
  'An Instrument',
  'With His Nephews',
  'Candy Crush Saga',
];

goodbye = [
  'Adios!',
  'See you!',
  'Bye-bye!',
  'See you later!',
  'Ttyl!',
  'Sally boi signing off.',
  'Peace be with you.',
  'Peace out!',
];

affirm = [
  'Okie dokie!',
  'Will do!',
  'On it!',
  'Alrighty then!',
  'Working on it!',
  'Whatever you say!',
  'If you say so!',
  'Sure dude!',
  'Alrighty!',
  'Okay!',
  'Of course!',
];

unkownCommand = [
  "I don't know that command.",
  "I'm not understanding you.",
  "I really don't get what you're saying to me rn.",
  "I haven't learned that command yet.",
  "Surfing the internet in search of that command... Nope can't find it.",
  'Not sure what that means.',
];

yes = ['Mhmm', 'Yup', 'Yes'];

no = ['No', 'Nope', 'Nah'];

jokeKnockKnock = [
  ['Lina.', "Lina little closer and I'll tell you."],
  ['Hike.', 'Little did you know\nI write decent poetry\nHope you liked this joke.'],
  ['Spell.', 'W-H-O.'],
  ['Cash.', "No thanks, but I'd love some pecans."],
  ['Dwayne.', "Dwayne the pool, I can't swim."],
  ['Beats.', 'Beats me.'],
  ['Boo.', 'Why are you crying?'],
  ['Doctor.', 'No, no, just the doctor.'],
  ['Lettuce.', "Lettuce in or we'll break the door down."],
];

jokeInteractive = [
  ['Did you hear about the Italian chef that died?', 'He pasta way.'],
  ['What do you call a dodgy neighbouurhood in Italy?', 'A spaghetto.'],
  ['Where do pepperonis go on vacation?', 'The leaning tower of pizza.'],
  ['How do you make a million dollars in the stock market?', 'Start with two million.'],
  ['Why did the football coach go to the bank?', 'To get his quarterback.'],
];

jokeOneLiner = [
  "I saw a bank that offered 24 Hour Banking. I didn't go in though, I don't have that kind of time.",
  'My bank loves me. They told me my credit card balance is outstanding.',
  "An old lady in the bank told me to check her balance, so I pushed her over. She wasn't too happy about that.",
  "I went to the bank to apply for a Personal Loan. Then they found out I wanted to become a rapper. So unfortunately, they didn't want to Post M'lone.",
  'How do you keep an idiot in suspense?',
];
