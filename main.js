const Discord = require('discord.js');
const secrets = require('./secrets');
const config = require('./config');

function randomElementOf(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  function hasMagicWord(magicWord) {
    return msg.content.toLowerCase().includes(magicWord);
  }
  if (config.MAGIC_WORDS.find(hasMagicWord) !== undefined) {
    msg.reply('', {
      files: [randomElementOf(config.IMAGES)],
    });
  }
});

client.login(secrets.DISCORD_TOKEN);

/* vim: set expandtab sts=2 sw=2 : */
