const axios = require('axios');

const logger = require('./logger');

const wikidexUrl = 'http://es.pokemon.wikia.com/api.php';

const searchArticles = async(search) => {

    logger.silly(`searchArticles(search: ${search})`);

    const resp = await axios({
        method: 'GET',
        url: wikidexUrl,
        params: {
            'format': 'json',
            'action': 'opensearch',
            'search': search
        }
    });

    return resp.data;
}

const getArticle = async(titles) => {

    logger.silly(`getArticle(titles: ${titles})`);

    const resp = await axios({
        method: 'GET',
        url: wikidexUrl,
        params: {
            'format': 'json',
            'action': 'query',
            'titles': titles,
            'prop': 'info',
            'inprop': 'url'
        }
    });

    return resp.data;
}

const getImages = async(aifrom) => {
    
    logger.silly(`getImages(aifrom: ${aifrom})`);

    const resp = await axios({
        method: 'GET',
        url: wikidexUrl,
        params: {
            'format': 'json',
            'action': 'query',
            'list': 'allimages',
            'aifrom': aifrom
        }
    });

    return resp.data;
}

const getLastRevision = async(titles) => {

    logger.silly(`getLastRevision(titles: ${titles})`);
    const resp = await axios({
        method: 'GET',
        url: wikidexUrl,
        params: {
            'format': 'json',
            'action': 'query',
            'titles': titles,
            'prop': 'revisions',
            'rvprop': 'content'
        }
    });

    return resp.data;
}

module.exports = {
    searchArticles,
    getArticle,
    getImages,
    getLastRevision
}