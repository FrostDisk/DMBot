const Discord = require('discord.js');

const logger = require('../../components/logger');
const wikidex = require('../../components/wikidex');

module.exports = {
    name: 'pokemon',
    description: 'Pokemon Information',
    async execute(message, args) {

        logger.debug(`!pokemon ${args[0]}`);

        let article = await wikidex.getPokemonData(args[0]);

        if (!article) {
            msg.reply('No encontré ningun Pokemon con ese nombre');
            return;
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#FFD865')
            .setTitle(article.name)
            .setURL(article.urlArticle)
            .setDescription(article.description)
            .addFields(
                { name: 'Generación', value: article.generation },
                { name: 'Tipo', value: article.type1, inline: true },
                { name: 'Especie', value: article.species, inline: true }
            )
            .setThumbnail(article.urlThumbnail)
            .setTimestamp()

        message.channel.send(embed);

    },
};