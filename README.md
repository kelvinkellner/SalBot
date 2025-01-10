# SalBot
A Discord bot for me and my friends :)


# User Guide

### Prerequisites

- Node.js installed: [Download Node.js](https://nodejs.org/en/download)

### Installation

Clone this repository to your server using Git:
`git clone https://github.com/kelvinkellner/SalBot.git`

The program requires Discord.js, in the repository directory, use the command:
`npm install discord.js`

Next, you will need to provide your Discord bot token to this program, create a file named `config.json` in the repository directory with the following format:
```
{
    "LOCAL_TOKEN": "YOUR_TOKEN_HERE"
}
```
Follow this guide if you do not know where to find you Discord bot token: [How to Get a Discord Bot Token](https://www.writebots.com/discord-bot-token/)

To run the program, simply use the `node bot.js` command in the repository directory.