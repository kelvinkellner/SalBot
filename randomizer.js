module.exports = {
    random: function(set) {
        let list = null;
        switch(set) {
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
                Console.log('Error. Invalid randomizer code.');
                break;
          };
    
        let value = null;
        if (list !== null)
            value = list[Math.floor(Math.random() * list.length)];
        return value;
    }
 }

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
    'The Piano',
    'Guitar',
    'Soccer',
    'Rock Paper Scissors',
    'An Instrument',
    'With His Nephews',
];

goodbye = [
    'Adios!',
    'See you!',
    'Bye-bye!',
    'See you later!',
    'Ttyl!',
    'Sally boi signing off.',
    'Peace be with you.',
    'Peace out!'
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
    'Of course!'
];

unkownCommand = [
    'I don\'t know that command.',
    'I\'m not understanding you.',
    'I really don\'t get what you\'re saying to me rn.',
    'I haven\'t learned that command yet.',
    'Downloading command from the interwebs... Nope can\'t find it.',
    'Not sure what that means.'
]

yes = [
    'Mhmm',
    'Yup',
    'Yes'
]

no = [
    'No',
    'Nope',
    'Nah'
]

jokeKnockKnock = [
    'TODO: make knock knock jokes'
]

jokeInteractive = [
    'TODO: make interactive jokes'
]

jokeOneLiner = [
    'Marco... That\'s the whole joke...'
]