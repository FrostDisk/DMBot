const Discord = require('discord.js');
const MovieDB = require('node-themoviedb');

const logger = require('../../components/logger');

const options = {
    language: 'es-CL'
};

const mdb = new MovieDB(process.env.TMDB_APIKEY, options);

module.exports = {
    name: 'tmdb',
    description: 'TMDb Movies',
    async execute(message, args) {

        logger.debug(`!tmdb ${args.join(" ")}`);

        let results = await tmdb.get('search/movie', {
            query: args.join(" "),
          });

        if (!results) {
            msg.reply('No encontré ninguna Película con ese título');
            return;
        }

        const embed = new Discord.MessageEmbed()
            .setColor('#FFD865')
            .setTitle(article.name)
            .setURL(article.urlArticle)
            .setDescription(article.description)
            .setThumbnail(article.urlThumbnail)
            .setTimestamp()

        message.channel.send(embed);

    },
};