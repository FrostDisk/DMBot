const axios = require('axios');

const logger = require('./logger');

const wikidexUrl = 'https://n1z0-wikidex-api.herokuapp.com';

const getPokemonData = async(search) => {

    logger.silly(`getPokemonData(search: ${search})`);

    const resp = await axios.get(wikidexUrl + '/Pokemon/ByName/' + search);
    
    return resp.data;
}

module.exports = {
    getPokemonData
}