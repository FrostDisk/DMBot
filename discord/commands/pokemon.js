const Discord = require('discord.js');

const logger = require('../../components/logger');
const wikidex = require('../../components/wikidex');

module.exports = {
    name: 'pokemon',
    description: 'Pokemon Information',
    async execute(message, args) {

        let results = await wikidex.searchArticles(args[0]);

        let articleName = results[1][0];

        if (!articleName) {
            msg.reply('No encontré ningun Pokemon con ese nombre');
            return;
        }

        let pages = await wikidex.getArticle(articleName).query.pages;

        let pageid = Object.keys(pages)[0];
        if (pageid === "-1") {
            msg.reply('Artículo no encontrado');
            return;
        }

        let article = pages[pageid];

        let images = await wikidex.getImages(articleName).query.allimages;

        let imageIndex = images.findIndex(image => image.name.startsWith(articleName + '.'));

        let image = images[imageIndex];

        const embed = new Discord.RichEmbed()
            .setColor('#FFD865')
            .setTitle(articleName)
            .setURL(article.fullurl)
            //.setDescription('Some description here')
            .setThumbnail(image.url)
            .setImage(image.url)
            .setTimestamp()

        message.channel.send(embed);

    },
};