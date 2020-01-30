//  Environment
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Load local development variables
if (process.env.NODE_ENV === 'dev') {
    require('./env-dev.js');
}