'use strict';
const debug = require('debug');

const Discord = require('discord.js');
const parser = require('discord-command-parser');

const bot = new Discord.Client();

require('./config/env');

const config = require('./config/bot.json');

const TOKEN = process.env.TOKEN;

bot.login(TOKEN)
    .then(() => debug('Login'))
    .catch(err => debug(err));

bot.on('ready', () => {
    debug(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    const parsed = parser.parse(msg, config.prefix);

    if (!parsed.success) return;
    if (parsed.command === 'ping') {
        return msg.reply('Pong!');
    }
});