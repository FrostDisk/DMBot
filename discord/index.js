'use strict';
const Discord = require('discord.js');
const parser = require('discord-command-parser');
const logger = require('../components/logger');

const config = require('../config/bot.json').discord;

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.login(process.env.TOKEN)
    .then(() => {
        logger.silly('login()');
        logger.info('Login successful')
    })
    .catch(err => logger.error(err));

bot.on('ready', () => {
    logger.silly('ready()');
    logger.info(`Logged in as ${bot.user.tag}!`);
});

const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.on('message', message => {

    logger.silly('message()');

    logger.debug(`Message received: ${message.content}`);

    const parsed = parser.parse(message, config.commandprefix);

    let command = parsed.command;

    if (!parsed.success) return;

    logger.debug(`Command parsed: ${parsed.command}`, { parsed });

    if (!bot.commands.has(command)) return message.reply('Invalid command');

    try {
        bot.commands.get(command).execute(message, parsed.arguments);
    } catch (error) {
        logger.error(`There was an error trying to execute that command: ${error.message}`, { error });
        message.reply('there was an error trying to execute that command!');
    }
});