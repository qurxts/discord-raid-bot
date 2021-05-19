const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json')

client.once('ready', () => {
  console.log(`READY!!!!!!`)
})

client.on('message', message => {
  if(message.content === `${prefix}ping`) {
    message.channel.send('pong')
  }
  else if(message.content === `${prefix}user-info`) {
    message.channel.send(`Your username is ${message.author.username}, Your ID is: ${message.author.id}`)
  }else if(message.content === `${prefix}help`) {
    message.channel.send('Here are my commands: |HELP|: Shows this message.|PING|: Sends back pong. |USER-INFO|: Shows your username and ID')
  }else if(message.content === `${prefix}email`) {message.channel.send(`Here is your email: ${message.author.email}`)}else if(message.content === `${prefix}raid`); {
    message.channel.send('@everyone');
  }
});

const { token, prefix } = require('./config.json')
client.login(token);
